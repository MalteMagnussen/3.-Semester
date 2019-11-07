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
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Malte
 */
@Path("binance")
public class BinanceResource {

    /**
     * The restful endpoint we will use is
     * https://api.binance.com/api/v3/avgPrice?symbol=BTCTUSD which gives us the
     * average price of a symbol (a symbol is a coinpair in this case the price
     * of Bitcoin in US Dollars (TUSD)) Tasks:. 1. Create a new data facade to
     * get data from binance api. 2. In the facade create a method to return the
     * price given a symbol 3. Use an Executor Service to start as many new
     * threads as there are symbols to check. 4. Submit new tasks to the
     * executor service where you use Callables to get prices based on the
     * symbol 5. Aggregate the prices into a java Map<String, Double> where key
     * is the symbol name and value is the price 6. Create a restful endpoint in
     * your server so that by requesting crypto prices a client can get json
     * formed response with prices of all the symbols 7. Here is a list of some
     * available symbols:
     * (“ADATUSD”,”ATOMTUSD”,”BATTUSD”,BNBTUSD”,”BTCTUSD”,”EOSTUSD”,”ETCTUSD”,”ETHTUSD”,”LTCTUSD”,”NEOTUSD”,”TRXTUSD”,”XRPTUSD”)
     * 8. Create a client app in react with a CryptoTable component where you
     * can show the daily average price of all coin pairs.
     */
    private final String URI = "https://api.binance.com/api/v3/avgPrice?symbol=";

    private static final ExecutorService workingJack = Executors.newCachedThreadPool();
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();
    
    @Context
    private UriInfo context;

    /**
     * Creates a new instance of BinanceResource
     */
    public BinanceResource() {
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public List<Price> getJson(List<String> currency) throws InterruptedException, ExecutionException {
        List<Future<Price>> prices = new ArrayList<>();
        currency.forEach((c) -> {
            Future<Price> price = workingJack.submit(() -> {
                return GSON.fromJson(doGetJson(c), Price.class);
            });
            prices.add(price);
        });
        List<Price> returnPrices = new ArrayList<>();
        for(Future<Price> p: prices){
            returnPrices.add(p.get());
        }
        
        return returnPrices;
    }

    /**
     * Helper function
     */
    private String doGetJson(String search) {
        try {
            String URL = URI + search;
            URL url = new URL(URL);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
            con.setRequestProperty("Accept", "application/json;charset=UTF-8");
            String jsonStr = "";
            try (Scanner scan = new Scanner(con.getInputStream())) {
                while (scan.hasNext()) {
                    jsonStr = jsonStr.concat(scan.nextLine());
                }
            }
            return jsonStr;
        } catch (IOException ex) {
            return "{\"status\":400, \"message\":\"Bad Request\"}";
        }
    }

}
