#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.contributors = exports.author = exports.version = exports.description = exports.name = exports.dsConsolePrefix = void 0;
require("source-map-support/register");
var chalk_1 = __importDefault(require("chalk"));
var path_1 = require("path");
var configHandler_1 = __importDefault(require("./util/configHandler"));
var copyTask_1 = __importDefault(require("./util/copyTask"));
var depCheck_1 = __importDefault(require("./util/depCheck"));
var fileWatcher_1 = __importDefault(require("./util/fileWatcher"));
var todoCheck_1 = __importDefault(require("./util/todoCheck"));
var tsCompiler_1 = __importDefault(require("./util/tsCompiler"));
exports.dsConsolePrefix = "● ", exports.name = (_a = require("../package.json"), _a.name), exports.description = _a.description, exports.version = _a.version, exports.author = _a.author, exports.contributors = _a.contributors;
exports.config = configHandler_1.default();
function run() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!exports.config.copyOnly) return [3, 2];
                    return [4, copyTask_1.default()];
                case 1: return [2, _a.sent()];
                case 2:
                    if (!exports.config.silent)
                        console.log(chalk_1.default.green(chalk_1.default.white(exports.dsConsolePrefix) + "Launching " + chalk_1.default.bold("DevScript") + " " + chalk_1.default.hex("#bebebe")("(v" + exports.version + ")") + " on " + chalk_1.default.bold(path_1.basename(process.cwd())) + "\u2026"));
                    fileWatcher_1.default();
                    if (!exports.config.depCheck) return [3, 4];
                    return [4, depCheck_1.default()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(!exports.config.silent && exports.config.todoCheck)) return [3, 6];
                    return [4, todoCheck_1.default()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    tsCompiler_1.default();
                    return [2];
            }
        });
    });
}
run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsdUNBQXFDO0FBRXJDLGdEQUEwQjtBQUMxQiw2QkFBZ0M7QUFFaEMsdUVBQXVDO0FBQ3ZDLDZEQUF1QztBQUN2Qyw2REFBd0M7QUFDeEMsbUVBQWdEO0FBQ2hELCtEQUEwQztBQUMxQyxpRUFBOEM7QUFFakMsUUFBQSxlQUFlLEdBQUcsSUFBSSxFQUVqQyxRQUFBLElBQUksSUFETCxLQVlJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxZQVY3QixRQUFBLFdBQVcsbUJBQ1gsUUFBQSxPQUFPLGVBQ1AsUUFBQSxNQUFNLGNBQ04sUUFBQSxZQUFZLG1CQU9rQjtBQUVuQixRQUFBLE1BQU0sR0FBRyx1QkFBRyxFQUFFLENBQUM7QUFFNUIsU0FBZSxHQUFHOzs7Ozt5QkFDYixjQUFNLENBQUMsUUFBUSxFQUFmLGNBQWU7b0JBQVMsV0FBTSxrQkFBUSxFQUFFLEVBQUE7d0JBQXZCLFdBQU8sU0FBZ0IsRUFBQzs7b0JBRTdDLElBQUksQ0FBQyxjQUFNLENBQUMsTUFBTTt3QkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FDVixlQUFLLENBQUMsS0FBSyxDQUNQLGVBQUssQ0FBQyxLQUFLLENBQUMsdUJBQWUsQ0FBQyxrQkFBYSxlQUFLLENBQUMsSUFBSSxDQUNyRCxXQUFXLENBQ1gsU0FBSSxlQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksR0FBRyxlQUFPLEdBQUcsR0FBRyxDQUFDLFlBQU8sZUFBSyxDQUFDLElBQUksQ0FDL0QsZUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUN2QixXQUFHLENBQ0osQ0FDRCxDQUFDO29CQUVILHFCQUFjLEVBQUUsQ0FBQzt5QkFFYixjQUFNLENBQUMsUUFBUSxFQUFmLGNBQWU7b0JBQUUsV0FBTSxrQkFBUyxFQUFFLEVBQUE7O29CQUFqQixTQUFpQixDQUFDOzs7eUJBQ25DLENBQUEsQ0FBQyxjQUFNLENBQUMsTUFBTSxJQUFJLGNBQU0sQ0FBQyxTQUFTLENBQUEsRUFBbEMsY0FBa0M7b0JBQUUsV0FBTSxtQkFBVSxFQUFFLEVBQUE7O29CQUFsQixTQUFrQixDQUFDOzs7b0JBRTNELG9CQUFhLEVBQUUsQ0FBQzs7Ozs7Q0FDaEI7QUFFRCxHQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcclxuXHJcbmltcG9ydCBcInNvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlclwiO1xyXG5cclxuaW1wb3J0IGNoYWxrIGZyb20gXCJjaGFsa1wiO1xyXG5pbXBvcnQgeyBiYXNlbmFtZSB9IGZyb20gXCJwYXRoXCI7XHJcblxyXG5pbXBvcnQgY2ZnIGZyb20gXCIuL3V0aWwvY29uZmlnSGFuZGxlclwiO1xyXG5pbXBvcnQgY29weVRhc2sgZnJvbSBcIi4vdXRpbC9jb3B5VGFza1wiO1xyXG5pbXBvcnQgY2hlY2tEZXBzIGZyb20gXCIuL3V0aWwvZGVwQ2hlY2tcIjtcclxuaW1wb3J0IHJ1bkZpbGVXYXRjaGVyIGZyb20gXCIuL3V0aWwvZmlsZVdhdGNoZXJcIjtcclxuaW1wb3J0IGNoZWNrVG9kb3MgZnJvbSBcIi4vdXRpbC90b2RvQ2hlY2tcIjtcclxuaW1wb3J0IHJ1blRTQ29tcGlsZXIgZnJvbSBcIi4vdXRpbC90c0NvbXBpbGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHNDb25zb2xlUHJlZml4ID0gXCLil48gXCIsXHJcblx0e1xyXG5cdFx0bmFtZSxcclxuXHRcdGRlc2NyaXB0aW9uLFxyXG5cdFx0dmVyc2lvbixcclxuXHRcdGF1dGhvcixcclxuXHRcdGNvbnRyaWJ1dG9yc1xyXG5cdH06IHtcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblx0XHR2ZXJzaW9uOiBzdHJpbmc7XHJcblx0XHRhdXRob3I6IHN0cmluZztcclxuXHRcdGNvbnRyaWJ1dG9yczogc3RyaW5nW107XHJcblx0fSA9IHJlcXVpcmUoXCIuLi9wYWNrYWdlLmpzb25cIik7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0gY2ZnKCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBydW4oKSB7XHJcblx0aWYgKGNvbmZpZy5jb3B5T25seSkgcmV0dXJuIGF3YWl0IGNvcHlUYXNrKCk7XHJcblxyXG5cdGlmICghY29uZmlnLnNpbGVudClcclxuXHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRjaGFsay5ncmVlbihcclxuXHRcdFx0XHRgJHtjaGFsay53aGl0ZShkc0NvbnNvbGVQcmVmaXgpfUxhdW5jaGluZyAke2NoYWxrLmJvbGQoXHJcblx0XHRcdFx0XHRcIkRldlNjcmlwdFwiXHJcblx0XHRcdFx0KX0gJHtjaGFsay5oZXgoXCIjYmViZWJlXCIpKFwiKHZcIiArIHZlcnNpb24gKyBcIilcIil9IG9uICR7Y2hhbGsuYm9sZChcclxuXHRcdFx0XHRcdGJhc2VuYW1lKHByb2Nlc3MuY3dkKCkpXHJcblx0XHRcdFx0KX3igKZgXHJcblx0XHRcdClcclxuXHRcdCk7XHJcblxyXG5cdHJ1bkZpbGVXYXRjaGVyKCk7XHJcblxyXG5cdGlmIChjb25maWcuZGVwQ2hlY2spIGF3YWl0IGNoZWNrRGVwcygpO1xyXG5cdGlmICghY29uZmlnLnNpbGVudCAmJiBjb25maWcudG9kb0NoZWNrKSBhd2FpdCBjaGVja1RvZG9zKCk7XHJcblxyXG5cdHJ1blRTQ29tcGlsZXIoKTtcclxufVxyXG5cclxucnVuKCk7XHJcbiJdfQ==