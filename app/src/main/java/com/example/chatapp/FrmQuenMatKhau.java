package com.example.chatapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;

public class FrmQuenMatKhau extends AppCompatActivity {

    Button btnTiepTuc;

    ImageButton imgbtnLuiLai;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_frm_quen_mat_khau);

        btnTiepTuc = findViewById(R.id.btnTiepTuc);
        btnTiepTuc.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(FrmQuenMatKhau.this, FrmMaXacNhan.class);
                startActivity(intent);
            }
        });

        imgbtnLuiLai = findViewById(R.id.imgbtnLuilai);
        imgbtnLuiLai.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(FrmQuenMatKhau.this, FrmLogin.class);
                startActivity(intent);
            }
        });
    }
}