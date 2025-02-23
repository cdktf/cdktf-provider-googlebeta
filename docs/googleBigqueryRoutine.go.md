# `googleBigqueryRoutine` Submodule <a name="`googleBigqueryRoutine` Submodule" id="@cdktf/provider-google-beta.googleBigqueryRoutine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryRoutine <a name="GoogleBigqueryRoutine" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine google_bigquery_routine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryroutine"

googlebigqueryroutine.NewGoogleBigqueryRoutine(scope Construct, id *string, config GoogleBigqueryRoutineConfig) GoogleBigqueryRoutine
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig">GoogleBigqueryRoutineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig">GoogleBigqueryRoutineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putArguments">PutArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putRemoteFunctionOptions">PutRemoteFunctionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putSparkOptions">PutSparkOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDataGovernanceType">ResetDataGovernanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDeterminismLevel">ResetDeterminismLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetImportedLibraries">ResetImportedLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetLanguage">ResetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetRemoteFunctionOptions">ResetRemoteFunctionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetReturnTableType">ResetReturnTableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetReturnType">ResetReturnType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetSparkOptions">ResetSparkOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArguments` <a name="PutArguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putArguments"></a>

```go
func PutArguments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putArguments.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRemoteFunctionOptions` <a name="PutRemoteFunctionOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putRemoteFunctionOptions"></a>

