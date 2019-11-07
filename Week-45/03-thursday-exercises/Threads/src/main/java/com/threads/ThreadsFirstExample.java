/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.threads;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Malte
 */
public class ThreadsFirstExample {

    private static ExecutorService workingJack = Executors.newCachedThreadPool();

    private static List<Future<String>> futureList = new ArrayList<>();
    
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        for (int i = 0; i < 100; i++) {
            Future<String> future = workingJack.submit(new Callable<String>() {
                @Override
                public String call() throws Exception {
                    return Thread.currentThread().getName();
                }
            });
            futureList.add(future);
        }
        for ( Future f: futureList) {
            System.out.println(f.get());
        }
        System.out.println("Finished.");
    }
}
