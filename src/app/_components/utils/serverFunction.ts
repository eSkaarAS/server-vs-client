"use server";

import { api } from "@/trpc/server";

export async function serverFunction() {
  return "Hello from server!";
}

export async function getAll() {
  return await api.post.getAll();
}

export async function getAllProtected() {
  return await api.post.getAllProtected();
}

export async function deleteUser(userId: number) {
  return await api.post.deleteUser({ userId });
}
