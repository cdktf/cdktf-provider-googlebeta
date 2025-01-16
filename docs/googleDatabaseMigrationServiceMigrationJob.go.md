# `googleDatabaseMigrationServiceMigrationJob` Submodule <a name="`googleDatabaseMigrationServiceMigrationJob` Submodule" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDatabaseMigrationServiceMigrationJob <a name="GoogleDatabaseMigrationServiceMigrationJob" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job google_database_migration_service_migration_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

googledatabasemigrationservicemigrationjob.NewGoogleDatabaseMigrationServiceMigrationJob(scope Construct, id *string, config GoogleDatabaseMigrationServiceMigrationJobConfig) GoogleDatabaseMigrationServiceMigrationJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig">GoogleDatabaseMigrationServiceMigrationJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig">GoogleDatabaseMigrationServiceMigrationJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putDumpFlags">PutDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putPerformanceConfig">PutPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putReverseSshConnectivity">PutReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putStaticIpConnectivity">PutStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity">PutVpcPeeringConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpFlags">ResetDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpPath">ResetDumpPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpType">ResetDumpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetPerformanceConfig">ResetPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetReverseSshConnectivity">ResetReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetStaticIpConnectivity">ResetStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetVpcPeeringConnectivity">ResetVpcPeeringConnectivity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDumpFlags` <a name="PutDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putDumpFlags"></a>

```go
func PutDumpFlags(value GoogleDatabaseMigrationServiceMigrationJobDumpFlags)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putDumpFlags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a>

---

##### `PutPerformanceConfig` <a name="PutPerformanceConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putPerformanceConfig"></a>

