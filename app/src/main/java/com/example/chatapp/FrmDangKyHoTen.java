package com.example.chatapp;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class FrmDangKyHoTen extends AppCompatActivity {

    DatabaseReference databaseReference = FirebaseDatabase.getInstance().getReferenceFromUrl("https://chatapp-3438b-default-rtdb.firebaseio.com/");
    Button btnTiepTuc;
    ImageButton imgbtnLuiLai;
    TextView txtHoTen;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_frm_dangkyhoten);
        btnTiepTuc = findViewById(R.id.btnTiepTuc);
        imgbtnLuiLai = findViewById(R.id.imgbtnLuilai);
        txtHoTen = findViewById(R.id.txtHoTen);

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
                // Lấy dữ liệu từ EditText
                final String hoten = txtHoTen.getText().toString().trim();
                // Kiểm tra nếu người dùng không nhập tên
                if (hoten.equals("")) {
                    Toast.makeText(FrmDangKyHoTen.this, "Vui lòng nhập họ tên", Toast.LENGTH_SHORT).show();
                }
                else {
                    // Đẩy dữ liệu sang FrmDangKySDT
                    String sdt = txtHoTen.getText().toString();

                    // Lưu "hoten" vào SharedPreferences
                    SharedPreferences sharedPreferences = getSharedPreferences("dataLogin", MODE_PRIVATE);
                    SharedPreferences.Editor editor = sharedPreferences.edit();
                    editor.putString("hoten", hoten);
                    editor.apply();

                    // Chuyển sang FrmDangKySDT và truyền dữ liệu
                    Intent intent = new Intent(FrmDangKyHoTen.this, FrmDangKySDT.class);
                    intent.putExtra("hoten", hoten); // Attach "hoten" as an extra
                    startActivity(intent);
            }
            }
        });
    }
}
