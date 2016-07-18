module.exports=(grunt)=>{
  grunt.initConfig({
      sass:{
        dist:{
          options:{
            style:'expanded'
          },
          files:{
            'css/style.css':'dev/styles/main.scss'
          }
        }
      },
      watch: {
  			css: {
  				files: '**/*.scss',
  				tasks: ['sass']
  			}
		}
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
};