```go
func PutPerformanceConfig(value GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---

##### `PutReverseSshConnectivity` <a name="PutReverseSshConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putReverseSshConnectivity"></a>

```go
func PutReverseSshConnectivity(value GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putReverseSshConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---

##### `PutStaticIpConnectivity` <a name="PutStaticIpConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putStaticIpConnectivity"></a>

```go
func PutStaticIpConnectivity(value GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putStaticIpConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDatabaseMigrationServiceMigrationJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a>

---

##### `PutVpcPeeringConnectivity` <a name="PutVpcPeeringConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity"></a>

```go
func PutVpcPeeringConnectivity(value GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.putVpcPeeringConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDumpFlags` <a name="ResetDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpFlags"></a>

```go
func ResetDumpFlags()
```

##### `ResetDumpPath` <a name="ResetDumpPath" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpPath"></a>

```go
func ResetDumpPath()
```

##### `ResetDumpType` <a name="ResetDumpType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetDumpType"></a>

```go
func ResetDumpType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetPerformanceConfig` <a name="ResetPerformanceConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetPerformanceConfig"></a>

```go
func ResetPerformanceConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReverseSshConnectivity` <a name="ResetReverseSshConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetReverseSshConnectivity"></a>

```go
func ResetReverseSshConnectivity()
```

##### `ResetStaticIpConnectivity` <a name="ResetStaticIpConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetStaticIpConnectivity"></a>

```go
func ResetStaticIpConnectivity()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcPeeringConnectivity` <a name="ResetVpcPeeringConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.resetVpcPeeringConnectivity"></a>

```go
func ResetVpcPeeringConnectivity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDatabaseMigrationServiceMigrationJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

googledatabasemigrationservicemigrationjob.GoogleDatabaseMigrationServiceMigrationJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

googledatabasemigrationservicemigrationjob.GoogleDatabaseMigrationServiceMigrationJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

googledatabasemigrationservicemigrationjob.GoogleDatabaseMigrationServiceMigrationJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

googledatabasemigrationservicemigrationjob.GoogleDatabaseMigrationServiceMigrationJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleDatabaseMigrationServiceMigrationJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDatabaseMigrationServiceMigrationJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDatabaseMigrationServiceMigrationJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDatabaseMigrationServiceMigrationJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpFlags">DumpFlags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.error">Error</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList">GoogleDatabaseMigrationServiceMigrationJobErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.performanceConfig">PerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.phase">Phase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.reverseSshConnectivity">ReverseSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.staticIpConnectivity">StaticIpConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference">GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivity">VpcPeeringConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpFlagsInput">DumpFlagsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpPathInput">DumpPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpTypeInput">DumpTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.migrationJobIdInput">MigrationJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.performanceConfigInput">PerformanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.reverseSshConnectivityInput">ReverseSshConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.staticIpConnectivityInput">StaticIpConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivityInput">VpcPeeringConnectivityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpPath">DumpPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpType">DumpType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.migrationJobId">MigrationJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DumpFlags`<sup>Required</sup> <a name="DumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpFlags"></a>

```go
func DumpFlags() GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.error"></a>

```go
func Error() GoogleDatabaseMigrationServiceMigrationJobErrorList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList">GoogleDatabaseMigrationServiceMigrationJobErrorList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PerformanceConfig`<sup>Required</sup> <a name="PerformanceConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.performanceConfig"></a>

```go
func PerformanceConfig() GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference</a>

---

##### `Phase`<sup>Required</sup> <a name="Phase" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.phase"></a>

```go
func Phase() *string
```

- *Type:* *string

---

##### `ReverseSshConnectivity`<sup>Required</sup> <a name="ReverseSshConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.reverseSshConnectivity"></a>

```go
func ReverseSshConnectivity() GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StaticIpConnectivity`<sup>Required</sup> <a name="StaticIpConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.staticIpConnectivity"></a>

```go
func StaticIpConnectivity() GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.timeouts"></a>

```go
func Timeouts() GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference">GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference</a>

---

##### `VpcPeeringConnectivity`<sup>Required</sup> <a name="VpcPeeringConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivity"></a>

```go
func VpcPeeringConnectivity() GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DumpFlagsInput`<sup>Optional</sup> <a name="DumpFlagsInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpFlagsInput"></a>

```go
func DumpFlagsInput() GoogleDatabaseMigrationServiceMigrationJobDumpFlags
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a>

---

##### `DumpPathInput`<sup>Optional</sup> <a name="DumpPathInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpPathInput"></a>

```go
func DumpPathInput() *string
```

- *Type:* *string

---

##### `DumpTypeInput`<sup>Optional</sup> <a name="DumpTypeInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpTypeInput"></a>

```go
func DumpTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MigrationJobIdInput`<sup>Optional</sup> <a name="MigrationJobIdInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.migrationJobIdInput"></a>

```go
func MigrationJobIdInput() *string
```

- *Type:* *string

---

##### `PerformanceConfigInput`<sup>Optional</sup> <a name="PerformanceConfigInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.performanceConfigInput"></a>

```go
func PerformanceConfigInput() GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReverseSshConnectivityInput`<sup>Optional</sup> <a name="ReverseSshConnectivityInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.reverseSshConnectivityInput"></a>

```go
func ReverseSshConnectivityInput() GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `StaticIpConnectivityInput`<sup>Optional</sup> <a name="StaticIpConnectivityInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.staticIpConnectivityInput"></a>

```go
func StaticIpConnectivityInput() GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VpcPeeringConnectivityInput`<sup>Optional</sup> <a name="VpcPeeringConnectivityInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.vpcPeeringConnectivityInput"></a>

```go
func VpcPeeringConnectivityInput() GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DumpPath`<sup>Required</sup> <a name="DumpPath" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpPath"></a>

```go
func DumpPath() *string
```

- *Type:* *string

---

##### `DumpType`<sup>Required</sup> <a name="DumpType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.dumpType"></a>

```go
func DumpType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MigrationJobId`<sup>Required</sup> <a name="MigrationJobId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.migrationJobId"></a>

```go
func MigrationJobId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDatabaseMigrationServiceMigrationJobConfig <a name="GoogleDatabaseMigrationServiceMigrationJobConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

&googledatabasemigrationservicemigrationjob.GoogleDatabaseMigrationServiceMigrationJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Destination: *string,
	MigrationJobId: *string,
	Source: *string,
	Type: *string,
	DisplayName: *string,
	DumpFlags: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags,
	DumpPath: *string,
	DumpType: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	PerformanceConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig,
	Project: *string,
	ReverseSshConnectivity: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity,
	StaticIpConnectivity: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts,
	VpcPeeringConnectivity: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.destination">Destination</a></code> | <code>*string</code> | The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.migrationJobId">MigrationJobId</a></code> | <code>*string</code> | The ID of the migration job. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.source">Source</a></code> | <code>*string</code> | The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.type">Type</a></code> | <code>*string</code> | The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The migration job display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpFlags">DumpFlags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a></code> | dump_flags block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpPath">DumpPath</a></code> | <code>*string</code> | The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpType">DumpType</a></code> | <code>*string</code> | The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. Possible values: ["LOGICAL", "PHYSICAL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#id GoogleDatabaseMigrationServiceMigrationJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.location">Location</a></code> | <code>*string</code> | The location where the migration job should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.performanceConfig">PerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#project GoogleDatabaseMigrationServiceMigrationJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.reverseSshConnectivity">ReverseSshConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | reverse_ssh_connectivity block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.staticIpConnectivity">StaticIpConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | static_ip_connectivity block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.vpcPeeringConnectivity">VpcPeeringConnectivity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | vpc_peering_connectivity block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

The name of the destination connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{destinationConnectionProfile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#destination GoogleDatabaseMigrationServiceMigrationJob#destination}

---

##### `MigrationJobId`<sup>Required</sup> <a name="MigrationJobId" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.migrationJobId"></a>

```go
MigrationJobId *string
```

- *Type:* *string

The ID of the migration job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#migration_job_id GoogleDatabaseMigrationServiceMigrationJob#migration_job_id}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

The name of the source connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{sourceConnectionProfile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#source GoogleDatabaseMigrationServiceMigrationJob#source}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the migration job. Possible values: ["ONE_TIME", "CONTINUOUS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#type GoogleDatabaseMigrationServiceMigrationJob#type}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The migration job display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#display_name GoogleDatabaseMigrationServiceMigrationJob#display_name}

---

##### `DumpFlags`<sup>Optional</sup> <a name="DumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpFlags"></a>

```go
DumpFlags GoogleDatabaseMigrationServiceMigrationJobDumpFlags
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a>

dump_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#dump_flags GoogleDatabaseMigrationServiceMigrationJob#dump_flags}

---

##### `DumpPath`<sup>Optional</sup> <a name="DumpPath" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpPath"></a>

```go
DumpPath *string
```

- *Type:* *string

The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]).

This field and the "dump_flags" field are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#dump_path GoogleDatabaseMigrationServiceMigrationJob#dump_path}

---

##### `DumpType`<sup>Optional</sup> <a name="DumpType" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.dumpType"></a>

```go
DumpType *string
```

- *Type:* *string

The type of the data dump. Supported for MySQL to CloudSQL for MySQL migrations only. Possible values: ["LOGICAL", "PHYSICAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#dump_type GoogleDatabaseMigrationServiceMigrationJob#dump_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#id GoogleDatabaseMigrationServiceMigrationJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#labels GoogleDatabaseMigrationServiceMigrationJob#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where the migration job should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#location GoogleDatabaseMigrationServiceMigrationJob#location}

---

##### `PerformanceConfig`<sup>Optional</sup> <a name="PerformanceConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.performanceConfig"></a>

```go
PerformanceConfig GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a>

performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#performance_config GoogleDatabaseMigrationServiceMigrationJob#performance_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#project GoogleDatabaseMigrationServiceMigrationJob#project}.

---

##### `ReverseSshConnectivity`<sup>Optional</sup> <a name="ReverseSshConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.reverseSshConnectivity"></a>

```go
ReverseSshConnectivity GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

reverse_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#reverse_ssh_connectivity GoogleDatabaseMigrationServiceMigrationJob#reverse_ssh_connectivity}

---

##### `StaticIpConnectivity`<sup>Optional</sup> <a name="StaticIpConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.staticIpConnectivity"></a>

```go
StaticIpConnectivity GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

static_ip_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#static_ip_connectivity GoogleDatabaseMigrationServiceMigrationJob#static_ip_connectivity}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.timeouts"></a>

```go
Timeouts GoogleDatabaseMigrationServiceMigrationJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts">GoogleDatabaseMigrationServiceMigrationJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#timeouts GoogleDatabaseMigrationServiceMigrationJob#timeouts}

---

##### `VpcPeeringConnectivity`<sup>Optional</sup> <a name="VpcPeeringConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobConfig.property.vpcPeeringConnectivity"></a>

```go
VpcPeeringConnectivity GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

vpc_peering_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#vpc_peering_connectivity GoogleDatabaseMigrationServiceMigrationJob#vpc_peering_connectivity}

---

### GoogleDatabaseMigrationServiceMigrationJobDumpFlags <a name="GoogleDatabaseMigrationServiceMigrationJobDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

&googledatabasemigrationservicemigrationjob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags {
	DumpFlags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags.property.dumpFlags">DumpFlags</a></code> | <code>interface{}</code> | dump_flags block. |

---

##### `DumpFlags`<sup>Optional</sup> <a name="DumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags.property.dumpFlags"></a>

```go
DumpFlags interface{}
```

- *Type:* interface{}

dump_flags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#dump_flags GoogleDatabaseMigrationServiceMigrationJob#dump_flags}

---

### GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags <a name="GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

&googledatabasemigrationservicemigrationjob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.name">Name</a></code> | <code>*string</code> | The name of the flag. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.value">Value</a></code> | <code>*string</code> | The vale of the flag. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#name GoogleDatabaseMigrationServiceMigrationJob#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The vale of the flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#value GoogleDatabaseMigrationServiceMigrationJob#value}

---

### GoogleDatabaseMigrationServiceMigrationJobError <a name="GoogleDatabaseMigrationServiceMigrationJobError" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobError.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

&googledatabasemigrationservicemigrationjob.GoogleDatabaseMigrationServiceMigrationJobError {

}
```


### GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig <a name="GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

&googledatabasemigrationservicemigrationjob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig {
	DumpParallelLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig.property.dumpParallelLevel">DumpParallelLevel</a></code> | <code>*string</code> | Initial dump parallelism level. Possible values: ["MIN", "OPTIMAL", "MAX"]. |

---

##### `DumpParallelLevel`<sup>Optional</sup> <a name="DumpParallelLevel" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig.property.dumpParallelLevel"></a>

```go
DumpParallelLevel *string
```

- *Type:* *string

Initial dump parallelism level. Possible values: ["MIN", "OPTIMAL", "MAX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#dump_parallel_level GoogleDatabaseMigrationServiceMigrationJob#dump_parallel_level}

---

### GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity <a name="GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

&googledatabasemigrationservicemigrationjob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity {
	Vm: *string,
	VmIp: *string,
	VmPort: *f64,
	Vpc: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vm">Vm</a></code> | <code>*string</code> | The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmIp">VmIp</a></code> | <code>*string</code> | The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmPort">VmPort</a></code> | <code>*f64</code> | The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vpc">Vpc</a></code> | <code>*string</code> | The name of the VPC to peer with the Cloud SQL private network. |

---

##### `Vm`<sup>Optional</sup> <a name="Vm" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vm"></a>

```go
Vm *string
```

- *Type:* *string

The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#vm GoogleDatabaseMigrationServiceMigrationJob#vm}

---

##### `VmIp`<sup>Optional</sup> <a name="VmIp" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmIp"></a>

```go
VmIp *string
```

- *Type:* *string

The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#vm_ip GoogleDatabaseMigrationServiceMigrationJob#vm_ip}

---

##### `VmPort`<sup>Optional</sup> <a name="VmPort" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vmPort"></a>

```go
VmPort *f64
```

- *Type:* *f64

The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#vm_port GoogleDatabaseMigrationServiceMigrationJob#vm_port}

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity.property.vpc"></a>

```go
Vpc *string
```

- *Type:* *string

The name of the VPC to peer with the Cloud SQL private network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#vpc GoogleDatabaseMigrationServiceMigrationJob#vpc}

---

### GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity <a name="GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

&googledatabasemigrationservicemigrationjob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity {

}
```


### GoogleDatabaseMigrationServiceMigrationJobTimeouts <a name="GoogleDatabaseMigrationServiceMigrationJobTimeouts" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

&googledatabasemigrationservicemigrationjob.GoogleDatabaseMigrationServiceMigrationJobTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#create GoogleDatabaseMigrationServiceMigrationJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#delete GoogleDatabaseMigrationServiceMigrationJob#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#update GoogleDatabaseMigrationServiceMigrationJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#create GoogleDatabaseMigrationServiceMigrationJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#delete GoogleDatabaseMigrationServiceMigrationJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#update GoogleDatabaseMigrationServiceMigrationJob#update}.

---

### GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity <a name="GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

&googledatabasemigrationservicemigrationjob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity {
	Vpc: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.property.vpc">Vpc</a></code> | <code>*string</code> | The name of the VPC network to peer with the Cloud SQL private network. |

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity.property.vpc"></a>

```go
Vpc *string
```

- *Type:* *string

The name of the VPC network to peer with the Cloud SQL private network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_database_migration_service_migration_job#vpc GoogleDatabaseMigrationServiceMigrationJob#vpc}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList <a name="GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

googledatabasemigrationservicemigrationjob.NewGoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get"></a>

```go
func Get(index *f64) GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

googledatabasemigrationservicemigrationjob.NewGoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

googledatabasemigrationservicemigrationjob.NewGoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags">PutDumpFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resetDumpFlags">ResetDumpFlags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDumpFlags` <a name="PutDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags"></a>

```go
func PutDumpFlags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.putDumpFlags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDumpFlags` <a name="ResetDumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.resetDumpFlags"></a>

```go
func ResetDumpFlags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlags">DumpFlags</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlagsInput">DumpFlagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DumpFlags`<sup>Required</sup> <a name="DumpFlags" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlags"></a>

```go
func DumpFlags() GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList">GoogleDatabaseMigrationServiceMigrationJobDumpFlagsDumpFlagsList</a>

---

##### `DumpFlagsInput`<sup>Optional</sup> <a name="DumpFlagsInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.dumpFlagsInput"></a>

```go
func DumpFlagsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlagsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDatabaseMigrationServiceMigrationJobDumpFlags
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobDumpFlags">GoogleDatabaseMigrationServiceMigrationJobDumpFlags</a>

---


### GoogleDatabaseMigrationServiceMigrationJobErrorList <a name="GoogleDatabaseMigrationServiceMigrationJobErrorList" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

googledatabasemigrationservicemigrationjob.NewGoogleDatabaseMigrationServiceMigrationJobErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDatabaseMigrationServiceMigrationJobErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.get"></a>

```go
func Get(index *f64) GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

googledatabasemigrationservicemigrationjob.NewGoogleDatabaseMigrationServiceMigrationJobErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.details">Details</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobError">GoogleDatabaseMigrationServiceMigrationJobError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.details"></a>

```go
func Details() StringMapList
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDatabaseMigrationServiceMigrationJobError
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobError">GoogleDatabaseMigrationServiceMigrationJobError</a>

---


### GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

googledatabasemigrationservicemigrationjob.NewGoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resetDumpParallelLevel">ResetDumpParallelLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDumpParallelLevel` <a name="ResetDumpParallelLevel" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.resetDumpParallelLevel"></a>

```go
func ResetDumpParallelLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevelInput">DumpParallelLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevel">DumpParallelLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DumpParallelLevelInput`<sup>Optional</sup> <a name="DumpParallelLevelInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevelInput"></a>

```go
func DumpParallelLevelInput() *string
```

- *Type:* *string

---

##### `DumpParallelLevel`<sup>Required</sup> <a name="DumpParallelLevel" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.dumpParallelLevel"></a>

```go
func DumpParallelLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig">GoogleDatabaseMigrationServiceMigrationJobPerformanceConfig</a>

---


### GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

googledatabasemigrationservicemigrationjob.NewGoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVm">ResetVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmIp">ResetVmIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmPort">ResetVmPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVm` <a name="ResetVm" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVm"></a>

```go
func ResetVm()
```

##### `ResetVmIp` <a name="ResetVmIp" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmIp"></a>

```go
func ResetVmIp()
```

##### `ResetVmPort` <a name="ResetVmPort" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVmPort"></a>

```go
func ResetVmPort()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.resetVpc"></a>

```go
func ResetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmInput">VmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIpInput">VmIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPortInput">VmPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpcInput">VpcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vm">Vm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIp">VmIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPort">VmPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpc">Vpc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VmInput`<sup>Optional</sup> <a name="VmInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmInput"></a>

```go
func VmInput() *string
```

- *Type:* *string

---

##### `VmIpInput`<sup>Optional</sup> <a name="VmIpInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIpInput"></a>

```go
func VmIpInput() *string
```

- *Type:* *string

---

##### `VmPortInput`<sup>Optional</sup> <a name="VmPortInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPortInput"></a>

```go
func VmPortInput() *f64
```

- *Type:* *f64

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpcInput"></a>

```go
func VpcInput() *string
```

- *Type:* *string

---

##### `Vm`<sup>Required</sup> <a name="Vm" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vm"></a>

```go
func Vm() *string
```

- *Type:* *string

---

##### `VmIp`<sup>Required</sup> <a name="VmIp" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmIp"></a>

```go
func VmIp() *string
```

- *Type:* *string

---

##### `VmPort`<sup>Required</sup> <a name="VmPort" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vmPort"></a>

```go
func VmPort() *f64
```

- *Type:* *f64

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.vpc"></a>

```go
func Vpc() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivityOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity">GoogleDatabaseMigrationServiceMigrationJobReverseSshConnectivity</a>

---


### GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

googledatabasemigrationservicemigrationjob.NewGoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivityOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity">GoogleDatabaseMigrationServiceMigrationJobStaticIpConnectivity</a>

---


### GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

googledatabasemigrationservicemigrationjob.NewGoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference <a name="GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googledatabasemigrationservicemigrationjob"

googledatabasemigrationservicemigrationjob.NewGoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpc` <a name="ResetVpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.resetVpc"></a>

```go
func ResetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpcInput">VpcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpc">Vpc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpcInput"></a>

```go
func VpcInput() *string
```

- *Type:* *string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.vpc"></a>

```go
func Vpc() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivityOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDatabaseMigrationServiceMigrationJob.GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity">GoogleDatabaseMigrationServiceMigrationJobVpcPeeringConnectivity</a>

---



