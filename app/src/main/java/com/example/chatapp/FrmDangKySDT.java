package com.example.chatapp;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.Spinner;

import androidx.appcompat.app.AppCompatActivity;

public class FrmDangKySDT extends AppCompatActivity {
    ImageButton imgbtnLuiLai;
    Button btnTiepTuc;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_frm_dangkysdt);

        Spinner spinnerCountry = findViewById(R.id.spinnerCountry);
        // Tạo một mảng String chứa tên quốc gia
        String[] countries = {"VN"};
        // Tạo một ArrayAdapter để đặt dữ liệu cho Spinner
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_item, countries);
        // Đặt layout cho danh sách quốc gia
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        // Đặt ArrayAdapter cho Spinner
        spinnerCountry.setAdapter(adapter);

        btnTiepTuc = findViewById(R.id.btnTiepTuc);
        imgbtnLuiLai = findViewById(R.id.imgbtnLuilai);

        imgbtnLuiLai.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(FrmDangKySDT.this, FrmDangKyHoTen.class);
                startActivity(intent);
            }
        });

        btnTiepTuc.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(FrmDangKySDT.this, FrmDangKyKichHoatTaiKhoan.class);
                startActivity(intent);
            }
        });
    }
}
