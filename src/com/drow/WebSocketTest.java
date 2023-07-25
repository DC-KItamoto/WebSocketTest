package com.drow;

import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;

import java.net.InetSocketAddress;

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

    }

    @Override
    public void onClose(WebSocket webSocket, int i, String s, boolean b) {

    }

    @Override
    public void onMessage(WebSocket webSocket, String s) {
        webSocket.send(s+"おくりましたね？");
    }

    @Override
    public void onError(WebSocket webSocket, Exception e) {

    }

    @Override
    public void onStart() {

    }
}
