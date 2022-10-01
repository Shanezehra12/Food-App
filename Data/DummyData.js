export const CATEGORY = [
    {
      id: 0,
      name: "Beef Pizza",
      image: "https://media.istockphoto.com/photos/steak-and-mushroom-pizza-picture-id477995767?k=20&m=477995767&s=612x612&w=0&h=3QuW2H4BmHxtHBaK7VQiGEKuabJDQPruqEi9ecb362s=",
    },
    {
      id: 1,
      name: "Chicken Pizza",
      image: "https://thumbs.dreamstime.com/b/curry-chicken-pizza-tomato-onion-chili-powder-black-pepper-isolated-wooden-cutting-board-side-view-fastfood-table-252842825.jpg",
    },
    {
      id: 2,
      name: "Vegetarian Pizza",
      image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Waagmi_Soni/Gralic_Crust_Veggie_Pizza.jpg",
    },
    {
      id: 3,
      name: "Breakfast Pizza",
      image: "https://img.freepik.com/premium-photo/delicious-pizza-with-bacon-egg-arugula-served-wooden-table-surrounded-with-fresh-ingredients_272335-27.jpg?w=2000",
    },
  ];
  
  export const AllMeals = [
    {
/*         BEEF PIZZA */      
      id: Math.random(),
      name: "Crazy Crust",
      image: "https://lh3.googleusercontent.com/u7zUmpfg2D5RtnREtXl3gns1B10RfQa8YMVo-bwllJBa9dqC4FDqqpuW9xENH5TEUmyqWRLGR179Be96JUW2hnfljNZxLnwHkAFJSfU=s1200-p",
      catId: 0,
      imagesUrl: [
        {
          id: Math.random(),
          image:
          "https://iamhomesteader.com/wp-content/uploads/2022/05/crazy-crust-pizza.jpg",
        },
        {
          id: Math.random(),
          image:
          "https://recipes.net/wp-content/uploads/2020/04/yummy-crazy-crust-pizza.jpg",
        },
      ],
      Steps: [
        {
          id: Math.random(),
          stepCount: "Step One",
          stepDescription:
          "Preheat oven to 400 degrees F (200 degrees C). Lightly grease a rimmed pizza pan or baking sheet.",
        },
        {
          id: Math.random(),
          stepCount: "Step Two",
          stepDescription:
          "In a large bowl, stir together flour, salt, oregano and black pepper. Mix in eggs and milk; stir well. Pour batter into prepared pan and tilt until evenly coated. Arrange toppings of choice on top of batter.",
        },
        {
          id: Math.random(),
          stepCount: "Step Three",
          stepDescription:
          "Bake in preheated oven for 20 to 25 minutes, until crust is set.",
        },
        {
          id: Math.random(),
          stepCount: "Step Four",
          stepDescription:
          "Remove crust from oven. Drizzle on pizza sauce and sprinkle on cheese. Bake until cheese is melted, about 10 minutes.",
        },
      ],
      timeDuration: "45min - 50min",
    },
    {
      id: Math.random(),
      name: "Taco Bell Maxican",
      image:
      "https://spicysouthernkitchen.com/wp-content/uploads/Taco-Bell-Mexican-Pizza-Feature-1.jpg",
      catId: 0,
    },
    {
        id: Math.random(),
        name: "Really Deep Dish",
        image:
        "https://www.savingdessert.com/wp-content/uploads/2018/03/Chicago-Style-Deep-Dish-Pizza-5.jpg",
        catId: 0,
      },
      {
        id: Math.random(),
        name: "Hamburger Crust",
        image:
        "https://qsrmedia.com.au/sites/default/files/styles/opengraph/public/2021-05/pizza-hut-cheeseburger-crust-pizza.jpg?itok=Iz5-2fMB",
        catId: 0,
      },
      {
        id: Math.random(),
        name: "Meatball",
        image:
        "https://weirdandwildpizza.com/wp-content/uploads/2021/01/main.jpg",
        catId: 0,
      },

      /*         CHICKEN PIZZA */      
    {
      id: Math.random(),
      name: "Chinese Chicken",
      image:
        "https://i.pinimg.com/originals/b8/2c/3f/b82c3fcea19c12533dca035597c23ed8.jpg",
      catId: 1,
    },
    {
        id: Math.random(),
        name: "Bbq Chicken",
        image:
          "https://www.licious.in/blog/wp-content/uploads/2020/12/BBQ-Chicken-Pizza.jpg",
        catId: 1,
      },
      {
        id: Math.random(),
        name: "Chicken and Cheese French Bread",
        image:
          "https://i2.wp.com/lmld.org/wp-content/uploads/2014/01/BBQ-Chicken-French-Bread-Pizza-1.jpg",
        catId: 1,
      },
      {
        id: Math.random(),
        name: "Spicy Garlic Chicken",
        image:
          "https://i.pinimg.com/736x/5a/a1/3a/5aa13a558206b9efdb95b844c2cafac6.jpg",
        catId: 1,
      },
      {
        id: Math.random(),
        name: "Chicken Fajita",
        image:
          "https://img-global.cpcdn.com/recipes/332e7d79e2f6bcf1/1200x630cq70/photo.jpg",
        catId: 1,
      },

            /*         VEGETARIAN PIZZA */      

      {
        id: Math.random(),
        name: "Tomato-Onion Phyllo Pizza",
        image:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps15797__CW143433D03_20_1b-2.jpg?w=1200",
        catId: 2,
       },
       {
        id: Math.random(),
        name: "Spinach-Stuffed Pizza",
        image:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps20790_CW163680B10_15_4b-AP.jpg?resize=1024,1024",
        catId: 2,
       },
       {
        id: Math.random(),
        name: "Mozzarella Cornbread Pizza",
        image:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps193029_SD163614B12_02_5b-4.jpg?w=1200",
        catId: 2,
       },
       {
        id: Math.random(),
        name: "Tomato Baguette Pizza",
        image:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/Tomato-Baguette-Pizza_EXPS_SDDJ17_40299_C08_25_7b-4.jpg?w=1200",
        catId: 2,
       },
       {
        id: Math.random(),
        name: "Grilled Flatbread Veggie Pizza",
        image:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps141668_SD153321B02_03_4b-3.jpg?w=1200",
        catId: 2,
       },

                   /*         BREAKFAST PIZZA */  
       {
        id: Math.random(),
        name: "Arugula & Mushroom",
        image:
        "https://www.tasteofhome.com/wp-content/uploads/2018/01/Arugula-Mushroom-Breakfast-Pizza_EXPS_HCK17_192796_D08_23_6b-5.jpg?w=1200",
        catId: 3,
        }, 
        {
        id: Math.random(),
        name: "Avocado & Egg Breakfast",
        image:
        "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/21/15/enhanced/webdr09/enhanced-27692-1405970823-1.jpg?downsize=600:*&output-format=auto&output-quality=auto",
        catId: 3,
        },
        {
        id: Math.random(),
        name: "Grilled Breakfast Pizza",
        image:
        "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/23/12/enhanced/webdr09/enhanced-buzz-3780-1406133803-8.jpg?downsize=600:*&output-format=auto&output-quality=auto",
        catId: 3,
        },
        {
        id: Math.random(),
        name: "Smoked Salmon",
        image:
        "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/22/14/enhanced/webdr10/enhanced-12755-1406052410-10.jpg?downsize=600:*&output-format=auto&output-quality=auto",
        catId: 3,
        },
        {
        id: Math.random(),
        name: "Naan Breakfast Pizza",
        image:
        "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/23/12/enhanced/webdr07/original-6710-1406134374-4.jpg?downsize=600:*&output-format=auto&output-quality=auto",
        catId: 3,
        },   
    
  ];
  