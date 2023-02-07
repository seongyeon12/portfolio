import { useState, useEffect, useContext } from "react"

export default function Login({}) {
  useEffect(() => {
    const queryString = window.location.search 
    const urlParams = new URLSearchParams(queryString)
    const codeParam = urlParams.get("code")

  if (codeParam && (localStorage.getItem("accessToken") === null)) {
    async function getAccessToken() {
      await fetch("http://localhost:4000/getAccessToken?code=" + codeParam, {
        method: "GET",
      }).then((response) => {
        return response.json()
      }).then((data) => {
        if (data.access_token) {
          localStorage.setItem("accessToken", data.access_token)
        }
      })
      await fetch("http://localhost:4000/getUserData", {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("accessToken")
        }
      }).then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data, "d")
        localStorage.setItem("userId", data.id)
        localStorage.setItem("username", data.username)
      })
    }

    getAccessToken()

    setTimeout(() => {
      history.back()
    }, [1500])
  }
  }, [])
}