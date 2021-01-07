# next 
## Deploy 
+ `ncc` & `pm2`
+ `ncc` & `pkg` & `pm2`

## Files
```
COPY --from=build /opt/app/next.config.js .
COPY --from=build /opt/app/next-start . // 可选项
COPY --from=build /opt/app/.next .next
COPY --from=build /opt/app/public public // 可选项
```