```go
func PutRemoteFunctionOptions(value GoogleBigqueryRoutineRemoteFunctionOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putRemoteFunctionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a>

---

##### `PutSparkOptions` <a name="PutSparkOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putSparkOptions"></a>

```go
func PutSparkOptions(value GoogleBigqueryRoutineSparkOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putSparkOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBigqueryRoutineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a>

---

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetArguments"></a>

```go
func ResetArguments()
```

##### `ResetDataGovernanceType` <a name="ResetDataGovernanceType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDataGovernanceType"></a>

```go
func ResetDataGovernanceType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDeterminismLevel` <a name="ResetDeterminismLevel" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetDeterminismLevel"></a>

```go
func ResetDeterminismLevel()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetId"></a>

```go
func ResetId()
```

##### `ResetImportedLibraries` <a name="ResetImportedLibraries" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetImportedLibraries"></a>

```go
func ResetImportedLibraries()
```

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetLanguage"></a>

```go
func ResetLanguage()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRemoteFunctionOptions` <a name="ResetRemoteFunctionOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetRemoteFunctionOptions"></a>

```go
func ResetRemoteFunctionOptions()
```

##### `ResetReturnTableType` <a name="ResetReturnTableType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetReturnTableType"></a>

```go
func ResetReturnTableType()
```

##### `ResetReturnType` <a name="ResetReturnType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetReturnType"></a>

```go
func ResetReturnType()
```

##### `ResetSparkOptions` <a name="ResetSparkOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetSparkOptions"></a>

```go
func ResetSparkOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryRoutine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryroutine"

googlebigqueryroutine.GoogleBigqueryRoutine_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryroutine"

googlebigqueryroutine.GoogleBigqueryRoutine_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryroutine"

googlebigqueryroutine.GoogleBigqueryRoutine_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryroutine"

googlebigqueryroutine.GoogleBigqueryRoutine_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleBigqueryRoutine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBigqueryRoutine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBigqueryRoutine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryRoutine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.arguments">Arguments</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList">GoogleBigqueryRoutineArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.remoteFunctionOptions">RemoteFunctionOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference">GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.sparkOptions">SparkOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference">GoogleBigqueryRoutineSparkOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference">GoogleBigqueryRoutineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.argumentsInput">ArgumentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dataGovernanceTypeInput">DataGovernanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.definitionBodyInput">DefinitionBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.determinismLevelInput">DeterminismLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.importedLibrariesInput">ImportedLibrariesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.languageInput">LanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.remoteFunctionOptionsInput">RemoteFunctionOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTableTypeInput">ReturnTableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTypeInput">ReturnTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineIdInput">RoutineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineTypeInput">RoutineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.sparkOptionsInput">SparkOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dataGovernanceType">DataGovernanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.definitionBody">DefinitionBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.determinismLevel">DeterminismLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.importedLibraries">ImportedLibraries</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTableType">ReturnTableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnType">ReturnType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineId">RoutineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineType">RoutineType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.arguments"></a>

```go
func Arguments() GoogleBigqueryRoutineArgumentsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList">GoogleBigqueryRoutineArgumentsList</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *f64
```

- *Type:* *f64

---

##### `RemoteFunctionOptions`<sup>Required</sup> <a name="RemoteFunctionOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.remoteFunctionOptions"></a>

```go
func RemoteFunctionOptions() GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference">GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference</a>

---

##### `SparkOptions`<sup>Required</sup> <a name="SparkOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.sparkOptions"></a>

```go
func SparkOptions() GoogleBigqueryRoutineSparkOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference">GoogleBigqueryRoutineSparkOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.timeouts"></a>

```go
func Timeouts() GoogleBigqueryRoutineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference">GoogleBigqueryRoutineTimeoutsOutputReference</a>

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.argumentsInput"></a>

```go
func ArgumentsInput() interface{}
```

- *Type:* interface{}

---

##### `DataGovernanceTypeInput`<sup>Optional</sup> <a name="DataGovernanceTypeInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dataGovernanceTypeInput"></a>

```go
func DataGovernanceTypeInput() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `DefinitionBodyInput`<sup>Optional</sup> <a name="DefinitionBodyInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.definitionBodyInput"></a>

```go
func DefinitionBodyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DeterminismLevelInput`<sup>Optional</sup> <a name="DeterminismLevelInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.determinismLevelInput"></a>

```go
func DeterminismLevelInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportedLibrariesInput`<sup>Optional</sup> <a name="ImportedLibrariesInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.importedLibrariesInput"></a>

```go
func ImportedLibrariesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.languageInput"></a>

```go
func LanguageInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RemoteFunctionOptionsInput`<sup>Optional</sup> <a name="RemoteFunctionOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.remoteFunctionOptionsInput"></a>

```go
func RemoteFunctionOptionsInput() GoogleBigqueryRoutineRemoteFunctionOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a>

---

##### `ReturnTableTypeInput`<sup>Optional</sup> <a name="ReturnTableTypeInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTableTypeInput"></a>

```go
func ReturnTableTypeInput() *string
```

- *Type:* *string

---

##### `ReturnTypeInput`<sup>Optional</sup> <a name="ReturnTypeInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTypeInput"></a>

```go
func ReturnTypeInput() *string
```

- *Type:* *string

---

##### `RoutineIdInput`<sup>Optional</sup> <a name="RoutineIdInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineIdInput"></a>

```go
func RoutineIdInput() *string
```

- *Type:* *string

---

##### `RoutineTypeInput`<sup>Optional</sup> <a name="RoutineTypeInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineTypeInput"></a>

```go
func RoutineTypeInput() *string
```

- *Type:* *string

---

##### `SparkOptionsInput`<sup>Optional</sup> <a name="SparkOptionsInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.sparkOptionsInput"></a>

```go
func SparkOptionsInput() GoogleBigqueryRoutineSparkOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataGovernanceType`<sup>Required</sup> <a name="DataGovernanceType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.dataGovernanceType"></a>

```go
func DataGovernanceType() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `DefinitionBody`<sup>Required</sup> <a name="DefinitionBody" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.definitionBody"></a>

```go
func DefinitionBody() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeterminismLevel`<sup>Required</sup> <a name="DeterminismLevel" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.determinismLevel"></a>

```go
func DeterminismLevel() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportedLibraries`<sup>Required</sup> <a name="ImportedLibraries" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.importedLibraries"></a>

```go
func ImportedLibraries() *[]*string
```

- *Type:* *[]*string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReturnTableType`<sup>Required</sup> <a name="ReturnTableType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnTableType"></a>

```go
func ReturnTableType() *string
```

- *Type:* *string

---

##### `ReturnType`<sup>Required</sup> <a name="ReturnType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.returnType"></a>

```go
func ReturnType() *string
```

- *Type:* *string

---

##### `RoutineId`<sup>Required</sup> <a name="RoutineId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineId"></a>

```go
func RoutineId() *string
```

- *Type:* *string

---

##### `RoutineType`<sup>Required</sup> <a name="RoutineType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.routineType"></a>

```go
func RoutineType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutine.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryRoutineArguments <a name="GoogleBigqueryRoutineArguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryroutine"

&googlebigqueryroutine.GoogleBigqueryRoutineArguments {
	ArgumentKind: *string,
	DataType: *string,
	Mode: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.argumentKind">ArgumentKind</a></code> | <code>*string</code> | Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.dataType">DataType</a></code> | <code>*string</code> | A JSON schema for the data type. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.mode">Mode</a></code> | <code>*string</code> | Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.name">Name</a></code> | <code>*string</code> | The name of this argument. Can be absent for function return argument. |

---

##### `ArgumentKind`<sup>Optional</sup> <a name="ArgumentKind" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.argumentKind"></a>

```go
ArgumentKind *string
```

- *Type:* *string

Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#argument_kind GoogleBigqueryRoutine#argument_kind}

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

A JSON schema for the data type.

Required unless argumentKind = ANY_TYPE.
~>**NOTE**: Because this field expects a JSON string, any changes to the string
will create a diff, even if the JSON itself hasn't changed. If the API returns
a different value for the same schema, e.g. it switched the order of values
or replaced STRUCT field type with RECORD field type, we currently cannot
suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#data_type GoogleBigqueryRoutine#data_type}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#mode GoogleBigqueryRoutine#mode}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArguments.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of this argument. Can be absent for function return argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#name GoogleBigqueryRoutine#name}

---

### GoogleBigqueryRoutineConfig <a name="GoogleBigqueryRoutineConfig" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryroutine"

&googlebigqueryroutine.GoogleBigqueryRoutineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatasetId: *string,
	DefinitionBody: *string,
	RoutineId: *string,
	RoutineType: *string,
	Arguments: interface{},
	DataGovernanceType: *string,
	Description: *string,
	DeterminismLevel: *string,
	Id: *string,
	ImportedLibraries: *[]*string,
	Language: *string,
	Project: *string,
	RemoteFunctionOptions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions,
	ReturnTableType: *string,
	ReturnType: *string,
	SparkOptions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the dataset containing this routine. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.definitionBody">DefinitionBody</a></code> | <code>*string</code> | The body of the routine. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.routineId">RoutineId</a></code> | <code>*string</code> | The ID of the the routine. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.routineType">RoutineType</a></code> | <code>*string</code> | The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.arguments">Arguments</a></code> | <code>interface{}</code> | arguments block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.dataGovernanceType">DataGovernanceType</a></code> | <code>*string</code> | If set to DATA_MASKING, the function is validated and made available as a masking function. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.description">Description</a></code> | <code>*string</code> | The description of the routine if defined. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.determinismLevel">DeterminismLevel</a></code> | <code>*string</code> | The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#id GoogleBigqueryRoutine#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.importedLibraries">ImportedLibraries</a></code> | <code>*[]*string</code> | Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.language">Language</a></code> | <code>*string</code> | The language of the routine. Possible values: ["SQL", "JAVASCRIPT", "PYTHON", "JAVA", "SCALA"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#project GoogleBigqueryRoutine#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.remoteFunctionOptions">RemoteFunctionOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a></code> | remote_function_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.returnTableType">ReturnTableType</a></code> | <code>*string</code> | Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.returnType">ReturnType</a></code> | <code>*string</code> | A JSON schema for the return type. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.sparkOptions">SparkOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a></code> | spark_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the dataset containing this routine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#dataset_id GoogleBigqueryRoutine#dataset_id}

---

##### `DefinitionBody`<sup>Required</sup> <a name="DefinitionBody" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.definitionBody"></a>

```go
DefinitionBody *string
```

- *Type:* *string

The body of the routine.

For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#definition_body GoogleBigqueryRoutine#definition_body}

---

##### `RoutineId`<sup>Required</sup> <a name="RoutineId" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.routineId"></a>

```go
RoutineId *string
```

- *Type:* *string

The ID of the the routine.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#routine_id GoogleBigqueryRoutine#routine_id}

---

##### `RoutineType`<sup>Required</sup> <a name="RoutineType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.routineType"></a>

```go
RoutineType *string
```

- *Type:* *string

The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#routine_type GoogleBigqueryRoutine#routine_type}

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.arguments"></a>

```go
Arguments interface{}
```

- *Type:* interface{}

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#arguments GoogleBigqueryRoutine#arguments}

---

##### `DataGovernanceType`<sup>Optional</sup> <a name="DataGovernanceType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.dataGovernanceType"></a>

```go
DataGovernanceType *string
```

- *Type:* *string

If set to DATA_MASKING, the function is validated and made available as a masking function.

For more information, see https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask Possible values: ["DATA_MASKING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#data_governance_type GoogleBigqueryRoutine#data_governance_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the routine if defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#description GoogleBigqueryRoutine#description}

---

##### `DeterminismLevel`<sup>Optional</sup> <a name="DeterminismLevel" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.determinismLevel"></a>

```go
DeterminismLevel *string
```

- *Type:* *string

The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#determinism_level GoogleBigqueryRoutine#determinism_level}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#id GoogleBigqueryRoutine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportedLibraries`<sup>Optional</sup> <a name="ImportedLibraries" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.importedLibraries"></a>

```go
ImportedLibraries *[]*string
```

- *Type:* *[]*string

Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#imported_libraries GoogleBigqueryRoutine#imported_libraries}

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.language"></a>

```go
Language *string
```

- *Type:* *string

The language of the routine. Possible values: ["SQL", "JAVASCRIPT", "PYTHON", "JAVA", "SCALA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#language GoogleBigqueryRoutine#language}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#project GoogleBigqueryRoutine#project}.

---

##### `RemoteFunctionOptions`<sup>Optional</sup> <a name="RemoteFunctionOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.remoteFunctionOptions"></a>

```go
RemoteFunctionOptions GoogleBigqueryRoutineRemoteFunctionOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a>

remote_function_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#remote_function_options GoogleBigqueryRoutine#remote_function_options}

---

##### `ReturnTableType`<sup>Optional</sup> <a name="ReturnTableType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.returnTableType"></a>

```go
ReturnTableType *string
```

- *Type:* *string

Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".

If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, then the columns in the evaluated table result will
be cast to match the column types specificed in return table type, at query time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#return_table_type GoogleBigqueryRoutine#return_table_type}

---

##### `ReturnType`<sup>Optional</sup> <a name="ReturnType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.returnType"></a>

```go
ReturnType *string
```

- *Type:* *string

A JSON schema for the return type.

Optional if language = "SQL"; required otherwise.
If absent, the return type is inferred from definitionBody at query time in each query
that references this routine. If present, then the evaluated result will be cast to
the specified returned type at query time. ~>**NOTE**: Because this field expects a JSON
string, any changes to the string will create a diff, even if the JSON itself hasn't
changed. If the API returns a different value for the same schema, e.g. it switche
d the order of values or replaced STRUCT field type with RECORD field type, we currently
cannot suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#return_type GoogleBigqueryRoutine#return_type}

---

##### `SparkOptions`<sup>Optional</sup> <a name="SparkOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.sparkOptions"></a>

```go
SparkOptions GoogleBigqueryRoutineSparkOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a>

spark_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#spark_options GoogleBigqueryRoutine#spark_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineConfig.property.timeouts"></a>

```go
Timeouts GoogleBigqueryRoutineTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts">GoogleBigqueryRoutineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#timeouts GoogleBigqueryRoutine#timeouts}

---

### GoogleBigqueryRoutineRemoteFunctionOptions <a name="GoogleBigqueryRoutineRemoteFunctionOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryroutine"

&googlebigqueryroutine.GoogleBigqueryRoutineRemoteFunctionOptions {
	Connection: *string,
	Endpoint: *string,
	MaxBatchingRows: *string,
	UserDefinedContext: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.connection">Connection</a></code> | <code>*string</code> | Fully qualified name of the user-provided connection object which holds the authentication information to send requests to the remote service. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.endpoint">Endpoint</a></code> | <code>*string</code> | Endpoint of the user-provided remote service, e.g. 'https://us-east1-my_gcf_project.cloudfunctions.net/remote_add'. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.maxBatchingRows">MaxBatchingRows</a></code> | <code>*string</code> | Max number of rows in each batch sent to the remote service. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.userDefinedContext">UserDefinedContext</a></code> | <code>*map[string]*string</code> | User-defined context as a set of key/value pairs, which will be sent as function invocation context together with batched arguments in the requests to the remote service. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.connection"></a>

```go
Connection *string
```

- *Type:* *string

Fully qualified name of the user-provided connection object which holds the authentication information to send requests to the remote service.

Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#connection GoogleBigqueryRoutine#connection}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Endpoint of the user-provided remote service, e.g. 'https://us-east1-my_gcf_project.cloudfunctions.net/remote_add'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#endpoint GoogleBigqueryRoutine#endpoint}

---

##### `MaxBatchingRows`<sup>Optional</sup> <a name="MaxBatchingRows" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.maxBatchingRows"></a>

```go
MaxBatchingRows *string
```

- *Type:* *string

Max number of rows in each batch sent to the remote service.

If absent or if 0,
BigQuery dynamically decides the number of rows in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#max_batching_rows GoogleBigqueryRoutine#max_batching_rows}

---

##### `UserDefinedContext`<sup>Optional</sup> <a name="UserDefinedContext" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions.property.userDefinedContext"></a>

```go
UserDefinedContext *map[string]*string
```

- *Type:* *map[string]*string

User-defined context as a set of key/value pairs, which will be sent as function invocation context together with batched arguments in the requests to the remote service.

The total number of bytes of keys and values must be less than 8KB.

An object containing a list of "key": value pairs. Example:
'{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#user_defined_context GoogleBigqueryRoutine#user_defined_context}

---

### GoogleBigqueryRoutineSparkOptions <a name="GoogleBigqueryRoutineSparkOptions" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryroutine"

&googlebigqueryroutine.GoogleBigqueryRoutineSparkOptions {
	ArchiveUris: *[]*string,
	Connection: *string,
	ContainerImage: *string,
	FileUris: *[]*string,
	JarUris: *[]*string,
	MainClass: *string,
	MainFileUri: *string,
	Properties: *map[string]*string,
	PyFileUris: *[]*string,
	RuntimeVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | Archive files to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.connection">Connection</a></code> | <code>*string</code> | Fully qualified name of the user-provided Spark connection object. Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.containerImage">ContainerImage</a></code> | <code>*string</code> | Custom container image for the runtime environment. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | Files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.jarUris">JarUris</a></code> | <code>*[]*string</code> | JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see Apache Spark. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.mainClass">MainClass</a></code> | <code>*string</code> | The fully qualified name of a class in jarUris, for example, com.example.wordcount. Exactly one of mainClass and main_jar_uri field should be set for Java/Scala language type. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.mainFileUri">MainFileUri</a></code> | <code>*string</code> | The main file/jar URI of the Spark application. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Configuration properties as a set of key/value pairs, which will be passed on to the Spark application. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.pyFileUris">PyFileUris</a></code> | <code>*[]*string</code> | Python files to be placed on the PYTHONPATH for PySpark application. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | Runtime version. If not specified, the default runtime version is used. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.archiveUris"></a>

```go
ArchiveUris *[]*string
```

- *Type:* *[]*string

Archive files to be extracted into the working directory of each executor.

For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#archive_uris GoogleBigqueryRoutine#archive_uris}

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.connection"></a>

```go
Connection *string
```

- *Type:* *string

Fully qualified name of the user-provided Spark connection object. Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#connection GoogleBigqueryRoutine#connection}

---

##### `ContainerImage`<sup>Optional</sup> <a name="ContainerImage" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.containerImage"></a>

```go
ContainerImage *string
```

- *Type:* *string

Custom container image for the runtime environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#container_image GoogleBigqueryRoutine#container_image}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.fileUris"></a>

```go
FileUris *[]*string
```

- *Type:* *[]*string

Files to be placed in the working directory of each executor.

For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#file_uris GoogleBigqueryRoutine#file_uris}

---

##### `JarUris`<sup>Optional</sup> <a name="JarUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.jarUris"></a>

```go
JarUris *[]*string
```

- *Type:* *[]*string

JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#jar_uris GoogleBigqueryRoutine#jar_uris}

---

##### `MainClass`<sup>Optional</sup> <a name="MainClass" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.mainClass"></a>

```go
MainClass *string
```

- *Type:* *string

The fully qualified name of a class in jarUris, for example, com.example.wordcount. Exactly one of mainClass and main_jar_uri field should be set for Java/Scala language type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#main_class GoogleBigqueryRoutine#main_class}

---

##### `MainFileUri`<sup>Optional</sup> <a name="MainFileUri" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.mainFileUri"></a>

```go
MainFileUri *string
```

- *Type:* *string

The main file/jar URI of the Spark application.

Exactly one of the definitionBody field and the mainFileUri field must be set for Python.
Exactly one of mainClass and mainFileUri field should be set for Java/Scala language type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#main_file_uri GoogleBigqueryRoutine#main_file_uri}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Configuration properties as a set of key/value pairs, which will be passed on to the Spark application.

For more information, see Apache Spark and the procedure option list.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#properties GoogleBigqueryRoutine#properties}

---

##### `PyFileUris`<sup>Optional</sup> <a name="PyFileUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.pyFileUris"></a>

```go
PyFileUris *[]*string
```

- *Type:* *[]*string

Python files to be placed on the PYTHONPATH for PySpark application.

Supported file types: .py, .egg, and .zip. For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#py_file_uris GoogleBigqueryRoutine#py_file_uris}

---

##### `RuntimeVersion`<sup>Optional</sup> <a name="RuntimeVersion" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions.property.runtimeVersion"></a>

```go
RuntimeVersion *string
```

- *Type:* *string

Runtime version. If not specified, the default runtime version is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#runtime_version GoogleBigqueryRoutine#runtime_version}

---

### GoogleBigqueryRoutineTimeouts <a name="GoogleBigqueryRoutineTimeouts" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryroutine"

&googlebigqueryroutine.GoogleBigqueryRoutineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#create GoogleBigqueryRoutine#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#delete GoogleBigqueryRoutine#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#update GoogleBigqueryRoutine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#create GoogleBigqueryRoutine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#delete GoogleBigqueryRoutine#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigquery_routine#update GoogleBigqueryRoutine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryRoutineArgumentsList <a name="GoogleBigqueryRoutineArgumentsList" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryroutine"

googlebigqueryroutine.NewGoogleBigqueryRoutineArgumentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBigqueryRoutineArgumentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.get"></a>

```go
func Get(index *f64) GoogleBigqueryRoutineArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBigqueryRoutineArgumentsOutputReference <a name="GoogleBigqueryRoutineArgumentsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryroutine"

googlebigqueryroutine.NewGoogleBigqueryRoutineArgumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBigqueryRoutineArgumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetArgumentKind">ResetArgumentKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgumentKind` <a name="ResetArgumentKind" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetArgumentKind"></a>

```go
func ResetArgumentKind()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.argumentKindInput">ArgumentKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.argumentKind">ArgumentKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgumentKindInput`<sup>Optional</sup> <a name="ArgumentKindInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.argumentKindInput"></a>

```go
func ArgumentKindInput() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ArgumentKind`<sup>Required</sup> <a name="ArgumentKind" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.argumentKind"></a>

```go
func ArgumentKind() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineArgumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference <a name="GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryroutine"

googlebigqueryroutine.NewGoogleBigqueryRoutineRemoteFunctionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetConnection">ResetConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetMaxBatchingRows">ResetMaxBatchingRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetUserDefinedContext">ResetUserDefinedContext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnection` <a name="ResetConnection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetConnection"></a>

```go
func ResetConnection()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetMaxBatchingRows` <a name="ResetMaxBatchingRows" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetMaxBatchingRows"></a>

```go
func ResetMaxBatchingRows()
```

##### `ResetUserDefinedContext` <a name="ResetUserDefinedContext" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.resetUserDefinedContext"></a>

```go
func ResetUserDefinedContext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.connectionInput">ConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRowsInput">MaxBatchingRowsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContextInput">UserDefinedContextInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.connection">Connection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRows">MaxBatchingRows</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContext">UserDefinedContext</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionInput`<sup>Optional</sup> <a name="ConnectionInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.connectionInput"></a>

```go
func ConnectionInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `MaxBatchingRowsInput`<sup>Optional</sup> <a name="MaxBatchingRowsInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRowsInput"></a>

```go
func MaxBatchingRowsInput() *string
```

- *Type:* *string

---

##### `UserDefinedContextInput`<sup>Optional</sup> <a name="UserDefinedContextInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContextInput"></a>

```go
func UserDefinedContextInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Connection`<sup>Required</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.connection"></a>

```go
func Connection() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `MaxBatchingRows`<sup>Required</sup> <a name="MaxBatchingRows" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRows"></a>

```go
func MaxBatchingRows() *string
```

- *Type:* *string

---

##### `UserDefinedContext`<sup>Required</sup> <a name="UserDefinedContext" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContext"></a>

```go
func UserDefinedContext() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryRoutineRemoteFunctionOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineRemoteFunctionOptions">GoogleBigqueryRoutineRemoteFunctionOptions</a>

---


### GoogleBigqueryRoutineSparkOptionsOutputReference <a name="GoogleBigqueryRoutineSparkOptionsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryroutine"

googlebigqueryroutine.NewGoogleBigqueryRoutineSparkOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryRoutineSparkOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetConnection">ResetConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetContainerImage">ResetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetJarUris">ResetJarUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetMainClass">ResetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetMainFileUri">ResetMainFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetPyFileUris">ResetPyFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetRuntimeVersion">ResetRuntimeVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetArchiveUris"></a>

```go
func ResetArchiveUris()
```

##### `ResetConnection` <a name="ResetConnection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetConnection"></a>

```go
func ResetConnection()
```

##### `ResetContainerImage` <a name="ResetContainerImage" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetContainerImage"></a>

```go
func ResetContainerImage()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetFileUris"></a>

```go
func ResetFileUris()
```

##### `ResetJarUris` <a name="ResetJarUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetJarUris"></a>

```go
func ResetJarUris()
```

##### `ResetMainClass` <a name="ResetMainClass" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetMainClass"></a>

```go
func ResetMainClass()
```

##### `ResetMainFileUri` <a name="ResetMainFileUri" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetMainFileUri"></a>

```go
func ResetMainFileUri()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetPyFileUris` <a name="ResetPyFileUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetPyFileUris"></a>

```go
func ResetPyFileUris()
```

##### `ResetRuntimeVersion` <a name="ResetRuntimeVersion" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.resetRuntimeVersion"></a>

```go
func ResetRuntimeVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.connectionInput">ConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.containerImageInput">ContainerImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.jarUrisInput">JarUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainClassInput">MainClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainFileUriInput">MainFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.pyFileUrisInput">PyFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.connection">Connection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.containerImage">ContainerImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.jarUris">JarUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainClass">MainClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainFileUri">MainFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.pyFileUris">PyFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.archiveUrisInput"></a>

```go
func ArchiveUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionInput`<sup>Optional</sup> <a name="ConnectionInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.connectionInput"></a>

```go
func ConnectionInput() *string
```

- *Type:* *string

---

##### `ContainerImageInput`<sup>Optional</sup> <a name="ContainerImageInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.containerImageInput"></a>

```go
func ContainerImageInput() *string
```

- *Type:* *string

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fileUrisInput"></a>

```go
func FileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `JarUrisInput`<sup>Optional</sup> <a name="JarUrisInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.jarUrisInput"></a>

```go
func JarUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `MainClassInput`<sup>Optional</sup> <a name="MainClassInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainClassInput"></a>

```go
func MainClassInput() *string
```

- *Type:* *string

---

##### `MainFileUriInput`<sup>Optional</sup> <a name="MainFileUriInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainFileUriInput"></a>

```go
func MainFileUriInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PyFileUrisInput`<sup>Optional</sup> <a name="PyFileUrisInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.pyFileUrisInput"></a>

```go
func PyFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.runtimeVersionInput"></a>

```go
func RuntimeVersionInput() *string
```

- *Type:* *string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.archiveUris"></a>

```go
func ArchiveUris() *[]*string
```

- *Type:* *[]*string

---

##### `Connection`<sup>Required</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.connection"></a>

```go
func Connection() *string
```

- *Type:* *string

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.containerImage"></a>

```go
func ContainerImage() *string
```

- *Type:* *string

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.fileUris"></a>

```go
func FileUris() *[]*string
```

- *Type:* *[]*string

---

##### `JarUris`<sup>Required</sup> <a name="JarUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.jarUris"></a>

```go
func JarUris() *[]*string
```

- *Type:* *[]*string

---

##### `MainClass`<sup>Required</sup> <a name="MainClass" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainClass"></a>

```go
func MainClass() *string
```

- *Type:* *string

---

##### `MainFileUri`<sup>Required</sup> <a name="MainFileUri" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.mainFileUri"></a>

```go
func MainFileUri() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PyFileUris`<sup>Required</sup> <a name="PyFileUris" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.pyFileUris"></a>

```go
func PyFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.runtimeVersion"></a>

```go
func RuntimeVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryRoutineSparkOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineSparkOptions">GoogleBigqueryRoutineSparkOptions</a>

---


### GoogleBigqueryRoutineTimeoutsOutputReference <a name="GoogleBigqueryRoutineTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebigqueryroutine"

googlebigqueryroutine.NewGoogleBigqueryRoutineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryRoutineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryRoutine.GoogleBigqueryRoutineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



