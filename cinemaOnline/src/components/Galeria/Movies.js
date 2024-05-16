var animationSpeed = 750;
var library = [];

$(document).ready(function(){
    fillLibrary();
    attachAnimations();    
});

/* -----------------------------------------------------------------------------
    FILL PAGE HTML 
   ---------------------------------------------------------------------------*/
function fillLibrary() {
    assembleData();
    var classlist = ['left-side first','left-side','left-side','right-side','right-side','right-side last'];
        for (i=0; i < library.length; i++) {
            var book = library[i];
            // add html for current book
            var html = '<li class="book ' + classlist[0] + '">';
            html += '<div class="cover"><img src="' + book.cover + '" /></div>';
            html += '<div class="summary">';
            html += '<h1>' + book.title + '</h1>';
            html += '<h2>by ' + book.author + '</h2>';
            html += '<p>' + book.abstract + '</p>';
            html += '</div></li>';
            $('.library').append(html);
            // shift the classlist array for the next iteration
            var cn = classlist.shift();
            classlist.push(cn);
        }
   
}
/* -----------------------------------------------------------------------------
    ANIMATION 
   ---------------------------------------------------------------------------*/
function attachAnimations() {
    $('.book').click(function(){
        if (!$(this).hasClass('selected')) {
            selectAnimation($(this));
        }
    });
    $('.book .cover').click(function(){
        if ($(this).parent().hasClass('selected')) {
           deselectAnimation($(this).parent());
        }
    });
}

function selectAnimation(obj) {
    obj.addClass('selected');
    // elements animating
    var cover = obj.find('.cover');
    var image = obj.find('.cover img');
    var library = $('.library');
    var summaryBG = $('.overlay-summary');
    var summary = obj.find('.summary');
    // animate book cover
    cover.animate({
        width: '300px',
        height: '468px' 
    }, {
        duration: animationSpeed
    });
    image.animate({
        width: '280px',
        height: '448px',
        borderWidth: '10px'
    },{
        duration: animationSpeed
    });
    // add fix if the selected item is in the bottom row
    if (isBtmRow()){
      library.css('paddingBottom','234px');
    }
    // slide page so book always appears
    positionTop();
    // add background overlay
    $('.overlay-page').show();
    // locate summary overlay    
    var px = overlayVertPos();
    summaryBG.css('left',px);
    // animate summary elements
    var ht = $('.content').height();
    var pos = $('.book.selected').position();
    var start = pos.top + 30; // 10px padding-top on .book + 20px padding of .summary
    var speed = Math.round((animationSpeed/ht) * 450); // 450 is goal height
    summaryBG.show().animate({
        height: ht + 'px'
    },{
        duration: animationSpeed,
        easing: 'linear',
        step: function(now,fx){
            if (now > start && fx.prop === "height"){
                if(!summary.is(':animated') && summary.height() < 450){
                    summary.show().animate({
                        height: '450px'
                    },{
                        duration: speed,
                        easing: 'linear'
                    });
                }
                
            }
        } 
        
    });
}

function deselectAnimation(obj) {
    // elements animating
    var cover = obj.find('.cover');
    var image = obj.find('.cover img');
    var library = $('.library');
    var summaryBG = $('.overlay-summary');
    var summary = obj.find('.summary');
    // stop summary animation
    summary.stop();
    // animate book cover
    cover.stop().animate({
        width: '140px',
        height: '224px' 
    },{
        duration:animationSpeed
    });
    image.stop().animate({
        width: '140px',
        height: '224px',
        borderWidth: '0px'
    },{
        duration: animationSpeed,
        complete: function() {
            obj.removeClass('selected');
        }
    });
    // remove fix for bottom row, if present
    library.stop().animate({
        paddingBottom:'10px'
    },{ 
        duration: animationSpeed
    });
    // remove background overlay and summary
    var ht = summaryBG.height();
    var pos = $('.book.selected').position();
    var start = pos.top + 480; //10px of top padding + 470px for .summary height + padding
    var speed = Math.round((animationSpeed/ht) * summary.height());
    summaryBG.stop().animate({
        height: '0px'
    },{
        duration: animationSpeed,
        easing: 'linear',
        step: function(now,fx){
            if (now < start && fx.prop === "height"){
                if(!summary.is(':animated') && summary.height() > 0){
                    summary.animate({
                        height: '0px'
                    },{ 
                        duration: speed,
                        easing: 'linear',
                        complete: function(){
                            summary.hide(); 
                        }
                    });
                }
                
            }
        }, 
        complete: function(){
            $('.overlay-page').hide();
            summary.hide(); // catching this twice to insure for aborted animation
            summaryBG.hide();
        }
    });
}

