const app=require("./app");
const PORT=5000 || 8080;
app.listen(PORT,function () {
    console.log("App Run at port ", PORT)
})