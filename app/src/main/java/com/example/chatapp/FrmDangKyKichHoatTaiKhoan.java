package com.example.chatapp;

import android.content.Intent;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.view.View;
import android.widget.ImageButton;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class FrmDangKyKichHoatTaiKhoan extends AppCompatActivity {
    ImageButton imgbtnLuiLai;
    private TextView twGuiLaiMa;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_frm_dangkykichhoattaikhoan);

        imgbtnLuiLai = findViewById(R.id.imgbtnLuilai);
        imgbtnLuiLai.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(FrmDangKyKichHoatTaiKhoan.this, FrmDangKySDT.class);
                startActivity(intent);
            }
        });

        twGuiLaiMa = findViewById(R.id.textViewGuiLaiMa);
        // Thời gian bắt đầu từ 30 giây (30 * 1000 milliseconds)
        long startTimeMillis = 30 * 1000;
        // Tạo một đối tượng CountDownTimer với thời gian bắt đầu và độ lớn giảm thời gian là 1000 milliseconds (1 giây)
        CountDownTimer countDownTimer = new CountDownTimer(startTimeMillis, 1000) {
            @Override
            public void onTick(long millisUntilFinished) {
                // Chuyển đổi thời gian còn lại thành định dạng giây
                String formattedTime = String.format("%02d", millisUntilFinished / 1000);

                // Hiển thị thời gian đếm ngược trên TextView
                twGuiLaiMa.setText("Gửi lại mã 00:" + formattedTime);
            }

            @Override
            public void onFinish() {
                // Thực hiện công việc khi thời gian đếm ngược kết thúc (00:00)
                twGuiLaiMa.setText("Gửi lại mã 00:00");
            }
        };
        // Bắt đầu đếm ngược
        countDownTimer.start();
    }
}
