# `googleOracleDatabaseCloudVmCluster` Submodule <a name="`googleOracleDatabaseCloudVmCluster` Submodule" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseCloudVmCluster <a name="GoogleOracleDatabaseCloudVmCluster" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster google_oracle_database_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudvmcluster"

googleoracledatabasecloudvmcluster.NewGoogleOracleDatabaseCloudVmCluster(scope Construct, id *string, config GoogleOracleDatabaseCloudVmClusterConfig) GoogleOracleDatabaseCloudVmCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig">GoogleOracleDatabaseCloudVmClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig">GoogleOracleDatabaseCloudVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties"></a>

```go
func PutProperties(value GoogleOracleDatabaseCloudVmClusterProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putTimeouts"></a>

```go
func PutTimeouts(value GoogleOracleDatabaseCloudVmClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts">GoogleOracleDatabaseCloudVmClusterTimeouts</a>

---

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOracleDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudvmcluster"

googleoracledatabasecloudvmcluster.GoogleOracleDatabaseCloudVmCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudvmcluster"

googleoracledatabasecloudvmcluster.GoogleOracleDatabaseCloudVmCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudvmcluster"

googleoracledatabasecloudvmcluster.GoogleOracleDatabaseCloudVmCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudvmcluster"

googleoracledatabasecloudvmcluster.GoogleOracleDatabaseCloudVmCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleOracleDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleOracleDatabaseCloudVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleOracleDatabaseCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.gcpOracleZone">GcpOracleZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference">GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.backupSubnetCidrInput">BackupSubnetCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cidrInput">CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cloudVmClusterIdInput">CloudVmClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.exadataInfrastructureInput">ExadataInfrastructureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.backupSubnetCidr">BackupSubnetCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cloudVmClusterId">CloudVmClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.exadataInfrastructure">ExadataInfrastructure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.gcpOracleZone"></a>

```go
func GcpOracleZone() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.properties"></a>

```go
func Properties() GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.timeouts"></a>

```go
func Timeouts() GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference">GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference</a>

---

##### `BackupSubnetCidrInput`<sup>Optional</sup> <a name="BackupSubnetCidrInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.backupSubnetCidrInput"></a>

```go
func BackupSubnetCidrInput() *string
```

- *Type:* *string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cidrInput"></a>

```go
func CidrInput() *string
```

- *Type:* *string

---

##### `CloudVmClusterIdInput`<sup>Optional</sup> <a name="CloudVmClusterIdInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cloudVmClusterIdInput"></a>

```go
func CloudVmClusterIdInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExadataInfrastructureInput`<sup>Optional</sup> <a name="ExadataInfrastructureInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.exadataInfrastructureInput"></a>

```go
func ExadataInfrastructureInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.propertiesInput"></a>

```go
func PropertiesInput() GoogleOracleDatabaseCloudVmClusterProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackupSubnetCidr`<sup>Required</sup> <a name="BackupSubnetCidr" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.backupSubnetCidr"></a>

```go
func BackupSubnetCidr() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `CloudVmClusterId`<sup>Required</sup> <a name="CloudVmClusterId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cloudVmClusterId"></a>

```go
func CloudVmClusterId() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExadataInfrastructure`<sup>Required</sup> <a name="ExadataInfrastructure" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.exadataInfrastructure"></a>

```go
func ExadataInfrastructure() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseCloudVmClusterConfig <a name="GoogleOracleDatabaseCloudVmClusterConfig" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudvmcluster"

&googleoracledatabasecloudvmcluster.GoogleOracleDatabaseCloudVmClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackupSubnetCidr: *string,
	Cidr: *string,
	CloudVmClusterId: *string,
	ExadataInfrastructure: *string,
	Location: *string,
	Network: *string,
	DeletionProtection: interface{},
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Properties: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.backupSubnetCidr">BackupSubnetCidr</a></code> | <code>*string</code> | CIDR range of the backup subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.cidr">Cidr</a></code> | <code>*string</code> | Network settings. CIDR to use for cluster IP allocation. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.cloudVmClusterId">CloudVmClusterId</a></code> | <code>*string</code> | The ID of the VM Cluster to create. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.exadataInfrastructure">ExadataInfrastructure</a></code> | <code>*string</code> | The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.network">Network</a></code> | <code>*string</code> | The name of the VPC network. Format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether Terraform will be prevented from destroying the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User friendly name for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#id GoogleOracleDatabaseCloudVmCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels or tags associated with the VM Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#project GoogleOracleDatabaseCloudVmCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts">GoogleOracleDatabaseCloudVmClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupSubnetCidr`<sup>Required</sup> <a name="BackupSubnetCidr" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.backupSubnetCidr"></a>

```go
BackupSubnetCidr *string
```

- *Type:* *string

CIDR range of the backup subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#backup_subnet_cidr GoogleOracleDatabaseCloudVmCluster#backup_subnet_cidr}

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.cidr"></a>

```go
Cidr *string
```

- *Type:* *string

Network settings. CIDR to use for cluster IP allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#cidr GoogleOracleDatabaseCloudVmCluster#cidr}

---

##### `CloudVmClusterId`<sup>Required</sup> <a name="CloudVmClusterId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.cloudVmClusterId"></a>

```go
CloudVmClusterId *string
```

- *Type:* *string

The ID of the VM Cluster to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#cloud_vm_cluster_id GoogleOracleDatabaseCloudVmCluster#cloud_vm_cluster_id}

---

##### `ExadataInfrastructure`<sup>Required</sup> <a name="ExadataInfrastructure" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.exadataInfrastructure"></a>

```go
ExadataInfrastructure *string
```

- *Type:* *string

The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#exadata_infrastructure GoogleOracleDatabaseCloudVmCluster#exadata_infrastructure}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#location GoogleOracleDatabaseCloudVmCluster#location}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name of the VPC network. Format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#network GoogleOracleDatabaseCloudVmCluster#network}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether Terraform will be prevented from destroying the cluster.

Deleting this cluster via terraform destroy or terraform apply will only succeed if this field is false in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#deletion_protection GoogleOracleDatabaseCloudVmCluster#deletion_protection}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User friendly name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#display_name GoogleOracleDatabaseCloudVmCluster#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#id GoogleOracleDatabaseCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels or tags associated with the VM Cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#labels GoogleOracleDatabaseCloudVmCluster#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#project GoogleOracleDatabaseCloudVmCluster#project}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.properties"></a>

```go
Properties GoogleOracleDatabaseCloudVmClusterProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#properties GoogleOracleDatabaseCloudVmCluster#properties}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.timeouts"></a>

```go
Timeouts GoogleOracleDatabaseCloudVmClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts">GoogleOracleDatabaseCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#timeouts GoogleOracleDatabaseCloudVmCluster#timeouts}

---

### GoogleOracleDatabaseCloudVmClusterProperties <a name="GoogleOracleDatabaseCloudVmClusterProperties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudvmcluster"

&googleoracledatabasecloudvmcluster.GoogleOracleDatabaseCloudVmClusterProperties {
	CpuCoreCount: *f64,
	LicenseType: *string,
	ClusterName: *string,
	DataStorageSizeTb: *f64,
	DbNodeStorageSizeGb: *f64,
	DbServerOcids: *[]*string,
	DiagnosticsDataCollectionOptions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions,
	DiskRedundancy: *string,
	GiVersion: *string,
	HostnamePrefix: *string,
	LocalBackupEnabled: interface{},
	MemorySizeGb: *f64,
	NodeCount: *f64,
	OcpuCount: *f64,
	SparseDiskgroupEnabled: interface{},
	SshPublicKeys: *[]*string,
	TimeZone: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | Number of enabled CPU cores. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.licenseType">LicenseType</a></code> | <code>*string</code> | License type of VM Cluster.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.clusterName">ClusterName</a></code> | <code>*string</code> | OCI Cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dataStorageSizeTb">DataStorageSizeTb</a></code> | <code>*f64</code> | The data disk group size to be allocated in TBs. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dbNodeStorageSizeGb">DbNodeStorageSizeGb</a></code> | <code>*f64</code> | Local storage per VM. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dbServerOcids">DbServerOcids</a></code> | <code>*[]*string</code> | OCID of database servers. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.diagnosticsDataCollectionOptions">DiagnosticsDataCollectionOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | diagnostics_data_collection_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.diskRedundancy">DiskRedundancy</a></code> | <code>*string</code> | The type of redundancy.   Possible values:  DISK_REDUNDANCY_UNSPECIFIED HIGH NORMAL. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.giVersion">GiVersion</a></code> | <code>*string</code> | Grid Infrastructure Version. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.hostnamePrefix">HostnamePrefix</a></code> | <code>*string</code> | Prefix for VM cluster host names. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.localBackupEnabled">LocalBackupEnabled</a></code> | <code>interface{}</code> | Use local backup. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.memorySizeGb">MemorySizeGb</a></code> | <code>*f64</code> | Memory allocated in GBs. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | Number of database servers. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.ocpuCount">OcpuCount</a></code> | <code>*f64</code> | OCPU count per VM. Minimum is 0.1. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.sparseDiskgroupEnabled">SparseDiskgroupEnabled</a></code> | <code>interface{}</code> | Use exadata sparse snapshots. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | SSH public keys to be stored with cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | time_zone block. |

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.cpuCoreCount"></a>

```go
CpuCoreCount *f64
```

- *Type:* *f64

Number of enabled CPU cores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#cpu_core_count GoogleOracleDatabaseCloudVmCluster#cpu_core_count}

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.licenseType"></a>

```go
LicenseType *string
```

- *Type:* *string

License type of VM Cluster.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#license_type GoogleOracleDatabaseCloudVmCluster#license_type}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#cluster_name GoogleOracleDatabaseCloudVmCluster#cluster_name}

---

##### `DataStorageSizeTb`<sup>Optional</sup> <a name="DataStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dataStorageSizeTb"></a>

```go
DataStorageSizeTb *f64
```

- *Type:* *f64

The data disk group size to be allocated in TBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#data_storage_size_tb GoogleOracleDatabaseCloudVmCluster#data_storage_size_tb}

---

##### `DbNodeStorageSizeGb`<sup>Optional</sup> <a name="DbNodeStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dbNodeStorageSizeGb"></a>

```go
DbNodeStorageSizeGb *f64
```

- *Type:* *f64

Local storage per VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#db_node_storage_size_gb GoogleOracleDatabaseCloudVmCluster#db_node_storage_size_gb}

---

##### `DbServerOcids`<sup>Optional</sup> <a name="DbServerOcids" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dbServerOcids"></a>

```go
DbServerOcids *[]*string
```

- *Type:* *[]*string

OCID of database servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#db_server_ocids GoogleOracleDatabaseCloudVmCluster#db_server_ocids}

---

##### `DiagnosticsDataCollectionOptions`<sup>Optional</sup> <a name="DiagnosticsDataCollectionOptions" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.diagnosticsDataCollectionOptions"></a>

```go
DiagnosticsDataCollectionOptions GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

diagnostics_data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#diagnostics_data_collection_options GoogleOracleDatabaseCloudVmCluster#diagnostics_data_collection_options}

---

##### `DiskRedundancy`<sup>Optional</sup> <a name="DiskRedundancy" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.diskRedundancy"></a>

```go
DiskRedundancy *string
```

- *Type:* *string

The type of redundancy.   Possible values:  DISK_REDUNDANCY_UNSPECIFIED HIGH NORMAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#disk_redundancy GoogleOracleDatabaseCloudVmCluster#disk_redundancy}

---

##### `GiVersion`<sup>Optional</sup> <a name="GiVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.giVersion"></a>

```go
GiVersion *string
```

- *Type:* *string

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#gi_version GoogleOracleDatabaseCloudVmCluster#gi_version}

---

##### `HostnamePrefix`<sup>Optional</sup> <a name="HostnamePrefix" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.hostnamePrefix"></a>

```go
HostnamePrefix *string
```

- *Type:* *string

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#hostname_prefix GoogleOracleDatabaseCloudVmCluster#hostname_prefix}

---

##### `LocalBackupEnabled`<sup>Optional</sup> <a name="LocalBackupEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.localBackupEnabled"></a>

```go
LocalBackupEnabled interface{}
```

- *Type:* interface{}

Use local backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#local_backup_enabled GoogleOracleDatabaseCloudVmCluster#local_backup_enabled}

---

##### `MemorySizeGb`<sup>Optional</sup> <a name="MemorySizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.memorySizeGb"></a>

```go
MemorySizeGb *f64
```

- *Type:* *f64

Memory allocated in GBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#memory_size_gb GoogleOracleDatabaseCloudVmCluster#memory_size_gb}

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.nodeCount"></a>

```go
NodeCount *f64
```

- *Type:* *f64

Number of database servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#node_count GoogleOracleDatabaseCloudVmCluster#node_count}

---

##### `OcpuCount`<sup>Optional</sup> <a name="OcpuCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.ocpuCount"></a>

```go
OcpuCount *f64
```

- *Type:* *f64

OCPU count per VM. Minimum is 0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#ocpu_count GoogleOracleDatabaseCloudVmCluster#ocpu_count}

---

##### `SparseDiskgroupEnabled`<sup>Optional</sup> <a name="SparseDiskgroupEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.sparseDiskgroupEnabled"></a>

```go
SparseDiskgroupEnabled interface{}
```

- *Type:* interface{}

Use exadata sparse snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#sparse_diskgroup_enabled GoogleOracleDatabaseCloudVmCluster#sparse_diskgroup_enabled}

---

##### `SshPublicKeys`<sup>Optional</sup> <a name="SshPublicKeys" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.sshPublicKeys"></a>

```go
SshPublicKeys *[]*string
```

- *Type:* *[]*string

SSH public keys to be stored with cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#ssh_public_keys GoogleOracleDatabaseCloudVmCluster#ssh_public_keys}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.timeZone"></a>

```go
TimeZone GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#time_zone GoogleOracleDatabaseCloudVmCluster#time_zone}

---

### GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions <a name="GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudvmcluster"

&googleoracledatabasecloudvmcluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions {
	DiagnosticsEventsEnabled: interface{},
	HealthMonitoringEnabled: interface{},
	IncidentLogsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.diagnosticsEventsEnabled">DiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | Indicates whether diagnostic collection is enabled for the VM cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.healthMonitoringEnabled">HealthMonitoringEnabled</a></code> | <code>interface{}</code> | Indicates whether health monitoring is enabled for the VM cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.incidentLogsEnabled">IncidentLogsEnabled</a></code> | <code>interface{}</code> | Indicates whether incident logs and trace collection are enabled for the VM cluster. |

---

##### `DiagnosticsEventsEnabled`<sup>Optional</sup> <a name="DiagnosticsEventsEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.diagnosticsEventsEnabled"></a>

```go
DiagnosticsEventsEnabled interface{}
```

- *Type:* interface{}

Indicates whether diagnostic collection is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#diagnostics_events_enabled GoogleOracleDatabaseCloudVmCluster#diagnostics_events_enabled}

---

##### `HealthMonitoringEnabled`<sup>Optional</sup> <a name="HealthMonitoringEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.healthMonitoringEnabled"></a>

```go
HealthMonitoringEnabled interface{}
```

- *Type:* interface{}

Indicates whether health monitoring is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#health_monitoring_enabled GoogleOracleDatabaseCloudVmCluster#health_monitoring_enabled}

---

##### `IncidentLogsEnabled`<sup>Optional</sup> <a name="IncidentLogsEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.incidentLogsEnabled"></a>

```go
IncidentLogsEnabled interface{}
```

- *Type:* interface{}

Indicates whether incident logs and trace collection are enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#incident_logs_enabled GoogleOracleDatabaseCloudVmCluster#incident_logs_enabled}

---

### GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone <a name="GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudvmcluster"

&googleoracledatabasecloudvmcluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone.property.id">Id</a></code> | <code>*string</code> | IANA Time Zone Database time zone, e.g. "America/New_York". |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone.property.id"></a>

```go
Id *string
```

- *Type:* *string

IANA Time Zone Database time zone, e.g. "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#id GoogleOracleDatabaseCloudVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GoogleOracleDatabaseCloudVmClusterTimeouts <a name="GoogleOracleDatabaseCloudVmClusterTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudvmcluster"

&googleoracledatabasecloudvmcluster.GoogleOracleDatabaseCloudVmClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#create GoogleOracleDatabaseCloudVmCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#delete GoogleOracleDatabaseCloudVmCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#update GoogleOracleDatabaseCloudVmCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#create GoogleOracleDatabaseCloudVmCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#delete GoogleOracleDatabaseCloudVmCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_oracle_database_cloud_vm_cluster#update GoogleOracleDatabaseCloudVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference <a name="GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudvmcluster"

googleoracledatabasecloudvmcluster.NewGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetDiagnosticsEventsEnabled">ResetDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetHealthMonitoringEnabled">ResetHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetIncidentLogsEnabled">ResetIncidentLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiagnosticsEventsEnabled` <a name="ResetDiagnosticsEventsEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetDiagnosticsEventsEnabled"></a>

```go
func ResetDiagnosticsEventsEnabled()
```

##### `ResetHealthMonitoringEnabled` <a name="ResetHealthMonitoringEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetHealthMonitoringEnabled"></a>

```go
func ResetHealthMonitoringEnabled()
```

##### `ResetIncidentLogsEnabled` <a name="ResetIncidentLogsEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetIncidentLogsEnabled"></a>

```go
func ResetIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabledInput">DiagnosticsEventsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabledInput">HealthMonitoringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabledInput">IncidentLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled">DiagnosticsEventsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled">HealthMonitoringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled">IncidentLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="DiagnosticsEventsEnabledInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabledInput"></a>

```go
func DiagnosticsEventsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HealthMonitoringEnabledInput`<sup>Optional</sup> <a name="HealthMonitoringEnabledInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabledInput"></a>

```go
func HealthMonitoringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IncidentLogsEnabledInput`<sup>Optional</sup> <a name="IncidentLogsEnabledInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabledInput"></a>

```go
func IncidentLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DiagnosticsEventsEnabled`<sup>Required</sup> <a name="DiagnosticsEventsEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled"></a>

```go
func DiagnosticsEventsEnabled() interface{}
```

- *Type:* interface{}

---

##### `HealthMonitoringEnabled`<sup>Required</sup> <a name="HealthMonitoringEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled"></a>

```go
func HealthMonitoringEnabled() interface{}
```

- *Type:* interface{}

---

##### `IncidentLogsEnabled`<sup>Required</sup> <a name="IncidentLogsEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled"></a>

```go
func IncidentLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---


### GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference <a name="GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudvmcluster"

googleoracledatabasecloudvmcluster.NewGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions">PutDiagnosticsDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone">PutTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDataStorageSizeTb">ResetDataStorageSizeTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbNodeStorageSizeGb">ResetDbNodeStorageSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbServerOcids">ResetDbServerOcids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiagnosticsDataCollectionOptions">ResetDiagnosticsDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiskRedundancy">ResetDiskRedundancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetGiVersion">ResetGiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetHostnamePrefix">ResetHostnamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetLocalBackupEnabled">ResetLocalBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetMemorySizeGb">ResetMemorySizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetOcpuCount">ResetOcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetSparseDiskgroupEnabled">ResetSparseDiskgroupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetSshPublicKeys">ResetSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiagnosticsDataCollectionOptions` <a name="PutDiagnosticsDataCollectionOptions" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions"></a>

```go
func PutDiagnosticsDataCollectionOptions(value GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---

##### `PutTimeZone` <a name="PutTimeZone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone"></a>

```go
func PutTimeZone(value GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetDataStorageSizeTb` <a name="ResetDataStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDataStorageSizeTb"></a>

```go
func ResetDataStorageSizeTb()
```

##### `ResetDbNodeStorageSizeGb` <a name="ResetDbNodeStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbNodeStorageSizeGb"></a>

```go
func ResetDbNodeStorageSizeGb()
```

##### `ResetDbServerOcids` <a name="ResetDbServerOcids" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbServerOcids"></a>

```go
func ResetDbServerOcids()
```

##### `ResetDiagnosticsDataCollectionOptions` <a name="ResetDiagnosticsDataCollectionOptions" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiagnosticsDataCollectionOptions"></a>

```go
func ResetDiagnosticsDataCollectionOptions()
```

##### `ResetDiskRedundancy` <a name="ResetDiskRedundancy" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiskRedundancy"></a>

```go
func ResetDiskRedundancy()
```

##### `ResetGiVersion` <a name="ResetGiVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetGiVersion"></a>

```go
func ResetGiVersion()
```

##### `ResetHostnamePrefix` <a name="ResetHostnamePrefix" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetHostnamePrefix"></a>

```go
func ResetHostnamePrefix()
```

##### `ResetLocalBackupEnabled` <a name="ResetLocalBackupEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetLocalBackupEnabled"></a>

```go
func ResetLocalBackupEnabled()
```

##### `ResetMemorySizeGb` <a name="ResetMemorySizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetMemorySizeGb"></a>

```go
func ResetMemorySizeGb()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetNodeCount"></a>

```go
func ResetNodeCount()
```

##### `ResetOcpuCount` <a name="ResetOcpuCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetOcpuCount"></a>

```go
func ResetOcpuCount()
```

##### `ResetSparseDiskgroupEnabled` <a name="ResetSparseDiskgroupEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetSparseDiskgroupEnabled"></a>

```go
func ResetSparseDiskgroupEnabled()
```

##### `ResetSshPublicKeys` <a name="ResetSshPublicKeys" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetSshPublicKeys"></a>

```go
func ResetSshPublicKeys()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptions">DiagnosticsDataCollectionOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dnsListenerIp">DnsListenerIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDns">ScanDns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDnsRecordId">ScanDnsRecordId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanIpIds">ScanIpIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcpSsl">ScanListenerPortTcpSsl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.storageSizeGb">StorageSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.systemVersion">SystemVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTbInput">DataStorageSizeTbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGbInput">DbNodeStorageSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcidsInput">DbServerOcidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptionsInput">DiagnosticsDataCollectionOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancyInput">DiskRedundancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersionInput">GiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefixInput">HostnamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabledInput">LocalBackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGbInput">MemorySizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCountInput">OcpuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabledInput">SparseDiskgroupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTb">DataStorageSizeTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGb">DbNodeStorageSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcids">DbServerOcids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancy">DiskRedundancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersion">GiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefix">HostnamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabled">LocalBackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGb">MemorySizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCount">OcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabled">SparseDiskgroupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DiagnosticsDataCollectionOptions`<sup>Required</sup> <a name="DiagnosticsDataCollectionOptions" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptions"></a>

```go
func DiagnosticsDataCollectionOptions() GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference</a>

---

##### `DnsListenerIp`<sup>Required</sup> <a name="DnsListenerIp" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dnsListenerIp"></a>

```go
func DnsListenerIp() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `ScanDns`<sup>Required</sup> <a name="ScanDns" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDns"></a>

```go
func ScanDns() *string
```

- *Type:* *string

---

##### `ScanDnsRecordId`<sup>Required</sup> <a name="ScanDnsRecordId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDnsRecordId"></a>

```go
func ScanDnsRecordId() *string
```

- *Type:* *string

---

##### `ScanIpIds`<sup>Required</sup> <a name="ScanIpIds" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanIpIds"></a>

```go
func ScanIpIds() *[]*string
```

- *Type:* *[]*string

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcp"></a>

```go
func ScanListenerPortTcp() *f64
```

- *Type:* *f64

---

##### `ScanListenerPortTcpSsl`<sup>Required</sup> <a name="ScanListenerPortTcpSsl" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcpSsl"></a>

```go
func ScanListenerPortTcpSsl() *f64
```

- *Type:* *f64

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageSizeGb`<sup>Required</sup> <a name="StorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.storageSizeGb"></a>

```go
func StorageSizeGb() *f64
```

- *Type:* *f64

---

##### `SystemVersion`<sup>Required</sup> <a name="SystemVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.systemVersion"></a>

```go
func SystemVersion() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZone"></a>

```go
func TimeZone() GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCountInput"></a>

```go
func CpuCoreCountInput() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeTbInput`<sup>Optional</sup> <a name="DataStorageSizeTbInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTbInput"></a>

```go
func DataStorageSizeTbInput() *f64
```

- *Type:* *f64

---

##### `DbNodeStorageSizeGbInput`<sup>Optional</sup> <a name="DbNodeStorageSizeGbInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGbInput"></a>

```go
func DbNodeStorageSizeGbInput() *f64
```

- *Type:* *f64

---

##### `DbServerOcidsInput`<sup>Optional</sup> <a name="DbServerOcidsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcidsInput"></a>

```go
func DbServerOcidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DiagnosticsDataCollectionOptionsInput`<sup>Optional</sup> <a name="DiagnosticsDataCollectionOptionsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptionsInput"></a>

```go
func DiagnosticsDataCollectionOptionsInput() GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---

##### `DiskRedundancyInput`<sup>Optional</sup> <a name="DiskRedundancyInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancyInput"></a>

```go
func DiskRedundancyInput() *string
```

- *Type:* *string

---

##### `GiVersionInput`<sup>Optional</sup> <a name="GiVersionInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersionInput"></a>

```go
func GiVersionInput() *string
```

- *Type:* *string

---

##### `HostnamePrefixInput`<sup>Optional</sup> <a name="HostnamePrefixInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefixInput"></a>

```go
func HostnamePrefixInput() *string
```

- *Type:* *string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseTypeInput"></a>

```go
func LicenseTypeInput() *string
```

- *Type:* *string

---

##### `LocalBackupEnabledInput`<sup>Optional</sup> <a name="LocalBackupEnabledInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabledInput"></a>

```go
func LocalBackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MemorySizeGbInput`<sup>Optional</sup> <a name="MemorySizeGbInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGbInput"></a>

```go
func MemorySizeGbInput() *f64
```

- *Type:* *f64

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCountInput"></a>

```go
func NodeCountInput() *f64
```

- *Type:* *f64

---

##### `OcpuCountInput`<sup>Optional</sup> <a name="OcpuCountInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCountInput"></a>

```go
func OcpuCountInput() *f64
```

- *Type:* *f64

---

##### `SparseDiskgroupEnabledInput`<sup>Optional</sup> <a name="SparseDiskgroupEnabledInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabledInput"></a>

```go
func SparseDiskgroupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeysInput"></a>

```go
func SshPublicKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeTb`<sup>Required</sup> <a name="DataStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTb"></a>

```go
func DataStorageSizeTb() *f64
```

- *Type:* *f64

---

##### `DbNodeStorageSizeGb`<sup>Required</sup> <a name="DbNodeStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```go
func DbNodeStorageSizeGb() *f64
```

- *Type:* *f64

---

##### `DbServerOcids`<sup>Required</sup> <a name="DbServerOcids" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcids"></a>

```go
func DbServerOcids() *[]*string
```

- *Type:* *[]*string

---

##### `DiskRedundancy`<sup>Required</sup> <a name="DiskRedundancy" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancy"></a>

```go
func DiskRedundancy() *string
```

- *Type:* *string

---

##### `GiVersion`<sup>Required</sup> <a name="GiVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersion"></a>

```go
func GiVersion() *string
```

- *Type:* *string

---

##### `HostnamePrefix`<sup>Required</sup> <a name="HostnamePrefix" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefix"></a>

```go
func HostnamePrefix() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `LocalBackupEnabled`<sup>Required</sup> <a name="LocalBackupEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabled"></a>

```go
func LocalBackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `MemorySizeGb`<sup>Required</sup> <a name="MemorySizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGb"></a>

```go
func MemorySizeGb() *f64
```

- *Type:* *f64

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCount"></a>

```go
func OcpuCount() *f64
```

- *Type:* *f64

---

##### `SparseDiskgroupEnabled`<sup>Required</sup> <a name="SparseDiskgroupEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabled"></a>

```go
func SparseDiskgroupEnabled() interface{}
```

- *Type:* interface{}

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeys"></a>

```go
func SshPublicKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseCloudVmClusterProperties
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a>

---


### GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference <a name="GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudvmcluster"

googleoracledatabasecloudvmcluster.NewGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---


### GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference <a name="GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googleoracledatabasecloudvmcluster"

googleoracledatabasecloudvmcluster.NewGoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



