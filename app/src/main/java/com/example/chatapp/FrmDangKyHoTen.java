package com.example.chatapp;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;

import androidx.appcompat.app.AppCompatActivity;

public class FrmDangKyHoTen extends AppCompatActivity {
    Button btnTiepTuc;
    ImageButton imgbtnLuiLai;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_frm_dangkyhoten);
        btnTiepTuc = findViewById(R.id.btnTiepTuc);
        imgbtnLuiLai = findViewById(R.id.imgbtnLuilai);

        imgbtnLuiLai.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(FrmDangKyHoTen.this, FrmManHinhChinh.class);
                startActivity(intent);
            }
        });

        btnTiepTuc.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(FrmDangKyHoTen.this, FrmDangKySDT.class);
                startActivity(intent);
            }
        });
    }
}
