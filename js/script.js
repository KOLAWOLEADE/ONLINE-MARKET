$(document).ready(function(){
    $("#form").submit(function(event){

        event.preventDefault
       

        const AirconditionInput = $("#Aircondition").val();
        const SocksInput = $("#Socks").val();
        const Blender = $("#Blender").val();
        const Fan = $("#Fan").val();
        const Glasses = $("#Glasses").val();
        const Jacket = $("#Jacket").val();
        const Infinix = $("#Infinix").val();
        const Iron = $("#Iron").val();
        const Wears = $("#Wears").val();
        const Zipper = $("#Zipper").val();
        const Microwave = $("#Microwave").val();
        const PowerBank = $("#PowerBank").val();
        const SliconeWatch = $("#SliconeWatch").val();
        const Sneakers = $("#Sneakers").val();
        const TV = $("#TV").val();
        const Iwatch = $("#Iwatch").val();
        const Headphones = $("#Headphones").val();

        console.log(Iwatch)

        console.log(AirconditionInput)

        let list = [AirconditionInput, SocksInput, Blender, Fan, Glasses, Jacket, Infinix, Iron, Wears, Zipper, Microwave, PowerBank, SliconeWatch, Sneakers, TV, Iwatch, Headphones]

        console.log(list)

        ("#list").show();

        ("#list").text();




    })

})