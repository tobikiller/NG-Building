module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "krona":"Krona One",
        "Mulish":"Mulish",
        "Bodoni": "Bodoni Moda",
        "Josefin": "Josefin Sans"
      },
      colors:{
        "PrimaryBlack":"#0B0A0A",
        "lightGray": "F2F2F2",
        "SecondaryBlack": "#333333"
      },
      backgroundImage:{
        "service1":"url('images/service1.png')",
        "service2":"url('images/service 2.png')",
        "service3":"url('images/service3.png')",
        "service4":"url('images/service4.png')",
        "service5":"url('images/service5.png')",
      }
    },
  },
  plugins: [],
}