$(document).ready(function(){
  $('.major').hover(function(){
    $(this).find('[data-fa-i2svg]').removeClass('far').addClass('fas');
  }, function(){
    $(this).find('[data-fa-i2svg]').removeClass('fas').addClass('far');
  });
  $('.add-task-input').click(function(){
    $(this).closest('.add-task-block').addClass('open');
  });
  $('.add-task-block button').click(function(){
    $(this).closest('.add-task-block.open').removeClass('open');
  });
  $('.edit').click(function(e){
    e.preventDefault();
    $(this).closest('li').addClass('open');
  });
  $('.list-tasks-block').on('click', 'button', function(e){
    e.preventDefault();
    $(this).closest('li').removeClass('open');
  });
  $('.list-tasks-block').on('click', '.checkbox input', function(){
    $(this).closest('li').toggleClass('completed');
    updateRemaining();
  });
  $('.major-task').click(function(e){
    e.preventDefault();
    $(this).closest('li').toggleClass('important').find('[data-fa-i2svg]');
    var icon = $(this).find('[data-fa-i2svg]');
    if (icon.data('prefix') == 'fas') {
      icon.removeClass('fas').addClass('far');
    } else {
      icon.removeClass('far').addClass('fas');
    }
  });
  $('header a').click(function(e){
    var tasks = getTasks();
    $(this).closest('li').addClass('active').siblings().removeClass('active');
    switch ($(this).index('a')) {
      case 1:
        getTasks('inprogress').show().siblings('li.completed').hide();
        $('p.completed-tasks').hide().siblings('p.remaining-tasks').show();
        break;
      case 2:
        getTasks('completed').show().siblings('li:not(.completed)').hide();
        $('p.completed-tasks').show().siblings('p.remaining-tasks').hide();
        break;
      default:
        getTasks().show();
        $('p.completed-tasks').hide().siblings('p.remaining-tasks').show();
        break;
    }
  });

  updateRemaining();
  function updateRemaining() {
    $('.remaining-tasks span').text(getTasks('inprogress').length);
    $('.completed-tasks span').text(getTasks('completed').length);
  }
  function getTasks(scope) {
    switch (scope) {
      case 'completed':
        return $('.list-tasks-block > ul > li.completed');
        break;
      case 'inprogress':
        return $('.list-tasks-block > ul > li:not(.completed)');
        break;
      default:
        return $('.list-tasks-block > ul > li');
        break;
    }
  }
});