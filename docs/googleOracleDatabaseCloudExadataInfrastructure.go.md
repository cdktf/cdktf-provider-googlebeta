# `googleOracleDatabaseCloudExadataInfrastructure` Submodule <a name="`googleOracleDatabaseCloudExadataInfrastructure` Submodule" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseCloudExadataInfrastructure <a name="GoogleOracleDatabaseCloudExadataInfrastructure" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure google_oracle_database_cloud_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudexadatainfrastructure"

googleoracledatabasecloudexadatainfrastructure.NewGoogleOracleDatabaseCloudExadataInfrastructure(scope Construct, id *string, config GoogleOracleDatabaseCloudExadataInfrastructureConfig) GoogleOracleDatabaseCloudExadataInfrastructure
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig">GoogleOracleDatabaseCloudExadataInfrastructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig">GoogleOracleDatabaseCloudExadataInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetGcpOracleZone">ResetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putProperties"></a>

```go
func PutProperties(value GoogleOracleDatabaseCloudExadataInfrastructureProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putTimeouts"></a>

```go
func PutTimeouts(value GoogleOracleDatabaseCloudExadataInfrastructureTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a>

---

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetGcpOracleZone` <a name="ResetGcpOracleZone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetGcpOracleZone"></a>

```go
func ResetGcpOracleZone()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOracleDatabaseCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudexadatainfrastructure"

googleoracledatabasecloudexadatainfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudexadatainfrastructure"

googleoracledatabasecloudexadatainfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudexadatainfrastructure"

googleoracledatabasecloudexadatainfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudexadatainfrastructure"

googleoracledatabasecloudexadatainfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleOracleDatabaseCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleOracleDatabaseCloudExadataInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleOracleDatabaseCloudExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseCloudExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference">GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureIdInput">CloudExadataInfrastructureIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.gcpOracleZoneInput">GcpOracleZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.gcpOracleZone">GcpOracleZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.entitlementId"></a>

```go
func EntitlementId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.properties"></a>

```go
func Properties() GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.timeouts"></a>

```go
func Timeouts() GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference">GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference</a>

---

##### `CloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="CloudExadataInfrastructureIdInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureIdInput"></a>

```go
func CloudExadataInfrastructureIdInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GcpOracleZoneInput`<sup>Optional</sup> <a name="GcpOracleZoneInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.gcpOracleZoneInput"></a>

```go
func GcpOracleZoneInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.propertiesInput"></a>

```go
func PropertiesInput() GoogleOracleDatabaseCloudExadataInfrastructureProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureId"></a>

```go
func CloudExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.gcpOracleZone"></a>

```go
func GcpOracleZone() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructure.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseCloudExadataInfrastructureConfig <a name="GoogleOracleDatabaseCloudExadataInfrastructureConfig" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudexadatainfrastructure"

&googleoracledatabasecloudexadatainfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloudExadataInfrastructureId: *string,
	Location: *string,
	DeletionProtection: interface{},
	DisplayName: *string,
	GcpOracleZone: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Properties: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>*string</code> | The ID of the Exadata Infrastructure to create. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User friendly name for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.gcpOracleZone">GcpOracleZone</a></code> | <code>*string</code> | GCP location where Oracle Exadata is hosted. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#id GoogleOracleDatabaseCloudExadataInfrastructure#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#project GoogleOracleDatabaseCloudExadataInfrastructure#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.cloudExadataInfrastructureId"></a>

```go
CloudExadataInfrastructureId *string
```

- *Type:* *string

The ID of the Exadata Infrastructure to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#cloud_exadata_infrastructure_id GoogleOracleDatabaseCloudExadataInfrastructure#cloud_exadata_infrastructure_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#location GoogleOracleDatabaseCloudExadataInfrastructure#location}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#deletion_protection GoogleOracleDatabaseCloudExadataInfrastructure#deletion_protection}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User friendly name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#display_name GoogleOracleDatabaseCloudExadataInfrastructure#display_name}

---

##### `GcpOracleZone`<sup>Optional</sup> <a name="GcpOracleZone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.gcpOracleZone"></a>

```go
GcpOracleZone *string
```

- *Type:* *string

GCP location where Oracle Exadata is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#gcp_oracle_zone GoogleOracleDatabaseCloudExadataInfrastructure#gcp_oracle_zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#id GoogleOracleDatabaseCloudExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#labels GoogleOracleDatabaseCloudExadataInfrastructure#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#project GoogleOracleDatabaseCloudExadataInfrastructure#project}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.properties"></a>

```go
Properties GoogleOracleDatabaseCloudExadataInfrastructureProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#properties GoogleOracleDatabaseCloudExadataInfrastructure#properties}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureConfig.property.timeouts"></a>

```go
Timeouts GoogleOracleDatabaseCloudExadataInfrastructureTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts">GoogleOracleDatabaseCloudExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#timeouts GoogleOracleDatabaseCloudExadataInfrastructure#timeouts}

---

### GoogleOracleDatabaseCloudExadataInfrastructureProperties <a name="GoogleOracleDatabaseCloudExadataInfrastructureProperties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudexadatainfrastructure"

&googleoracledatabasecloudexadatainfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties {
	Shape: *string,
	ComputeCount: *f64,
	CustomerContacts: interface{},
	MaintenanceWindow: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow,
	StorageCount: *f64,
	TotalStorageSizeGb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.shape">Shape</a></code> | <code>*string</code> | The shape of the Exadata Infrastructure. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | The number of compute servers for the Exadata Infrastructure. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.customerContacts">CustomerContacts</a></code> | <code>interface{}</code> | customer_contacts block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.storageCount">StorageCount</a></code> | <code>*f64</code> | The number of Cloud Exadata storage servers for the Exadata Infrastructure. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.totalStorageSizeGb">TotalStorageSizeGb</a></code> | <code>*f64</code> | The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB). |

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

The shape of the Exadata Infrastructure.

The shape determines the
amount of CPU, storage, and memory resources allocated to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#shape GoogleOracleDatabaseCloudExadataInfrastructure#shape}

---

##### `ComputeCount`<sup>Optional</sup> <a name="ComputeCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.computeCount"></a>

```go
ComputeCount *f64
```

- *Type:* *f64

The number of compute servers for the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#compute_count GoogleOracleDatabaseCloudExadataInfrastructure#compute_count}

---

##### `CustomerContacts`<sup>Optional</sup> <a name="CustomerContacts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.customerContacts"></a>

```go
CustomerContacts interface{}
```

- *Type:* interface{}

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#customer_contacts GoogleOracleDatabaseCloudExadataInfrastructure#customer_contacts}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.maintenanceWindow"></a>

```go
MaintenanceWindow GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#maintenance_window GoogleOracleDatabaseCloudExadataInfrastructure#maintenance_window}

---

##### `StorageCount`<sup>Optional</sup> <a name="StorageCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.storageCount"></a>

```go
StorageCount *f64
```

- *Type:* *f64

The number of Cloud Exadata storage servers for the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#storage_count GoogleOracleDatabaseCloudExadataInfrastructure#storage_count}

---

##### `TotalStorageSizeGb`<sup>Optional</sup> <a name="TotalStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties.property.totalStorageSizeGb"></a>

```go
TotalStorageSizeGb *f64
```

- *Type:* *f64

The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#total_storage_size_gb GoogleOracleDatabaseCloudExadataInfrastructure#total_storage_size_gb}

---

### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudexadatainfrastructure"

&googleoracledatabasecloudexadatainfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts {
	Email: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.property.email">Email</a></code> | <code>*string</code> | The email address used by Oracle to send notifications regarding databases and infrastructure. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.property.email"></a>

```go
Email *string
```

- *Type:* *string

The email address used by Oracle to send notifications regarding databases and infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#email GoogleOracleDatabaseCloudExadataInfrastructure#email}

---

### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudexadatainfrastructure"

&googleoracledatabasecloudexadatainfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow {
	CustomActionTimeoutMins: *f64,
	DaysOfWeek: *[]*string,
	HoursOfDay: *[]*f64,
	IsCustomActionTimeoutEnabled: interface{},
	LeadTimeWeek: *f64,
	Months: *[]*string,
	PatchingMode: *string,
	Preference: *string,
	WeeksOfMonth: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.customActionTimeoutMins">CustomActionTimeoutMins</a></code> | <code>*f64</code> | Determines the amount of time the system will wait before the start of each database server patching operation. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | Days during the week when maintenance should be performed. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.hoursOfDay">HoursOfDay</a></code> | <code>*[]*f64</code> | The window of hours during the day when maintenance should be performed. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>interface{}</code> | If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.leadTimeWeek">LeadTimeWeek</a></code> | <code>*f64</code> | Lead time window allows user to set a lead time to prepare for a down time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.months">Months</a></code> | <code>*[]*string</code> | Months during the year when maintenance should be performed. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.patchingMode">PatchingMode</a></code> | <code>*string</code> | Cloud CloudExadataInfrastructure node patching method, either "ROLLING"  or "NONROLLING". Default value is ROLLING.   Possible values:  PATCHING_MODE_UNSPECIFIED ROLLING NON_ROLLING. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.preference">Preference</a></code> | <code>*string</code> | The maintenance window scheduling preference.   Possible values:  MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED CUSTOM_PREFERENCE NO_PREFERENCE. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*f64</code> | Weeks during the month when maintenance should be performed. |

---

##### `CustomActionTimeoutMins`<sup>Optional</sup> <a name="CustomActionTimeoutMins" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.customActionTimeoutMins"></a>

```go
CustomActionTimeoutMins *f64
```

- *Type:* *f64

Determines the amount of time the system will wait before the start of each database server patching operation.

Custom action timeout is in minutes and
valid value is between 15 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#custom_action_timeout_mins GoogleOracleDatabaseCloudExadataInfrastructure#custom_action_timeout_mins}

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.daysOfWeek"></a>

```go
DaysOfWeek *[]*string
```

- *Type:* *[]*string

Days during the week when maintenance should be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#days_of_week GoogleOracleDatabaseCloudExadataInfrastructure#days_of_week}

---

##### `HoursOfDay`<sup>Optional</sup> <a name="HoursOfDay" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.hoursOfDay"></a>

```go
HoursOfDay *[]*f64
```

- *Type:* *[]*f64

The window of hours during the day when maintenance should be performed.

The window is a 4 hour slot. Valid values are:
0 - represents time slot 0:00 - 3:59 UTC
4 - represents time slot 4:00 - 7:59 UTC
8 - represents time slot 8:00 - 11:59 UTC
12 - represents time slot 12:00 - 15:59 UTC
16 - represents time slot 16:00 - 19:59 UTC
20 - represents time slot 20:00 - 23:59 UTC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#hours_of_day GoogleOracleDatabaseCloudExadataInfrastructure#hours_of_day}

---

##### `IsCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.isCustomActionTimeoutEnabled"></a>

```go
IsCustomActionTimeoutEnabled interface{}
```

- *Type:* interface{}

If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#is_custom_action_timeout_enabled GoogleOracleDatabaseCloudExadataInfrastructure#is_custom_action_timeout_enabled}

---

##### `LeadTimeWeek`<sup>Optional</sup> <a name="LeadTimeWeek" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.leadTimeWeek"></a>

```go
LeadTimeWeek *f64
```

- *Type:* *f64

Lead time window allows user to set a lead time to prepare for a down time.

The lead time is in weeks and valid value is between 1 to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#lead_time_week GoogleOracleDatabaseCloudExadataInfrastructure#lead_time_week}

---

##### `Months`<sup>Optional</sup> <a name="Months" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.months"></a>

```go
Months *[]*string
```

- *Type:* *[]*string

Months during the year when maintenance should be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#months GoogleOracleDatabaseCloudExadataInfrastructure#months}

---

##### `PatchingMode`<sup>Optional</sup> <a name="PatchingMode" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.patchingMode"></a>

```go
PatchingMode *string
```

- *Type:* *string

Cloud CloudExadataInfrastructure node patching method, either "ROLLING"  or "NONROLLING". Default value is ROLLING.   Possible values:  PATCHING_MODE_UNSPECIFIED ROLLING NON_ROLLING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#patching_mode GoogleOracleDatabaseCloudExadataInfrastructure#patching_mode}

---

##### `Preference`<sup>Optional</sup> <a name="Preference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.preference"></a>

```go
Preference *string
```

- *Type:* *string

The maintenance window scheduling preference.   Possible values:  MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED CUSTOM_PREFERENCE NO_PREFERENCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#preference GoogleOracleDatabaseCloudExadataInfrastructure#preference}

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.weeksOfMonth"></a>

```go
WeeksOfMonth *[]*f64
```

- *Type:* *[]*f64

Weeks during the month when maintenance should be performed.

Weeks start on
the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7
days. Weeks start and end based on calendar dates, not days of the week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#weeks_of_month GoogleOracleDatabaseCloudExadataInfrastructure#weeks_of_month}

---

### GoogleOracleDatabaseCloudExadataInfrastructureTimeouts <a name="GoogleOracleDatabaseCloudExadataInfrastructureTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudexadatainfrastructure"

&googleoracledatabasecloudexadatainfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#create GoogleOracleDatabaseCloudExadataInfrastructure#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#delete GoogleOracleDatabaseCloudExadataInfrastructure#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#update GoogleOracleDatabaseCloudExadataInfrastructure#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#create GoogleOracleDatabaseCloudExadataInfrastructure#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#delete GoogleOracleDatabaseCloudExadataInfrastructure#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_oracle_database_cloud_exadata_infrastructure#update GoogleOracleDatabaseCloudExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudexadatainfrastructure"

googleoracledatabasecloudexadatainfrastructure.NewGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get"></a>

```go
func Get(index *f64) GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudexadatainfrastructure"

googleoracledatabasecloudexadatainfrastructure.NewGoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudexadatainfrastructure"

googleoracledatabasecloudexadatainfrastructure.NewGoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetCustomActionTimeoutMins">ResetCustomActionTimeoutMins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetHoursOfDay">ResetHoursOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled">ResetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetLeadTimeWeek">ResetLeadTimeWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetMonths">ResetMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPatchingMode">ResetPatchingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPreference">ResetPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomActionTimeoutMins` <a name="ResetCustomActionTimeoutMins" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetCustomActionTimeoutMins"></a>

```go
func ResetCustomActionTimeoutMins()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```

##### `ResetHoursOfDay` <a name="ResetHoursOfDay" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```go
func ResetHoursOfDay()
```

##### `ResetIsCustomActionTimeoutEnabled` <a name="ResetIsCustomActionTimeoutEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```go
func ResetIsCustomActionTimeoutEnabled()
```

##### `ResetLeadTimeWeek` <a name="ResetLeadTimeWeek" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetLeadTimeWeek"></a>

```go
func ResetLeadTimeWeek()
```

##### `ResetMonths` <a name="ResetMonths" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetMonths"></a>

```go
func ResetMonths()
```

##### `ResetPatchingMode` <a name="ResetPatchingMode" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPatchingMode"></a>

```go
func ResetPatchingMode()
```

##### `ResetPreference` <a name="ResetPreference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPreference"></a>

```go
func ResetPreference()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```go
func ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMinsInput">CustomActionTimeoutMinsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDayInput">HoursOfDayInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput">IsCustomActionTimeoutEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeekInput">LeadTimeWeekInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.monthsInput">MonthsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingModeInput">PatchingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMins">CustomActionTimeoutMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeek">LeadTimeWeek</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.months">Months</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingMode">PatchingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomActionTimeoutMinsInput`<sup>Optional</sup> <a name="CustomActionTimeoutMinsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMinsInput"></a>

```go
func CustomActionTimeoutMinsInput() *f64
```

- *Type:* *f64

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `HoursOfDayInput`<sup>Optional</sup> <a name="HoursOfDayInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```go
func HoursOfDayInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `IsCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabledInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```go
func IsCustomActionTimeoutEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LeadTimeWeekInput`<sup>Optional</sup> <a name="LeadTimeWeekInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeekInput"></a>

```go
func LeadTimeWeekInput() *f64
```

- *Type:* *f64

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.monthsInput"></a>

```go
func MonthsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PatchingModeInput`<sup>Optional</sup> <a name="PatchingModeInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```go
func PatchingModeInput() *string
```

- *Type:* *string

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preferenceInput"></a>

```go
func PreferenceInput() *string
```

- *Type:* *string

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```go
func WeeksOfMonthInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `CustomActionTimeoutMins`<sup>Required</sup> <a name="CustomActionTimeoutMins" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMins"></a>

```go
func CustomActionTimeoutMins() *f64
```

- *Type:* *f64

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```go
func HoursOfDay() *[]*f64
```

- *Type:* *[]*f64

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```go
func IsCustomActionTimeoutEnabled() interface{}
```

- *Type:* interface{}

---

##### `LeadTimeWeek`<sup>Required</sup> <a name="LeadTimeWeek" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeek"></a>

```go
func LeadTimeWeek() *f64
```

- *Type:* *f64

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.months"></a>

```go
func Months() *[]*string
```

- *Type:* *[]*string

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingMode"></a>

```go
func PatchingMode() *string
```

- *Type:* *string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preference"></a>

```go
func Preference() *string
```

- *Type:* *string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```go
func WeeksOfMonth() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---


### GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference <a name="GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudexadatainfrastructure"

googleoracledatabasecloudexadatainfrastructure.NewGoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts">PutCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetComputeCount">ResetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetCustomerContacts">ResetCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetStorageCount">ResetStorageCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetTotalStorageSizeGb">ResetTotalStorageSizeGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerContacts` <a name="PutCustomerContacts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts"></a>

```go
func PutCustomerContacts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---

##### `ResetComputeCount` <a name="ResetComputeCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetComputeCount"></a>

```go
func ResetComputeCount()
```

##### `ResetCustomerContacts` <a name="ResetCustomerContacts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetCustomerContacts"></a>

```go
func ResetCustomerContacts()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetStorageCount` <a name="ResetStorageCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetStorageCount"></a>

```go
func ResetStorageCount()
```

##### `ResetTotalStorageSizeGb` <a name="ResetTotalStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetTotalStorageSizeGb"></a>

```go
func ResetTotalStorageSizeGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.activatedStorageCount">ActivatedStorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.additionalStorageCount">AdditionalStorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.availableStorageSizeGb">AvailableStorageSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.cpuCount">CpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContacts">CustomerContacts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dataStorageSizeTb">DataStorageSizeTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbNodeStorageSizeGb">DbNodeStorageSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbServerVersion">DbServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxCpuCount">MaxCpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDataStorageTb">MaxDataStorageTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDbNodeStorageSizeGb">MaxDbNodeStorageSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxMemoryGb">MaxMemoryGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.memorySizeGb">MemorySizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyDbServerVersion">MonthlyDbServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyStorageServerVersion">MonthlyStorageServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunId">NextMaintenanceRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunTime">NextMaintenanceRunTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextSecurityMaintenanceRunTime">NextSecurityMaintenanceRunTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageServerVersion">StorageServerVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCountInput">ComputeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContactsInput">CustomerContactsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCountInput">StorageCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGbInput">TotalStorageSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCount">StorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGb">TotalStorageSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActivatedStorageCount`<sup>Required</sup> <a name="ActivatedStorageCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.activatedStorageCount"></a>

```go
func ActivatedStorageCount() *f64
```

- *Type:* *f64

---

##### `AdditionalStorageCount`<sup>Required</sup> <a name="AdditionalStorageCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.additionalStorageCount"></a>

```go
func AdditionalStorageCount() *f64
```

- *Type:* *f64

---

##### `AvailableStorageSizeGb`<sup>Required</sup> <a name="AvailableStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.availableStorageSizeGb"></a>

```go
func AvailableStorageSizeGb() *f64
```

- *Type:* *f64

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.cpuCount"></a>

```go
func CpuCount() *f64
```

- *Type:* *f64

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContacts"></a>

```go
func CustomerContacts() GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList</a>

---

##### `DataStorageSizeTb`<sup>Required</sup> <a name="DataStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dataStorageSizeTb"></a>

```go
func DataStorageSizeTb() *f64
```

- *Type:* *f64

---

##### `DbNodeStorageSizeGb`<sup>Required</sup> <a name="DbNodeStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```go
func DbNodeStorageSizeGb() *f64
```

- *Type:* *f64

---

##### `DbServerVersion`<sup>Required</sup> <a name="DbServerVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbServerVersion"></a>

```go
func DbServerVersion() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference</a>

---

##### `MaxCpuCount`<sup>Required</sup> <a name="MaxCpuCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxCpuCount"></a>

```go
func MaxCpuCount() *f64
```

- *Type:* *f64

---

##### `MaxDataStorageTb`<sup>Required</sup> <a name="MaxDataStorageTb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDataStorageTb"></a>

```go
func MaxDataStorageTb() *f64
```

- *Type:* *f64

---

##### `MaxDbNodeStorageSizeGb`<sup>Required</sup> <a name="MaxDbNodeStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDbNodeStorageSizeGb"></a>

```go
func MaxDbNodeStorageSizeGb() *f64
```

- *Type:* *f64

---

##### `MaxMemoryGb`<sup>Required</sup> <a name="MaxMemoryGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxMemoryGb"></a>

```go
func MaxMemoryGb() *f64
```

- *Type:* *f64

---

##### `MemorySizeGb`<sup>Required</sup> <a name="MemorySizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.memorySizeGb"></a>

```go
func MemorySizeGb() *f64
```

- *Type:* *f64

---

##### `MonthlyDbServerVersion`<sup>Required</sup> <a name="MonthlyDbServerVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyDbServerVersion"></a>

```go
func MonthlyDbServerVersion() *string
```

- *Type:* *string

---

##### `MonthlyStorageServerVersion`<sup>Required</sup> <a name="MonthlyStorageServerVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyStorageServerVersion"></a>

```go
func MonthlyStorageServerVersion() *string
```

- *Type:* *string

---

##### `NextMaintenanceRunId`<sup>Required</sup> <a name="NextMaintenanceRunId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunId"></a>

```go
func NextMaintenanceRunId() *string
```

- *Type:* *string

---

##### `NextMaintenanceRunTime`<sup>Required</sup> <a name="NextMaintenanceRunTime" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunTime"></a>

```go
func NextMaintenanceRunTime() *string
```

- *Type:* *string

---

##### `NextSecurityMaintenanceRunTime`<sup>Required</sup> <a name="NextSecurityMaintenanceRunTime" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextSecurityMaintenanceRunTime"></a>

```go
func NextSecurityMaintenanceRunTime() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageServerVersion`<sup>Required</sup> <a name="StorageServerVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageServerVersion"></a>

```go
func StorageServerVersion() *string
```

- *Type:* *string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCountInput"></a>

```go
func ComputeCountInput() *f64
```

- *Type:* *f64

---

##### `CustomerContactsInput`<sup>Optional</sup> <a name="CustomerContactsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContactsInput"></a>

```go
func CustomerContactsInput() interface{}
```

- *Type:* interface{}

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">GoogleOracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `StorageCountInput`<sup>Optional</sup> <a name="StorageCountInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCountInput"></a>

```go
func StorageCountInput() *f64
```

- *Type:* *f64

---

##### `TotalStorageSizeGbInput`<sup>Optional</sup> <a name="TotalStorageSizeGbInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGbInput"></a>

```go
func TotalStorageSizeGbInput() *f64
```

- *Type:* *f64

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `StorageCount`<sup>Required</sup> <a name="StorageCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCount"></a>

```go
func StorageCount() *f64
```

- *Type:* *f64

---

##### `TotalStorageSizeGb`<sup>Required</sup> <a name="TotalStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGb"></a>

```go
func TotalStorageSizeGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseCloudExadataInfrastructureProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureProperties">GoogleOracleDatabaseCloudExadataInfrastructureProperties</a>

---


### GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference <a name="GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudexadatainfrastructure"

googleoracledatabasecloudexadatainfrastructure.NewGoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudExadataInfrastructure.GoogleOracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



