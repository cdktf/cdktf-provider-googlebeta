# `googleFirebaseAppCheckRecaptchaEnterpriseConfig` Submodule <a name="`googleFirebaseAppCheckRecaptchaEnterpriseConfig` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppCheckRecaptchaEnterpriseConfig <a name="GoogleFirebaseAppCheckRecaptchaEnterpriseConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config google_firebase_app_check_recaptcha_enterprise_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirebaseappcheckrecaptchaenterpriseconfig"

googlefirebaseappcheckrecaptchaenterpriseconfig.NewGoogleFirebaseAppCheckRecaptchaEnterpriseConfig(scope Construct, id *string, config GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig) GoogleFirebaseAppCheckRecaptchaEnterpriseConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetTokenTtl">ResetTokenTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTokenTtl` <a name="ResetTokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetTokenTtl"></a>

```go
func ResetTokenTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppCheckRecaptchaEnterpriseConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirebaseappcheckrecaptchaenterpriseconfig"

googlefirebaseappcheckrecaptchaenterpriseconfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirebaseappcheckrecaptchaenterpriseconfig"

googlefirebaseappcheckrecaptchaenterpriseconfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirebaseappcheckrecaptchaenterpriseconfig"

googlefirebaseappcheckrecaptchaenterpriseconfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirebaseappcheckrecaptchaenterpriseconfig"

googlefirebaseappcheckrecaptchaenterpriseconfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleFirebaseAppCheckRecaptchaEnterpriseConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleFirebaseAppCheckRecaptchaEnterpriseConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleFirebaseAppCheckRecaptchaEnterpriseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppCheckRecaptchaEnterpriseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.siteKeyInput">SiteKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.tokenTtlInput">TokenTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.siteKey">SiteKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.tokenTtl">TokenTtl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.timeouts"></a>

```go
func Timeouts() GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SiteKeyInput`<sup>Optional</sup> <a name="SiteKeyInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.siteKeyInput"></a>

```go
func SiteKeyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TokenTtlInput`<sup>Optional</sup> <a name="TokenTtlInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.tokenTtlInput"></a>

```go
func TokenTtlInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SiteKey`<sup>Required</sup> <a name="SiteKey" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.siteKey"></a>

```go
func SiteKey() *string
```

- *Type:* *string

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.tokenTtl"></a>

```go
func TokenTtl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig <a name="GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirebaseappcheckrecaptchaenterpriseconfig"

&googlefirebaseappcheckrecaptchaenterpriseconfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	SiteKey: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts,
	TokenTtl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.appId">AppId</a></code> | <code>*string</code> | The ID of an [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.siteKey">SiteKey</a></code> | <code>*string</code> | The score-based site key created in reCAPTCHA Enterprise used to invoke reCAPTCHA and generate the reCAPTCHA tokens for your application. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#id GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#project GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.tokenTtl">TokenTtl</a></code> | <code>*string</code> | Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise artifacts will be valid. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

The ID of an [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#app_id GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#app_id}

---

##### `SiteKey`<sup>Required</sup> <a name="SiteKey" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.siteKey"></a>

```go
SiteKey *string
```

- *Type:* *string

The score-based site key created in reCAPTCHA Enterprise used to invoke reCAPTCHA and generate the reCAPTCHA tokens for your application.

**Important**: This is not the siteSecret (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#site_key GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#site_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#id GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#project GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#timeouts GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#timeouts}

---

##### `TokenTtl`<sup>Optional</sup> <a name="TokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.tokenTtl"></a>

```go
TokenTtl *string
```

- *Type:* *string

Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#token_ttl GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#token_ttl}

---

### GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts <a name="GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirebaseappcheckrecaptchaenterpriseconfig"

&googlefirebaseappcheckrecaptchaenterpriseconfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#create GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#delete GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#update GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#create GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#delete GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#update GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference <a name="GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefirebaseappcheckrecaptchaenterpriseconfig"

googlefirebaseappcheckrecaptchaenterpriseconfig.NewGoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



