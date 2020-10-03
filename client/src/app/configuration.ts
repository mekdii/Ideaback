export const configuration = {
    hero: {
        heading: 'Powerful Digital Contracts with CM',
        subheading: 'We have all the tools you need for all your contracts.'
    },
    about:{
        image: 'assets/img/about.jpg',
        heading: 'Focus On What Matters',
        description: 'Get the information you need from your contracts, faster using ContractWorks with artificial intelligence - because you have more important work to do',
        features: [
            { icon:'ri-check-double-line',  description: 'Negotiate and sign in real-time'},
            { icon:'ri-check-double-line', description: 'Stay on top of approvals & renewals'},
            {icon:'ri-check-double-line', description: 'Automate workﬂows & reports'}
        ],
        subdescription: 'Business can’t wait. Quickly set-up all your teams and documents and start streamlining your processes with our familiar inbox-like interface.',
    },
    cta:{
        title:'Ready to take control of your contracts?',
        description:'Get started with ContractWorks today, and find out how easy it is to quickly organize and manage your documents',
        linkText:'Call To Action',
        link:'/Login'
    },
    contacts:{
       heading:'Contact',
       title: 'Contact Us',
       info: [
           {class:'address', icon: 'google-map', title: 'Location:', description: 'A108 Bole, Addis Ababa, Ethiopia'},
           {class:'email', icon: 'envelope', title: 'Email:', description: 'info@example.com'},
           {class:'phone', icon: 'phone', title: 'Call:', description: '+1 5589 55488 55s'}

    ]
    },
    login:{
        title: 'Login',
        btnText: 'Login',
        link: '',
        block: [{text:`Don't have an account?`, link:'/Signup', linkText:'signup'},
        {text:'', link:'/Reset', linkText:'Forgot Password'}
    ]
    },
    signup:{
        title: 'Signup',
        btnText: 'Signup',
        link: '',
        block: [{text:`Already have an account?`, link:'/Login', linkText:'login'}]
    },
    footer:{
         title:'CM', 
        address:[{road:'A108 Bole', city:'Addis Ababa, Ethiopia'}],
        contact:[{title:'Phone:', link:'+1 5589 55488 55'},
                 {title:'Email:', link:'info@example.com'}],
         social:[{link:'', class:'twitter', icon:'twitter'},
                 {link:'', class:'facebook', icon:'facebook'},
                 {link:'', class:'instagram', icon:'instagram'},
                 {link:'', class:'google-plus', icon:'google-plus'},
                 {link:'', class:'linkedin', icon:'linkedin'}
        ]
        }
    }
