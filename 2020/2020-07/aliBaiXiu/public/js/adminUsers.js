$(function (){
    $('tbody').on('click','#scbut',function(){
        let postId = $(this).attr('data-id');
        $.ajax({
            type:'PUT',
            url:'/admin/users/delete',
            data:{
                id:postId
            },
            
        })
    })
})