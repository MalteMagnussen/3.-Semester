/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package proxy;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Scanner;
import java.util.concurrent.ExecutorService;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.container.AsyncResponse;
import javax.ws.rs.container.Suspended;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Malte
 */
@Path("countryProxy")
public class CountryProxyResource {

    private String URI = "http://restcountries.eu/rest/v1/alpha?codes=";
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of CountryProxyResource
     */
    public CountryProxyResource() {
    }
    private ExecutorService executorService = java.util.concurrent.Executors.newCachedThreadPool();

    /**
     * Retrieves representation of an instance of proxy.CountryProxyResource
     *
     * @param asyncResponse
     * @param country
     */
    @GET
    @Path("/{country}")
    @Produces(MediaType.APPLICATION_JSON)
    public void getJson(@Suspended
            final AsyncResponse asyncResponse, @PathParam(value = "country")
            final String country) {
        executorService.submit(new Runnable() {
            @Override
            public void run() {
                asyncResponse.resume(doGetJson(country));
            }
        });
    }

    /**
     *
     * @param country
     * @return
     */
    private String doGetJson(@PathParam("country") String country) {
        try {
            String URL = URI + country;
            URL url = new URL(URL);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
            con.setRequestProperty("Accept", "application/json;charset=UTF-8");
            String jsonStr;
            try (Scanner scan = new Scanner(con.getInputStream())) {
                jsonStr = null;
                if (scan.hasNext()) {
                    jsonStr = scan.nextLine();
                }
            }
            
            return jsonStr;
        } catch (IOException ex) {
            return "{\"status\":400, \"message\":\"Bad Request\"}";
        }
    }

}
