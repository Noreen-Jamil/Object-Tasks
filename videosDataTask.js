function videosDataTask(){
    console.clear();
    let videos = [
                {
                title: "Photoshop tutorial",
                lengthInMinutes: 70,
                category: "Education",
                uploadDate: new Date("07-22-2019"),
                tags: "design, digital, photoshop, creativity",
                features: ["Live", "360°", "HDR"],
                viewCount: 4700,
                rating: 4.3
                },
                {
                title: "Episode # 01 - The Best Comedy Show",
                lengthInMinutes: 19,
                category: "Entertainment",
                uploadDate: new Date("07-03-2019"),
                tags: "comedy, funny",
                features: ["Subtitles/CC", "3D", "HD"],
                viewCount: 145615,
                rating: 3.9
                },
                {
                title: "How to use FOR EACH loop - tutorial by Tech Karo",
                lengthInMinutes: 6,
                category: "Education",
                uploadDate: new Date("11-10-2018"),
                tags: "javascript, loops, web development",
                features: ["Purchased", "HD"],
                viewCount: 9004,
                rating: 4.5
                },
                {
                title: "Yes Yes Vegetables Song + More Nursery Rhymes & Kids Songs - CoComelon",
                lengthInMinutes: 38,
                category: "Rhymes",
                uploadDate: new Date("7-9-2018"),
                tags: "rhymes, yes yes, vegetable song",
                features: ["Subtitles/CC", "3D"],
                viewCount: "1,220,177,366",
                rating: 4.6
                },
                {
                title: "Good Morning Pakistan - Eid Special Day 3 - 3rd August 2020",
                lengthInMinutes: 105,
                category: "Entertainment",
                uploadDate: new Date("7-9-2018"),
                tags: "morning show, good morning, eid special",
                features: ["Purchased", "HD"],
                viewCount: "50",
                rating: 3
                },
                {
                title: "JavaScript Introduction Tutorial in Hindi / Urdu",
                lengthInMinutes: 7,
                category: "Education",
                uploadDate: new Date("2-1-2019"),
                tags: "javascript, yahoo baba",
                features: ["Subtitles/CC", "HD"],
                viewCount: "305,386",
                rating: 4.6
                },
                {
                title: "Twinkle Twinkle Little Star",
                lengthInMinutes: 3,
                category: "Rhymes",
                uploadDate: new Date("6-9-2010"),
                tags: "rhymes, twinkle, star",
                features: ["Subtitles/CC", "3D" ],
                viewCount: "1,220,177,366",
                rating: 4
                },
                {
                title: "Tom & Jerry | The Evening Fun! | Classic Cartoon Compilation | WB Kids",
                lengthInMinutes: 29,
                category: "Entertainment",
                uploadDate: new Date("11-7-2020"),
                tags: "cartoon, tom and jerry",
                features: ["Subtitles/CC", "3D" ],
                viewCount: "10,375,652",
                rating: 3
                },
                 {
                title: "Looney Tunes | Best of Tweety Bird and Sylvester | Classic Cartoon Compilation | WB Kids",
                lengthInMinutes: 20,
                category: "Entertainment",
                uploadDate: new Date("8-8-2016"),
                tags: "cartoon, looney tunes, tweety bird",
                features: ["3D", "HD"],
                viewCount: "220,177,366",
                rating: 4.8
                },
                {
                title: "Shahi White Chicken Karahi Recipe By Food Fusion",
                lengthInMinutes: 3,
                category: "Entertainment",
                uploadDate: new Date("5-10-2020"),
                tags: "cooking , recipe, karahi, white karahi, food fusion",
                features: ["Purchased", "HD"],
                viewCount: "455,450",
                rating: 4
                },
                {
                title: "Restaurant style Seekh Kabab Recipe By Food Fusion (Ramzan Special)",
                lengthInMinutes: 4,
                category: "Entertainment",
                uploadDate: new Date("8-5-2020"),
                tags: "cooking , recipe, kabab, seekh kabab, food fusion",
                features: ["Subtitles/CC", "3D"],
                viewCount: "305,386",
                rating: 4.6
                },
                {
                title: "ABC song",
                lengthInMinutes: 2,
                category: "Rhymes",
                uploadDate: new Date(),
                tags: "rhymes, abc",
                features: ["Subtitles/CC", "3D", "HD"],
                viewCount: "1,220,177,366",
                rating: 3
                },
                {
                title: "Learn HTML5 and CSS3 From Scratch ",
                lengthInMinutes: 100,
                category: "Education",
                uploadDate: new Date(),
                tags: "HTML, CSS",
                features: ["Subtitles/CC", "3D", "HD"],
                viewCount: "5,652",
                rating: 3
                },


            ];


            let currentDate = new Date;
            // Write the following programs in Javascript.

            // Task 1
            // Add at least 10 more videos to the above array and before 
            // writing the following programs in JS.

            // Task 2
            // Print each video in this format:

            //        Title: Photoshop tutorial
            //        Length: 70 minutes
            //        Category: Education
            //        Views: 4,700
            //        Uploaded On: 22-July-2019
            //        Rating: 
            console.log(`***** Task 2 ******`)
            let month ;
            let option = {month: 'long'};//giving month name full with "long " and short with "short" value;
            videos.forEach(video =>{
                console.log(`Title: ${video.title}`); 
                console.log(`Length: ${video.lengthInMinutes} minutes`); 
                console.log(`Category: ${video.category}`); 
                console.log(`Views: ${video.viewCount}`);
                month = video.uploadDate.getMonth();
                console.log(`Uploaded On: ${video.uploadDate.getDate()}-${new Intl.DateTimeFormat('en-US', option).format(video.uploadDate)}-${video.uploadDate.getFullYear()} `); 
                console.log(`Rating: ${video.rating}`); 

            });
            // To get month in english
            // let currentDate = new Date;
            // let month = video.uploadDate.getMonth();
            // let option = {month: 'long'};//giving month name full with "long " and short with "short" value;
            // console.log(new Intl.DateTimeFormat('en-US', option).format(currentDate));

            // Task 3
            // Print titles of all short ( less than 3 minutes ) videos.
             console.log(" ");
            console.log(`***** Task 3 ******`)
            console.log(`Title of Short Videos`); 
            videos.filter(video => video.lengthInMinutes < 3 ).forEach(video =>
                    console.log(`Title: ${video.title}`)); 
             

            // Task 4
            // Print titles of all long ( greater than 20 minutes ) videos.
             console.log(" ");
            console.log(`***** Task 4 ******`)
            console.log(`Title Of long Videos`); 
            videos.filter(video => video.lengthInMinutes > 20 ).forEach(video =>
                    console.log(`Title: ${video.title}`)); 

            // Task 5
            // Print titles of all medium length videos.
            console.log(" ");
            console.log(`***** Task 5 ******`) 
            console.log(`Title of Midium Length Videos`); 
            videos.filter(video => video.lengthInMinutes< 20 &&  video.lengthInMinutes>3 ).forEach(video => 
                    console.log(`Title : ${video.title}`));
       

            // Task 6
            // Print title of the longest video
            console.log(" ");
            console.log(`***** Task 6 ******`);
            console.log(`Title of longest Video`);
            let videosLengthArray = [];
            videos.forEach(video =>{
                videosLengthArray.push(video.lengthInMinutes);
            });
            let maxVideo = Math.max.apply(null,videosLengthArray);
            
            videos.findIndex((video) => video.lengthInMinutes == maxVideo);
            console.log(`Title of Longest Video: ${videos[videos.findIndex((video) => video.lengthInMinutes == maxVideo)].title} `);
                 
           
       



            // Task 7
            // Print titles of all "Educational" videos
             console.log(" ");
            console.log(`***** Task 7 ******`)
            console.log(`Title Of Educational Videos`);
            videos.filter(video =>
                video.category == "Education").forEach(element => console.log(`Title : ${element.title}`));
             
            // Task 8
            // Print titles of all videos with tag "Javascript"
            console.log(" ");
            console.log(`***** Task 8 ******`)//not done
            console.log(`Title Of Videos With Javascript Tag`);
            console.log(" "); 
            videos.filter(video =>
                video.tags.includes("javascript")).forEach(element => console.log(`Title : ${element.title}`));


            // Task 9
            // Print titles of all videos with HD feature
            console.log(" ");
            console.log(`***** Task 9 ******`)
            console.log("Title Of all Videos With HD feature ");
            videos.filter(video => video.features.includes("HD")).forEach(video => console.log(`Title : ${video.title}`));

            // Task 10
            // Print titles of all videos uploaded today
            console.log(" ");
            console.log(`***** Task 10 ******`)
            console.log("Title Of all Videos Uploaded Today ");
            
            
            videos.filter(video => {
                if((`${video.uploadDate.getDate()}-${video.uploadDate.getMonth()+1}-${video.uploadDate.getFullYear()}`) == (`${currentDate.getDate()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}`)){
                   console.log(video.title);
                }
            });
            

            // Task 11
            // Print titles of all videos uploaded this week

            // Task 12
            // Print titles of all videos uploaded this month
            console.log(" ");
            console.log(`***** Task 12 ******`)
            videos.filter(video => {
                if((`${video.uploadDate.getMonth()+1}-${video.uploadDate.getFullYear()}`) == (`${currentDate.getMonth()+1}-${currentDate.getFullYear()}`)){
                   console.log(video.title);
                }
            });
            // Task 13
            // Print titles of all videos uploaded this year
            console.log(" ");
            console.log(`***** Task 13 ******`)
            videos.filter(video => {
                if(video.uploadDate.getFullYear() == currentDate.getFullYear()){
                   console.log(`Title: ${video.title}`);
                }
            });
            // Task 14
            // Sort the array in ascending order of number of views and print the titles
            console.log(" ");
            console.log(`***** Task 14 ******`)

            // To sort the array numerically in ascending order, 
            // That comparison function should return the difference between the two numbers.
            // This is achieved by subtracting the second item from the first.

            videos.sort((a,b) => a.viewCount - b.viewCount).forEach(element => console.log(`Title: ${element.title}`));
        
            // Task 15
            // Sort the array in ascending order of rating and print the titles
            console.log(" ");
            console.log(`***** Task 15 ******`);
            videos.sort((a,b) => a.rating - b.rating).forEach(element => console.log(`Title: ${element.title}`));
 }       