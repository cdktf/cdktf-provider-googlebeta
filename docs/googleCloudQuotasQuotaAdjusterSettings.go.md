# `googleCloudQuotasQuotaAdjusterSettings` Submodule <a name="`googleCloudQuotasQuotaAdjusterSettings` Submodule" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudQuotasQuotaAdjusterSettings <a name="GoogleCloudQuotasQuotaAdjusterSettings" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_quotas_quota_adjuster_settings google_cloud_quotas_quota_adjuster_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudquotasquotaadjustersettings"

googlecloudquotasquotaadjustersettings.NewGoogleCloudQuotasQuotaAdjusterSettings(scope Construct, id *string, config GoogleCloudQuotasQuotaAdjusterSettingsConfig) GoogleCloudQuotasQuotaAdjusterSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig">GoogleCloudQuotasQuotaAdjusterSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig">GoogleCloudQuotasQuotaAdjusterSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudQuotasQuotaAdjusterSettingsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts">GoogleCloudQuotasQuotaAdjusterSettingsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetParent"></a>

```go
func ResetParent()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudQuotasQuotaAdjusterSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudquotasquotaadjustersettings"

googlecloudquotasquotaadjustersettings.GoogleCloudQuotasQuotaAdjusterSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudquotasquotaadjustersettings"

googlecloudquotasquotaadjustersettings.GoogleCloudQuotasQuotaAdjusterSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudquotasquotaadjustersettings"

googlecloudquotasquotaadjustersettings.GoogleCloudQuotasQuotaAdjusterSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudquotasquotaadjustersettings"

googlecloudquotasquotaadjustersettings.GoogleCloudQuotasQuotaAdjusterSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleCloudQuotasQuotaAdjusterSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudQuotasQuotaAdjusterSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudQuotasQuotaAdjusterSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudQuotasQuotaAdjusterSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.effectiveContainer">EffectiveContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.effectiveEnablement">EffectiveEnablement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference">GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.enablementInput">EnablementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.enablement">Enablement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveContainer`<sup>Required</sup> <a name="EffectiveContainer" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.effectiveContainer"></a>

```go
func EffectiveContainer() *string
```

- *Type:* *string

---

##### `EffectiveEnablement`<sup>Required</sup> <a name="EffectiveEnablement" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.effectiveEnablement"></a>

```go
func EffectiveEnablement() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.timeouts"></a>

```go
func Timeouts() GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference">GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference</a>

---

##### `EnablementInput`<sup>Optional</sup> <a name="EnablementInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.enablementInput"></a>

```go
func EnablementInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Enablement`<sup>Required</sup> <a name="Enablement" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.enablement"></a>

```go
func Enablement() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudQuotasQuotaAdjusterSettingsConfig <a name="GoogleCloudQuotasQuotaAdjusterSettingsConfig" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudquotasquotaadjustersettings"

&googlecloudquotasquotaadjustersettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Enablement: *string,
	Id: *string,
	Parent: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.enablement">Enablement</a></code> | <code>*string</code> | Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#id GoogleCloudQuotasQuotaAdjusterSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent of the quota preference. Allowed parent format is "projects/[project-id / number]". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts">GoogleCloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enablement`<sup>Required</sup> <a name="Enablement" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.enablement"></a>

```go
Enablement *string
```

- *Type:* *string

Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#enablement GoogleCloudQuotasQuotaAdjusterSettings#enablement}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#id GoogleCloudQuotasQuotaAdjusterSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent of the quota preference. Allowed parent format is "projects/[project-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#parent GoogleCloudQuotasQuotaAdjusterSettings#parent}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudQuotasQuotaAdjusterSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts">GoogleCloudQuotasQuotaAdjusterSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#timeouts GoogleCloudQuotasQuotaAdjusterSettings#timeouts}

---

### GoogleCloudQuotasQuotaAdjusterSettingsTimeouts <a name="GoogleCloudQuotasQuotaAdjusterSettingsTimeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudquotasquotaadjustersettings"

&googlecloudquotasquotaadjustersettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#create GoogleCloudQuotasQuotaAdjusterSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#delete GoogleCloudQuotasQuotaAdjusterSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#update GoogleCloudQuotasQuotaAdjusterSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#create GoogleCloudQuotasQuotaAdjusterSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#delete GoogleCloudQuotasQuotaAdjusterSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#update GoogleCloudQuotasQuotaAdjusterSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference <a name="GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecloudquotasquotaadjustersettings"

googlecloudquotasquotaadjustersettings.NewGoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



