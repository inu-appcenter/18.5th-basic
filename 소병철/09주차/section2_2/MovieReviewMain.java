package section2_2;

public class MovieReviewMain {
    static void main(String[] args) {
        MovieReview inception = new MovieReview();
        inception.title = "인셉션";
        inception.review = "재미가 있었다";

        MovieReview aboutTime = new MovieReview();
        aboutTime.title = "어바웃 타임";
        aboutTime.review = "재미가 아주 있었다";

        System.out.printf("영화 제목: %s, 리뷰: %s%n", inception.title, inception.review);
        System.out.printf("영화 제목: %s, 리뷰: %s%n", aboutTime.title, aboutTime.review);
    }
}
