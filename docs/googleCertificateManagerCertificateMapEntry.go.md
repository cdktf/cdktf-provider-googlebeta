# `googleCertificateManagerCertificateMapEntry` Submodule <a name="`googleCertificateManagerCertificateMapEntry` Submodule" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCertificateManagerCertificateMapEntry <a name="GoogleCertificateManagerCertificateMapEntry" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry google_certificate_manager_certificate_map_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecertificatemanagercertificatemapentry"

googlecertificatemanagercertificatemapentry.NewGoogleCertificateManagerCertificateMapEntry(scope Construct, id *string, config GoogleCertificateManagerCertificateMapEntryConfig) GoogleCertificateManagerCertificateMapEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig">GoogleCertificateManagerCertificateMapEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig">GoogleCertificateManagerCertificateMapEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetMatcher">ResetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCertificateManagerCertificateMapEntryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts">GoogleCertificateManagerCertificateMapEntryTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMatcher` <a name="ResetMatcher" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetMatcher"></a>

```go
func ResetMatcher()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCertificateManagerCertificateMapEntry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecertificatemanagercertificatemapentry"

googlecertificatemanagercertificatemapentry.GoogleCertificateManagerCertificateMapEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecertificatemanagercertificatemapentry"

googlecertificatemanagercertificatemapentry.GoogleCertificateManagerCertificateMapEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecertificatemanagercertificatemapentry"

googlecertificatemanagercertificatemapentry.GoogleCertificateManagerCertificateMapEntry_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecertificatemanagercertificatemapentry"

googlecertificatemanagercertificatemapentry.GoogleCertificateManagerCertificateMapEntry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleCertificateManagerCertificateMapEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCertificateManagerCertificateMapEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCertificateManagerCertificateMapEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCertificateManagerCertificateMapEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference">GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.certificatesInput">CertificatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.mapInput">MapInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.matcherInput">MatcherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.certificates">Certificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.map">Map</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.matcher">Matcher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.timeouts"></a>

```go
func Timeouts() GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference">GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CertificatesInput`<sup>Optional</sup> <a name="CertificatesInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.certificatesInput"></a>

```go
func CertificatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MapInput`<sup>Optional</sup> <a name="MapInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.mapInput"></a>

```go
func MapInput() *string
```

- *Type:* *string

---

##### `MatcherInput`<sup>Optional</sup> <a name="MatcherInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.matcherInput"></a>

```go
func MatcherInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.certificates"></a>

```go
func Certificates() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Map`<sup>Required</sup> <a name="Map" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.map"></a>

```go
func Map() *string
```

- *Type:* *string

---

##### `Matcher`<sup>Required</sup> <a name="Matcher" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.matcher"></a>

```go
func Matcher() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCertificateManagerCertificateMapEntryConfig <a name="GoogleCertificateManagerCertificateMapEntryConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecertificatemanagercertificatemapentry"

&googlecertificatemanagercertificatemapentry.GoogleCertificateManagerCertificateMapEntryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Certificates: *[]*string,
	Map: *string,
	Name: *string,
	Description: *string,
	Hostname: *string,
	Id: *string,
	Labels: *map[string]*string,
	Matcher: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.certificates">Certificates</a></code> | <code>*[]*string</code> | A set of Certificates defines for the given hostname. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.map">Map</a></code> | <code>*string</code> | A map entry that is inputted into the cetrificate map. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.name">Name</a></code> | <code>*string</code> | A user-defined name of the Certificate Map Entry. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.hostname">Hostname</a></code> | <code>*string</code> | A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#id GoogleCertificateManagerCertificateMapEntry#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of labels associated with a Certificate Map Entry. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.matcher">Matcher</a></code> | <code>*string</code> | A predefined matcher for particular cases, other than SNI selection. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#project GoogleCertificateManagerCertificateMapEntry#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts">GoogleCertificateManagerCertificateMapEntryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.certificates"></a>

```go
Certificates *[]*string
```

- *Type:* *[]*string

A set of Certificates defines for the given hostname.

There can be defined up to fifteen certificates in each Certificate Map Entry.
Each certificate must match pattern projects/* /locations/* /certificates/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#certificates GoogleCertificateManagerCertificateMapEntry#certificates}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Map`<sup>Required</sup> <a name="Map" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.map"></a>

```go
Map *string
```

- *Type:* *string

A map entry that is inputted into the cetrificate map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#map GoogleCertificateManagerCertificateMapEntry#map}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A user-defined name of the Certificate Map Entry.

Certificate Map Entry
names must be unique globally and match pattern
'projects/* /locations/* /certificateMaps/* /certificateMapEntries/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#name GoogleCertificateManagerCertificateMapEntry#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#description GoogleCertificateManagerCertificateMapEntry#description}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#hostname GoogleCertificateManagerCertificateMapEntry#hostname}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#id GoogleCertificateManagerCertificateMapEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of labels associated with a Certificate Map Entry.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#labels GoogleCertificateManagerCertificateMapEntry#labels}

---

##### `Matcher`<sup>Optional</sup> <a name="Matcher" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.matcher"></a>

```go
Matcher *string
```

- *Type:* *string

A predefined matcher for particular cases, other than SNI selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#matcher GoogleCertificateManagerCertificateMapEntry#matcher}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#project GoogleCertificateManagerCertificateMapEntry#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryConfig.property.timeouts"></a>

```go
Timeouts GoogleCertificateManagerCertificateMapEntryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts">GoogleCertificateManagerCertificateMapEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#timeouts GoogleCertificateManagerCertificateMapEntry#timeouts}

---

### GoogleCertificateManagerCertificateMapEntryTimeouts <a name="GoogleCertificateManagerCertificateMapEntryTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecertificatemanagercertificatemapentry"

&googlecertificatemanagercertificatemapentry.GoogleCertificateManagerCertificateMapEntryTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#create GoogleCertificateManagerCertificateMapEntry#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#delete GoogleCertificateManagerCertificateMapEntry#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#update GoogleCertificateManagerCertificateMapEntry#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#create GoogleCertificateManagerCertificateMapEntry#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#delete GoogleCertificateManagerCertificateMapEntry#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_certificate_manager_certificate_map_entry#update GoogleCertificateManagerCertificateMapEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference <a name="GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googlecertificatemanagercertificatemapentry"

googlecertificatemanagercertificatemapentry.NewGoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMapEntry.GoogleCertificateManagerCertificateMapEntryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



