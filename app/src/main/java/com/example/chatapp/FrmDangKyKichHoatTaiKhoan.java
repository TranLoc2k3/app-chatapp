package com.example.chatapp;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.CountDownTimer;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class FrmDangKyKichHoatTaiKhoan extends AppCompatActivity {
    ImageButton imgbtnLuiLai;
    private TextView twGuiLaiMa;
    TextView txtMaXacNhan;
    Button btnXacNhan;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_frm_dangkykichhoattaikhoan);

        imgbtnLuiLai = findViewById(R.id.imgbtnLuilai);
        txtMaXacNhan = findViewById(R.id.txtMaXacNhan);
        btnXacNhan = findViewById(R.id.btnXacNhan);
        imgbtnLuiLai.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(FrmDangKyKichHoatTaiKhoan.this, FrmDangKySDT.class);
                startActivity(intent);
            }
        });

        btnXacNhan.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String maXacNhan = txtMaXacNhan.getText().toString().trim();

                SharedPreferences sharedPreferences = getSharedPreferences("dataLogin", MODE_PRIVATE);
                String OTP = sharedPreferences.getString("OTP", "");

                if (maXacNhan.equals(OTP)) {
                    Intent intent = new Intent(FrmDangKyKichHoatTaiKhoan.this, FrmChat.class);
                    startActivity(intent);
                    finish();
                }
                else {
                    Toast.makeText(FrmDangKyKichHoatTaiKhoan.this, "Mã xác nhận không đúng", Toast.LENGTH_SHORT).show();
                }
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
