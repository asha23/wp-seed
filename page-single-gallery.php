<?php
/*
	Template Name: Single Gallery
*/
get_header();
?>

<div class="container">
	<div class="row">
		<?php get_template_part( 'views/loops/loop', 'single-gallery' ); ?>
	</div>
</div>

<?php get_footer(); ?>
