import img1 from '../images/b1.png'
import img2 from '../images/b1.png'
export const FooterData = [
    {
        id: 1,
        title: 'About Us',
        text: 'Ipsum veritatis earum excepturi veniam culpa nostrum eum quia fugit nesciunt obcaecati.',
        phone: '01321040273',
        email: 'roktojoddha@gmail.com'
    },
    {
        id: 2,
        title: 'Quick Link',
        items: ['services', 'about', 'campaign', 'letest blogs', 'contact']
    },
    {
        id: 3,
        title: 'Our Services',
        items: ['Blood Donation', 'helth check', 'donate proccess', 'blood info']
    },
    {
         id:4,
         title:'letest Blogs',
         blogs:[
             {
                image:img1,
                title:'blogs one',
                link:'/blogs',
                date :'09-09-2023'
             },
             {
                image:img2,
                title:'blogs two',
                link:'/blogs',
                date :'10-09-2023'
             },
         ]
    }
]
