const express=require('express')

function login(req,res){
    res.render('admin')
}

module.exports={login}