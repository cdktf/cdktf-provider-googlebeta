# `googleFolderOrganizationPolicy` Submodule <a name="`googleFolderOrganizationPolicy` Submodule" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFolderOrganizationPolicy <a name="GoogleFolderOrganizationPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy google_folder_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

googlefolderorganizationpolicy.NewGoogleFolderOrganizationPolicy(scope Construct, id *string, config GoogleFolderOrganizationPolicyConfig) GoogleFolderOrganizationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig">GoogleFolderOrganizationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig">GoogleFolderOrganizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putBooleanPolicy">PutBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putListPolicy">PutListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putRestorePolicy">PutRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetBooleanPolicy">ResetBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetListPolicy">ResetListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetRestorePolicy">ResetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBooleanPolicy` <a name="PutBooleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putBooleanPolicy"></a>

```go
func PutBooleanPolicy(value GoogleFolderOrganizationPolicyBooleanPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putBooleanPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

---

##### `PutListPolicy` <a name="PutListPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putListPolicy"></a>

```go
func PutListPolicy(value GoogleFolderOrganizationPolicyListPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putListPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

---

##### `PutRestorePolicy` <a name="PutRestorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putRestorePolicy"></a>

```go
func PutRestorePolicy(value GoogleFolderOrganizationPolicyRestorePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleFolderOrganizationPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a>

---

##### `ResetBooleanPolicy` <a name="ResetBooleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetBooleanPolicy"></a>

```go
func ResetBooleanPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetListPolicy` <a name="ResetListPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetListPolicy"></a>

```go
func ResetListPolicy()
```

##### `ResetRestorePolicy` <a name="ResetRestorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetRestorePolicy"></a>

```go
func ResetRestorePolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFolderOrganizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

googlefolderorganizationpolicy.GoogleFolderOrganizationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

googlefolderorganizationpolicy.GoogleFolderOrganizationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

googlefolderorganizationpolicy.GoogleFolderOrganizationPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

googlefolderorganizationpolicy.GoogleFolderOrganizationPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleFolderOrganizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleFolderOrganizationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleFolderOrganizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFolderOrganizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.booleanPolicy">BooleanPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference">GoogleFolderOrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.listPolicy">ListPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference">GoogleFolderOrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.restorePolicy">RestorePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference">GoogleFolderOrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference">GoogleFolderOrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.booleanPolicyInput">BooleanPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.constraintInput">ConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.listPolicyInput">ListPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.restorePolicyInput">RestorePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.versionInput">VersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.version">Version</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BooleanPolicy`<sup>Required</sup> <a name="BooleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.booleanPolicy"></a>

```go
func BooleanPolicy() GoogleFolderOrganizationPolicyBooleanPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference">GoogleFolderOrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ListPolicy`<sup>Required</sup> <a name="ListPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.listPolicy"></a>

```go
func ListPolicy() GoogleFolderOrganizationPolicyListPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference">GoogleFolderOrganizationPolicyListPolicyOutputReference</a>

---

##### `RestorePolicy`<sup>Required</sup> <a name="RestorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.restorePolicy"></a>

```go
func RestorePolicy() GoogleFolderOrganizationPolicyRestorePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference">GoogleFolderOrganizationPolicyRestorePolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleFolderOrganizationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference">GoogleFolderOrganizationPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BooleanPolicyInput`<sup>Optional</sup> <a name="BooleanPolicyInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.booleanPolicyInput"></a>

```go
func BooleanPolicyInput() GoogleFolderOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.constraintInput"></a>

```go
func ConstraintInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListPolicyInput`<sup>Optional</sup> <a name="ListPolicyInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.listPolicyInput"></a>

```go
func ListPolicyInput() GoogleFolderOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

---

##### `RestorePolicyInput`<sup>Optional</sup> <a name="RestorePolicyInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.restorePolicyInput"></a>

```go
func RestorePolicyInput() GoogleFolderOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.versionInput"></a>

```go
func VersionInput() *f64
```

- *Type:* *f64

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFolderOrganizationPolicyBooleanPolicy <a name="GoogleFolderOrganizationPolicyBooleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

&googlefolderorganizationpolicy.GoogleFolderOrganizationPolicyBooleanPolicy {
	Enforced: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy.property.enforced">Enforced</a></code> | <code>interface{}</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy.property.enforced"></a>

```go
Enforced interface{}
```

- *Type:* interface{}

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#enforced GoogleFolderOrganizationPolicy#enforced}

---

### GoogleFolderOrganizationPolicyConfig <a name="GoogleFolderOrganizationPolicyConfig" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

&googlefolderorganizationpolicy.GoogleFolderOrganizationPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Constraint: *string,
	Folder: *string,
	BooleanPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy,
	Id: *string,
	ListPolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy,
	RestorePolicy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts,
	Version: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.constraint">Constraint</a></code> | <code>*string</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.folder">Folder</a></code> | <code>*string</code> | The resource name of the folder to set the policy for. Its format is folders/{folder_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.booleanPolicy">BooleanPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#id GoogleFolderOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.listPolicy">ListPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.restorePolicy">RestorePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.version">Version</a></code> | <code>*f64</code> | Version of the Policy. Default version is 0. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.constraint"></a>

```go
Constraint *string
```

- *Type:* *string

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#constraint GoogleFolderOrganizationPolicy#constraint}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

The resource name of the folder to set the policy for. Its format is folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#folder GoogleFolderOrganizationPolicy#folder}

---

##### `BooleanPolicy`<sup>Optional</sup> <a name="BooleanPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.booleanPolicy"></a>

```go
BooleanPolicy GoogleFolderOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#boolean_policy GoogleFolderOrganizationPolicy#boolean_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#id GoogleFolderOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ListPolicy`<sup>Optional</sup> <a name="ListPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.listPolicy"></a>

```go
ListPolicy GoogleFolderOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#list_policy GoogleFolderOrganizationPolicy#list_policy}

---

##### `RestorePolicy`<sup>Optional</sup> <a name="RestorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.restorePolicy"></a>

```go
RestorePolicy GoogleFolderOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#restore_policy GoogleFolderOrganizationPolicy#restore_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleFolderOrganizationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts">GoogleFolderOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#timeouts GoogleFolderOrganizationPolicy#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyConfig.property.version"></a>

```go
Version *f64
```

- *Type:* *f64

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#version GoogleFolderOrganizationPolicy#version}

---

### GoogleFolderOrganizationPolicyListPolicy <a name="GoogleFolderOrganizationPolicyListPolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

&googlefolderorganizationpolicy.GoogleFolderOrganizationPolicyListPolicy {
	Allow: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow,
	Deny: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny,
	InheritFromParent: interface{},
	SuggestedValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.inheritFromParent">InheritFromParent</a></code> | <code>interface{}</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.suggestedValue">SuggestedValue</a></code> | <code>*string</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.allow"></a>

```go
Allow GoogleFolderOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#allow GoogleFolderOrganizationPolicy#allow}

---

##### `Deny`<sup>Optional</sup> <a name="Deny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.deny"></a>

```go
Deny GoogleFolderOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#deny GoogleFolderOrganizationPolicy#deny}

---

##### `InheritFromParent`<sup>Optional</sup> <a name="InheritFromParent" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.inheritFromParent"></a>

```go
InheritFromParent interface{}
```

- *Type:* interface{}

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#inherit_from_parent GoogleFolderOrganizationPolicy#inherit_from_parent}

---

##### `SuggestedValue`<sup>Optional</sup> <a name="SuggestedValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy.property.suggestedValue"></a>

```go
SuggestedValue *string
```

- *Type:* *string

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#suggested_value GoogleFolderOrganizationPolicy#suggested_value}

---

### GoogleFolderOrganizationPolicyListPolicyAllow <a name="GoogleFolderOrganizationPolicyListPolicyAllow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

&googlefolderorganizationpolicy.GoogleFolderOrganizationPolicyListPolicyAllow {
	All: interface{},
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.property.all">All</a></code> | <code>interface{}</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.property.values">Values</a></code> | <code>*[]*string</code> | The policy can define specific values that are allowed or denied. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.property.all"></a>

```go
All interface{}
```

- *Type:* interface{}

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#all GoogleFolderOrganizationPolicy#all}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#values GoogleFolderOrganizationPolicy#values}

---

### GoogleFolderOrganizationPolicyListPolicyDeny <a name="GoogleFolderOrganizationPolicyListPolicyDeny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

&googlefolderorganizationpolicy.GoogleFolderOrganizationPolicyListPolicyDeny {
	All: interface{},
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.property.all">All</a></code> | <code>interface{}</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.property.values">Values</a></code> | <code>*[]*string</code> | The policy can define specific values that are allowed or denied. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.property.all"></a>

```go
All interface{}
```

- *Type:* interface{}

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#all GoogleFolderOrganizationPolicy#all}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#values GoogleFolderOrganizationPolicy#values}

---

### GoogleFolderOrganizationPolicyRestorePolicy <a name="GoogleFolderOrganizationPolicyRestorePolicy" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

&googlefolderorganizationpolicy.GoogleFolderOrganizationPolicyRestorePolicy {
	Default: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy.property.default">Default</a></code> | <code>interface{}</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy.property.default"></a>

```go
Default interface{}
```

- *Type:* interface{}

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#default GoogleFolderOrganizationPolicy#default}

---

### GoogleFolderOrganizationPolicyTimeouts <a name="GoogleFolderOrganizationPolicyTimeouts" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

&googlefolderorganizationpolicy.GoogleFolderOrganizationPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#create GoogleFolderOrganizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#delete GoogleFolderOrganizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#read GoogleFolderOrganizationPolicy#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#update GoogleFolderOrganizationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#create GoogleFolderOrganizationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#delete GoogleFolderOrganizationPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#read GoogleFolderOrganizationPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_folder_organization_policy#update GoogleFolderOrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFolderOrganizationPolicyBooleanPolicyOutputReference <a name="GoogleFolderOrganizationPolicyBooleanPolicyOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

googlefolderorganizationpolicy.NewGoogleFolderOrganizationPolicyBooleanPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFolderOrganizationPolicyBooleanPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">EnforcedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforced">Enforced</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnforcedInput`<sup>Optional</sup> <a name="EnforcedInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```go
func EnforcedInput() interface{}
```

- *Type:* interface{}

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```go
func Enforced() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFolderOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyBooleanPolicy">GoogleFolderOrganizationPolicyBooleanPolicy</a>

---


### GoogleFolderOrganizationPolicyListPolicyAllowOutputReference <a name="GoogleFolderOrganizationPolicyListPolicyAllowOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

googlefolderorganizationpolicy.NewGoogleFolderOrganizationPolicyListPolicyAllowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFolderOrganizationPolicyListPolicyAllowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```go
func ResetAll()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.allInput">AllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.all">All</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```go
func AllInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```go
func All() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFolderOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a>

---


### GoogleFolderOrganizationPolicyListPolicyDenyOutputReference <a name="GoogleFolderOrganizationPolicyListPolicyDenyOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

googlefolderorganizationpolicy.NewGoogleFolderOrganizationPolicyListPolicyDenyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFolderOrganizationPolicyListPolicyDenyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```go
func ResetAll()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.allInput">AllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.all">All</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```go
func AllInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```go
func All() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFolderOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a>

---


### GoogleFolderOrganizationPolicyListPolicyOutputReference <a name="GoogleFolderOrganizationPolicyListPolicyOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

googlefolderorganizationpolicy.NewGoogleFolderOrganizationPolicyListPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFolderOrganizationPolicyListPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putAllow">PutAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putDeny">PutDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetDeny">ResetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetInheritFromParent">ResetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetSuggestedValue">ResetSuggestedValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllow` <a name="PutAllow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putAllow"></a>

```go
func PutAllow(value GoogleFolderOrganizationPolicyListPolicyAllow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a>

---

##### `PutDeny` <a name="PutDeny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putDeny"></a>

```go
func PutDeny(value GoogleFolderOrganizationPolicyListPolicyDeny)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a>

---

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```go
func ResetAllow()
```

##### `ResetDeny` <a name="ResetDeny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```go
func ResetDeny()
```

##### `ResetInheritFromParent` <a name="ResetInheritFromParent" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```go
func ResetInheritFromParent()
```

##### `ResetSuggestedValue` <a name="ResetSuggestedValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```go
func ResetSuggestedValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference">GoogleFolderOrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference">GoogleFolderOrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.allowInput">AllowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.denyInput">DenyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">InheritFromParentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">SuggestedValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">InheritFromParent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValue">SuggestedValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```go
func Allow() GoogleFolderOrganizationPolicyListPolicyAllowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllowOutputReference">GoogleFolderOrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```go
func Deny() GoogleFolderOrganizationPolicyListPolicyDenyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDenyOutputReference">GoogleFolderOrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```go
func AllowInput() GoogleFolderOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyAllow">GoogleFolderOrganizationPolicyListPolicyAllow</a>

---

##### `DenyInput`<sup>Optional</sup> <a name="DenyInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```go
func DenyInput() GoogleFolderOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyDeny">GoogleFolderOrganizationPolicyListPolicyDeny</a>

---

##### `InheritFromParentInput`<sup>Optional</sup> <a name="InheritFromParentInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```go
func InheritFromParentInput() interface{}
```

- *Type:* interface{}

---

##### `SuggestedValueInput`<sup>Optional</sup> <a name="SuggestedValueInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```go
func SuggestedValueInput() *string
```

- *Type:* *string

---

##### `InheritFromParent`<sup>Required</sup> <a name="InheritFromParent" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```go
func InheritFromParent() interface{}
```

- *Type:* interface{}

---

##### `SuggestedValue`<sup>Required</sup> <a name="SuggestedValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```go
func SuggestedValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFolderOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyListPolicy">GoogleFolderOrganizationPolicyListPolicy</a>

---


### GoogleFolderOrganizationPolicyRestorePolicyOutputReference <a name="GoogleFolderOrganizationPolicyRestorePolicyOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

googlefolderorganizationpolicy.NewGoogleFolderOrganizationPolicyRestorePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFolderOrganizationPolicyRestorePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.defaultInput">DefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.default">Default</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```go
func DefaultInput() interface{}
```

- *Type:* interface{}

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```go
func Default() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleFolderOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyRestorePolicy">GoogleFolderOrganizationPolicyRestorePolicy</a>

---


### GoogleFolderOrganizationPolicyTimeoutsOutputReference <a name="GoogleFolderOrganizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlefolderorganizationpolicy"

googlefolderorganizationpolicy.NewGoogleFolderOrganizationPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleFolderOrganizationPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleFolderOrganizationPolicy.GoogleFolderOrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