function isBtmRow() {
    var pos = $('.book.selected').position();
    var libHgt = $('.content').height();
    if (libHgt-pos.top===254) { // this is current height of the book, plus 30 for padding on the book and library
        return true;
    } else {
        return false;
    }
}

function positionTop() { 
   var offset = $('.book.selected').offset();
   var bTop = offset.top;
   $('html, body').animate({ scrollTop: bTop }, animationSpeed);
}

function overlayVertPos() { // determines the vertical position for the summary overlay based on selection position
    var pos = $('.book.selected').position();
    switch(pos.left) {
        case 0:
            return '320px';
        case 160:
            return '320px';
        case 320:
            return '480px';
        case 480:
            return '0px';
        case 640:
            return '160px';
        case 800:
            return '160px';
        default:
            return false;
    }
}
/* -----------------------------------------------------------------------------
    BUILD LIBRARY ARRAY 
   ---------------------------------------------------------------------------*/
function Book(cover,title,author,abstract) {
    this.cover = cover;
    this.title = title;
    this.author = author;
    this.abstract = abstract;
    library.push(this);
}

function assembleData() {
    var book;
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/aclockworkorange_zpsab4c6d1f.jpg','A Clockwork Orange','Anthony Burgess','A vicious fifteen-year-old &ldquo;droog&rdquo; is the central character of this 1963 classic, whose stark terror was captured in Stanley Kubrick&rsquo;s magnificent film of the same title. In Anthony Burgess&rsquo;s nightmare vision of the future, where criminals take over after dark, the story is told by the central character, Alex, who talks in a brutal invented slang that brilliantly renders his and his friends&rsquo; social pathology. A Clockwork Orange is a frightening fable about good and evil, and the meaning of human freedom. When the state undertakes to reform Alex&mdash;to &ldquo;redeem&rdquo; him&mdash;the novel asks, &ldquo;At what cost?&rdquo;');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/ageneraltheoryoflove_zps474669dd.jpg','A General Theory of Love','Thomas Lewis, M.D., Fari Amini, M.D., Richard Lannon, M.D.','A General Theory of Love draws on the latest scientific research to demonstrate that our nervous systems are not self-contained: from earliest childhood, our brains actually link with those of the people close to us, in a silent rhythm that alters the very structure of our brains, establishes life-long emotional patterns, and makes us, in large part, who we are. Explaining how relationships function, how parents shape their child&rsquo;s developing self, how psychotherapy really works, and how our society dangerously flouts essential emotional laws, this is a work of rare passion and eloquence that will forever change the way you think about human intimacy.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/antoinesalphabet_zps82a0ad82.jpg','Antoine&rsquo;s Alphabet','Jed Perl','Antoine Watteau, one of the most mysterious painters who ever lived, is the inspiration for this delightful investigation of the tangled relationship between art and life. Weaving together historical fact and personal reflections, the influential art critic Jed Perl reconstructs the amazing story of this pioneering bohemian artist who, although he died in 1721, when he was only thirty-six, has influenced innumerable painters and writers in the centuries since&mdash;and whose work continues to deepen our understanding of the place that love, friendship, and pleasure have in our daily lives.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/ataleofatub_zpsb1973de7.jpg','A Tale of a Tub','Jonathan Swift','Though the author has written a large Dedication, yet that being addressed to a Prince whom I am never likely to have the honour of being known to; a person, besides, as far as I can observe, not at all regarded or thought on by any of our present writers; and I being wholly free from that slavery which booksellers usually lie under to the caprices of authors, I think it a wise piece of presumption to inscribe these papers to your Lordship, and to implore your Lordship&rsquo;s protection of them.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/bravenewworld_zps1c1e8179.jpg','Brave New World','Aldous Huxley','When the novel Brave New World first appeared in 1932, its shocking analysis of a scientific dictatorship seemed a projection into the remote future. Here, in one of the most important and fascinating books of his career, Aldous Huxley uses his tremendous knowledge of human relations to compare the modern-day world with his prophetic fantasy. He scrutinizes threats to humanity, such as overpopulation, propaganda, and chemical persuasion, and explains why we have found it virtually impossible to avoid them. Brave New World Revisited is a trenchant plea that humankind should educate itself for freedom before it is too late.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/centauridevice_zps1b5a0bf6.jpg','Centauri Device','M. John Harrison','John Truck was to outward appearances just another lowlife spaceship captain. But he was also the last of the Centaurans&mdash;or at least, half of him was&mdash;which meant that he was the only person who could operate the Centauri Device, a sentient bomb which might hold the key to settling a vicious space war. M. John Harrison&rsquo;s classic novel turns the conventions of space opera on their head, and is written with the precision and brilliance for which is famed.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/charitygirl_zps18c5249f.jpg','Charity Girl','Michael Lowenthal','During World War I, seventeen-year-old Frieda Mintz secures a job at a Boston department store and strikes out on her own, escaping her repressive Jewish mother and marriage to a wealthy widower twice her age. Determined to find love on her own terms, she is intoxicated by her newfound freedom and the patriotic fervor of the day. That is, until a soldier reports her as his last sexual contact, sweeping her up in the government&rsquo;s wartime crusade against venereal disease. Quarantined in a detention center, Frieda finds in the Home&rsquo;s confines a group of brash, unforgettable women who help her see the way to a new kind of independence.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/dastgah_zpsbf49e229.jpg','Dastgah','Mark Mordue','Australian award-winning journalist Mark Mordue invites you on his world trip that ranges from a Rolling Stones concert in Istanbul to talking with mullahs and junkies in Tehran, and from a cricket match in Calcutta to an S&M bar in New York, in addition to many points in between. Mordue chronicles his year-long global journey with his girlfriend, Lisa Nicol, exploring countries most Americans never see as well as issues of world citizenship in the 21st century. Written in the tradition of literary journalism, Dastgah will take you to all kinds of places, across the world ... and inside yourself.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/kockroach_zps0ab7b696.jpg','Kockroach','Tyler Knox','It is the mid-1950s, and Kockroach, perfectly content with his life infesting a fleabag hotel off Times Square, awakens to discover that somehow he&rsquo;s been transformed into, of all things, a human. A tragic turn of events, yes, but cockroaches are awesome coping machines, so Kockroach copes. Step by step, he learns the ways of man: how to walk, how to talk, and how to wear a jaunty brown fedora. Led by his primitive desires and insectile amorality, he navigates through the bizarre human realms of crime, business, politics, and sex. Will he find success or be squashed flat from above? Will he change humanity, or will humanity change him?');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/ladychatterleystrial_zps84a0877e.jpg','Lady Chatterley&rsquo;s Trial','C.H. Rolph','In 1960, thirty years after D. H. Lawrence&rsquo;s death, Penguin moved to publish his most provocative novel Lady Chatterley&rsquo;s Lover for the first time. What followed was the most significant literary obscenity trial of the twentieth century, as Penguin called upon a string of expert witnesses including E. M. Forster and Sir Allen Lane to triumphantly defend the book&rsquo;s literary merit, in a case that compellingly reflected the changing face of contemporary society.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/lastnightintwistedriver_zps047d8684.jpg','Last Night in Twisted River','John Irving','In 1954, in the cookhouse of a logging and sawmill settlement in northern New Hampshire, an anxious twelve-year-old boy mistakes the local constable&rsquo;s girlfriend for a bear. Both the twelve-year-old and his father become fugitives, forced to run from Coos County&mdash;to Boston, to southern Vermont, to Toronto&mdash;pursued by the implacable constable. Their lone protector is a fiercely libertarian logger, once a river driver, who befriends them. In a story spanning five decades, Last Night in Twisted River depicts the recent half-century in the United States as &ldquo;a living replica of Coos County, where lethal hatreds were generally permitted to run their course.&rdquo;');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/leviathan_zps222025f9.jpg','Leviathan','Philip Hoare','From his childhood fascination with the gigantic models in London&rsquo;s Natural History Museum to adult encounters with the wild animals themselves, Philip Hoare has been obsessed with these whales. Switching between human history and natural history, Leviathan is a gripping voyage of discovery into the heart of this obsession and the book that inspired it: Herman Melville&rsquo;s Moby-Dick. Taking us deep into the whale&rsquo;s domain, Philip Hoare shows us these mysterious animals as they have never been before.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/mylifeasatraitor_zpse8de4793.jpg','My Life as a Traitor','Zarah Ghahramani','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/security_zpsc5ff195f.jpg','Security','Stephen Amidon','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/silkparachute_zps61c86834.jpg','Silk Parachute','John McPhee','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/slowdownarthur_zps4eaf97f9.jpg','Slow Down Arthur, Stick to Thirty','Harland Miller','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/thealmondpicker_zps4cc6cd0f.jpg','The Almond Picker','Simonetta Agnello Hornby','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/thearchivist_zpscbaeee22.jpg','The Archivist','Martha Cooley','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/theassassinssong_zpsaff5afbe.jpg','The Assassin&rsquo;s Song','M.G. Vassanji','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/thebirdcatcher_zps0267b773.jpg','The Bird Catcher','Laura Jacobs','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/thefortressofsolitude_zpsa4035a73.jpg','The Fortress of Solitude','Jonathan Lethem','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/thefountainhead_zps5ca1c605.jpg','The Fountainhead','Ayn Rand','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/thegirlwiththedragontattoo_zps8730fda0.jpg','The Girl with the Dragon Tattoo','Stieg Larsson','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/thekingdomofinfinitespace_zpsb60ebb59.jpg','The Kingdom of Infinite Space','Raymond Tallis','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/themasqueofreddeath_zps019a994d.jpg','The Masque of Red Death','Edgar Allan Poe','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/themelancholyofanatomy_zpseadc8295.jpg','The Melancholy of Anatomy','Shelley Jackson','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/thenoodlemaker_zps09a99dae.jpg','The Noodle Maker','Ma Jian','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/thenwecametotheend_zpsf1c2d00f.jpg','Then We Came to the End','Joshua Ferris','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/thesegraniteislands_zps157f8499.jpg','These Granite Islands','Sarah Stonich','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
    book = new Book('http://i1274.photobucket.com/albums/y436/jabas1/toairishuman_zpsd5d366a7.jpg','To Air Is Human','Bj&ouml;rn T&uuml;roque','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices nisl lorem, at lacinia diam lobortis non. Integer et massa sed dui tincidunt sodales. Aenean id dictum augue, in iaculis enim. Etiam ornare ut nunc vitae iaculis. Morbi tristique porta imperdiet. Quisque vel magna id dui euismod ornare. Nunc sed magna massa. Donec consequat est ut nulla molestie mattis. Curabitur at accumsan neque, non sagittis lorem. Suspendisse molestie sapien in est consectetur porta. Phasellus eleifend pulvinar orci, vel suscipit eros sodales sed. Nam at lacinia libero. Phasellus faucibus dolor luctus, consectetur ante ut, tristique eros. Integer eleifend est urna.');
}