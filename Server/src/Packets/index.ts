import WebSocket from "ws";

export interface PacketInterface {
    type: PacketTypes,
    data: any,
}

export enum PacketTypes {
    HANDSHAKE = "handshake",
}

export function sendPacket(conn: WebSocket, packet: PacketInterface) {
    conn.send(JSON.stringify(packet));
}