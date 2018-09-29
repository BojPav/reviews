$(document).ready(function () {
            
    $(".pic-1").click(function () {
                
        $(".col-md-1").animate({
            height: '100px'
        });
                
        $(this).animate({
            height: '200px'
        });
                
        $("#number").html("1");
                    
        $("#details").html("<h2 class='person-details-1'>Ashley Right</h2><p class='text-muted person-details-1'>Pinterest</p><p class='small person-details-1'>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis nisl sit amet mauris facilisis consequat. Nulla tincidunt nisi neque, et volutpat dui mattis id. Maecenas feugiat luctus fermentum. Integer sit amet pretium ligula. Sed euismod, ante a pellentesque pharetra, tortor sapien suscipit mauris, id tempus leo enim vel risus. Morbi egestas volutpat rhoncus. Sed accumsan tortor felis, in porta massa tempus vitae.'</p>");
                    
    });
            
    $(".pic-2").click(function () {
                
        $(".col-md-1").animate({
            height: '100px'
        });
                
        $(this).animate({
            height: '200px'
        });
                
        $("#number").html("2");
                        
        $("#details").html("<h2 class='person-details-1'>Jane Doe</h2><p class='text-muted person-details-1'>Google</p><p class='small person-details-1'>'Phasellus consectetur tellus erat, in auctor lorem facilisis eu. Pellentesque quis elementum orci. Suspendisse efficitur aliquam nibh et rhoncus. Donec vestibulum commodo dapibus. Suspendisse potenti. Quisque volutpat pulvinar mi, non pharetra dolor elementum et. Cras in imperdiet neque. Fusce vestibulum mauris a lectus pretium, sed porta metus bibendum.'</p>");
        
    });
            
    $(".pic-3").click(function () {
                
        $(".col-md-1").animate({
            height: '100px'
        });
                
        $(this).animate({
            height: '200px'
        });
                
        $("#number").html("3");
                        
        $("#details").html("<h2 class='person-details-1'>Anastasia Brown</h2><p class='text-muted person-details-1'>Facebook</p><p class='small person-details-1'>'Nulla ornare dolor ut lectus efficitur, et gravida dui sodales. In mi neque, consequat vitae interdum a, tristique id leo. Sed ultrices eget ex et auctor. Fusce nec magna est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec aliquam tincidunt arcu id tincidunt. Curabitur sagittis tincidunt mi, ut bibendum enim finibus vitae. Suspendisse rhoncus eros nec orci accumsan imperdiet.'</p>");
        
    });
            
    $(".pic-4").click(function () {
                
        $(".col-md-1").animate({
            height: '100px'
        });
                
        $(this).animate({
            height: '200px'
        });
                
        $("#number").html("4");
                        
        $("#details").html("<h2 class='person-details-1'>Lady Ozbourn</h2><p class='text-muted person-details-1'>Amazon</p><p class='small person-details-1'>'Pellentesque in ex in augue porttitor ultrices. Integer pretium eget tortor bibendum tincidunt. Aenean eu scelerisque risus. Duis sem erat, finibus sed hendrerit nec, suscipit et enim. Sed non nunc elit. Praesent rhoncus, magna sit amet faucibus sollicitudin, sem erat blandit enim, a ullamcorper arcu velit et orci.'</p>");
        
        });
            
    $(".pic-5").click(function () {
                
        $(".col-md-1").animate({
            height: '100px'
        });
                
        $(this).animate({
            height: '200px'
        });
                
        $("#number").html("5");
                        
        $("#details").html("<h2 class='person-details-1'>Mister Wright</h2><p class='text-muted person-details-1'>Twitter</p><p class='small person-details-1'>'Nam mollis tempus ex, nec mollis elit gravida vitae. Aliquam eu dapibus tellus. Fusce sit amet nibh ullamcorper, dignissim urna et, lobortis orci. In dapibus quam orci, et blandit enim venenatis ut. Etiam aliquet sagittis erat, nec pretium elit rutrum a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras eget nibh leo. Fusce convallis mollis tortor, id placerat sem eleifend non. Pellentesque malesuada consectetur elit in laoreet.'</p>");
        
    });
            
    $(".container").click(function () {
                
        if ($(".col-md-1").height < 100) {
                    
            $(".col-md-1").animate({
                height: '100px'
            });
        }
    });
            
});