package com.example.demo.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

//@Getter
//@Setter
@Data
@AllArgsConstructor
public class PageObject {
    private Object list;
    private int page_num;
    private int page_size;
    private long total;

//    @Override
//    public String toString() {
//        return "PageObject [list=" + list + ", page_num=" + page_num + ", page_size=" + page_size + ", total=" + total
//                + "]";
//    }
}
