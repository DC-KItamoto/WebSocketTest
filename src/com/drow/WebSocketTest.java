package com.drow;

import com.google.gson.Gson;
import com.google.gson.internal.LinkedTreeMap;
import com.google.gson.reflect.TypeToken;
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;

import java.lang.reflect.Type;
import java.net.InetSocketAddress;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Objects;

public class WebSocketTest extends WebSocketServer {
    public static void main(String[] args) {
        WebSocketTest wst = new WebSocketTest(8080);
        wst.start();
        System.out.println("port"+8080+"をスタートしました。");

    }

    public WebSocketTest(int port){
        super(new InetSocketAddress(port));
    }

    @Override
    public void onOpen(WebSocket webSocket, ClientHandshake clientHandshake) {
        webSocket.send("スタート");
    }

    @Override
    public void onClose(WebSocket webSocket, int i, String s, boolean b) {

    }

    @Override
    public void onMessage(WebSocket webSocket, String s) {
//        CollectionはListみたいなやつ
//        型はWebSocket
//        Collection<WebSocket> connections = getConnections();
//        for (WebSocket connection : connections) {
//            connection.send(s);
//        }
//        System.out.println(s);
        Gson gson = new Gson().newBuilder().create();
//        Type type = new TypeToken<LinkedTreeMap<String, Object>>(){}.getType();
//        LinkedTreeMap<String, Object> map = gson.fromJson(s, type);
        User user = gson.fromJson(s, User.class);
        System.out.println(user);
        System.out.println(user.color);
        System.out.println(user.x);
        System.out.println(user.y);
    }

    @Override
    public void onError(WebSocket webSocket, Exception e) {

    }

    @Override
    public void onStart() {

    }
}
