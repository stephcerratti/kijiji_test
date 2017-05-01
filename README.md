# kijiji_test
Front end developer test for Kijiji 

My code is not complete and does not give the desired results, unfortunately. I began this challenge by working with a Masonry library, and after spending a lot of time working with that I realized I was working towards the wrong solution. I misunderstood the challenge and after re-reading I came up with a new plan, but my time was now severely limited.

I decided to dynamically create an array of listings that would generate random sized elements every time the webpage was refreshed. This way, I would avoid working with "perfect numbers" and would avoid only having my code work with a pre-determined set of listings. This made positioning the elements more challenging, as I didn't have pre-set sizes to work with. 

I then sorted my listings from largest height to smallest height to better optimize the space and layout of the listings. Because the elements were being dynamically created, the order of the listings would be random every time.

Next I wanted to set the element with the largest height to be positioned left 0px and top 0px every time. 

What I hoped to achieve was to have every subsequent element be positioned based on the width or height of the previous element, and not exceed the 800 px width or height of the parent container. After lots of research, I found a method that would achieve this result, and basically build a masonry from scratch. At this point, my time was out and I wasn’t able to fully implement the code and achieve the desired results. 

I am going to keep working with the new method I found and hopefully achieve the desired results of the challenge, but at time of submission the code is not complete. 


