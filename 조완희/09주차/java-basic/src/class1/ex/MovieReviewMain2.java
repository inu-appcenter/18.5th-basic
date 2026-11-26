package class1.ex;

public class MovieReviewMain2 {

    public static void main(String[] args) {
        MovieReview inception = new MovieReview();
        inception.title = "inception";
        inception.review = "인생은 시간 여행";

        MovieReview aboutTime = new MovieReview();
        aboutTime.title = "about time";
        aboutTime.review = "인생 시간 영화";

//        System.out.println("영화 제목:" + inception.title + " 영화 리뷰: " + inception.review);
//        System.out.println("영화 제목:" + aboutTime.title + " 영화 리뷰: " + aboutTime.review);
        MovieReview[] movieReview = {inception, aboutTime};
        for (MovieReview movie : movieReview) {
            System.out.println("영화 제목: " + movie.title + ", 영화 리뷰: " + movie.review);
        }

    }
}
