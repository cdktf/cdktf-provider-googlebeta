# `googleOsConfigGuestPolicies` Submodule <a name="`googleOsConfigGuestPolicies` Submodule" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOsConfigGuestPolicies <a name="GoogleOsConfigGuestPolicies" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies google_os_config_guest_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPolicies(scope Construct, id *string, config GoogleOsConfigGuestPoliciesConfig) GoogleOsConfigGuestPolicies
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig">GoogleOsConfigGuestPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig">GoogleOsConfigGuestPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.putAssignment">PutAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.putPackageRepositories">PutPackageRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.putPackages">PutPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.putRecipes">PutRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetPackageRepositories">ResetPackageRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetPackages">ResetPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetRecipes">ResetRecipes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssignment` <a name="PutAssignment" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.putAssignment"></a>

```go
func PutAssignment(value GoogleOsConfigGuestPoliciesAssignment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.putAssignment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment">GoogleOsConfigGuestPoliciesAssignment</a>

---

##### `PutPackageRepositories` <a name="PutPackageRepositories" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.putPackageRepositories"></a>

```go
func PutPackageRepositories(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.putPackageRepositories.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPackages` <a name="PutPackages" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.putPackages"></a>

```go
func PutPackages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.putPackages.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRecipes` <a name="PutRecipes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.putRecipes"></a>

```go
func PutRecipes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.putRecipes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.putTimeouts"></a>

```go
func PutTimeouts(value GoogleOsConfigGuestPoliciesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeouts">GoogleOsConfigGuestPoliciesTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetId"></a>

```go
func ResetId()
```

##### `ResetPackageRepositories` <a name="ResetPackageRepositories" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetPackageRepositories"></a>

```go
func ResetPackageRepositories()
```

##### `ResetPackages` <a name="ResetPackages" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetPackages"></a>

```go
func ResetPackages()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRecipes` <a name="ResetRecipes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetRecipes"></a>

```go
func ResetRecipes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOsConfigGuestPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.GoogleOsConfigGuestPolicies_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.GoogleOsConfigGuestPolicies_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.GoogleOsConfigGuestPolicies_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.GoogleOsConfigGuestPolicies_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleOsConfigGuestPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleOsConfigGuestPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleOsConfigGuestPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOsConfigGuestPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.assignment">Assignment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference">GoogleOsConfigGuestPoliciesAssignmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.packageRepositories">PackageRepositories</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList">GoogleOsConfigGuestPoliciesPackageRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.packages">Packages</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList">GoogleOsConfigGuestPoliciesPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.recipes">Recipes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList">GoogleOsConfigGuestPoliciesRecipesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference">GoogleOsConfigGuestPoliciesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.assignmentInput">AssignmentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment">GoogleOsConfigGuestPoliciesAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.guestPolicyIdInput">GuestPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.packageRepositoriesInput">PackageRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.packagesInput">PackagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.recipesInput">RecipesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.guestPolicyId">GuestPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Assignment`<sup>Required</sup> <a name="Assignment" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.assignment"></a>

```go
func Assignment() GoogleOsConfigGuestPoliciesAssignmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference">GoogleOsConfigGuestPoliciesAssignmentOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PackageRepositories`<sup>Required</sup> <a name="PackageRepositories" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.packageRepositories"></a>

```go
func PackageRepositories() GoogleOsConfigGuestPoliciesPackageRepositoriesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList">GoogleOsConfigGuestPoliciesPackageRepositoriesList</a>

---

##### `Packages`<sup>Required</sup> <a name="Packages" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.packages"></a>

```go
func Packages() GoogleOsConfigGuestPoliciesPackagesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList">GoogleOsConfigGuestPoliciesPackagesList</a>

---

##### `Recipes`<sup>Required</sup> <a name="Recipes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.recipes"></a>

```go
func Recipes() GoogleOsConfigGuestPoliciesRecipesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList">GoogleOsConfigGuestPoliciesRecipesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.timeouts"></a>

```go
func Timeouts() GoogleOsConfigGuestPoliciesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference">GoogleOsConfigGuestPoliciesTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AssignmentInput`<sup>Optional</sup> <a name="AssignmentInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.assignmentInput"></a>

```go
func AssignmentInput() GoogleOsConfigGuestPoliciesAssignment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment">GoogleOsConfigGuestPoliciesAssignment</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `GuestPolicyIdInput`<sup>Optional</sup> <a name="GuestPolicyIdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.guestPolicyIdInput"></a>

```go
func GuestPolicyIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PackageRepositoriesInput`<sup>Optional</sup> <a name="PackageRepositoriesInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.packageRepositoriesInput"></a>

```go
func PackageRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `PackagesInput`<sup>Optional</sup> <a name="PackagesInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.packagesInput"></a>

```go
func PackagesInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RecipesInput`<sup>Optional</sup> <a name="RecipesInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.recipesInput"></a>

```go
func RecipesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `GuestPolicyId`<sup>Required</sup> <a name="GuestPolicyId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.guestPolicyId"></a>

```go
func GuestPolicyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPolicies.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOsConfigGuestPoliciesAssignment <a name="GoogleOsConfigGuestPoliciesAssignment" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesAssignment {
	GroupLabels: interface{},
	InstanceNamePrefixes: *[]*string,
	Instances: *[]*string,
	OsTypes: interface{},
	Zones: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment.property.groupLabels">GroupLabels</a></code> | <code>interface{}</code> | group_labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment.property.instanceNamePrefixes">InstanceNamePrefixes</a></code> | <code>*[]*string</code> | Targets VM instances whose name starts with one of these prefixes. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment.property.instances">Instances</a></code> | <code>*[]*string</code> | Targets any of the instances specified. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment.property.osTypes">OsTypes</a></code> | <code>interface{}</code> | os_types block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment.property.zones">Zones</a></code> | <code>*[]*string</code> | Targets instances in any of these zones. |

---

##### `GroupLabels`<sup>Optional</sup> <a name="GroupLabels" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment.property.groupLabels"></a>

```go
GroupLabels interface{}
```

- *Type:* interface{}

group_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#group_labels GoogleOsConfigGuestPolicies#group_labels}

---

##### `InstanceNamePrefixes`<sup>Optional</sup> <a name="InstanceNamePrefixes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment.property.instanceNamePrefixes"></a>

```go
InstanceNamePrefixes *[]*string
```

- *Type:* *[]*string

Targets VM instances whose name starts with one of these prefixes.

Like labels, this is another way to group VM instances when targeting configs,
for example prefix="prod-".
Only supported for project-level policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#instance_name_prefixes GoogleOsConfigGuestPolicies#instance_name_prefixes}

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment.property.instances"></a>

```go
Instances *[]*string
```

- *Type:* *[]*string

Targets any of the instances specified.

Instances are specified by their URI in the form
zones/[ZONE]/instances/[INSTANCE_NAME].
Instance targeting is uncommon and is supported to facilitate the management of changes
by the instance or to target specific VM instances for development and testing.
Only supported for project-level policies and must reference instances within this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#instances GoogleOsConfigGuestPolicies#instances}

---

##### `OsTypes`<sup>Optional</sup> <a name="OsTypes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment.property.osTypes"></a>

```go
OsTypes interface{}
```

- *Type:* interface{}

os_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#os_types GoogleOsConfigGuestPolicies#os_types}

---

##### `Zones`<sup>Optional</sup> <a name="Zones" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment.property.zones"></a>

```go
Zones *[]*string
```

- *Type:* *[]*string

Targets instances in any of these zones.

Leave empty to target instances in any zone.
Zonal targeting is uncommon and is supported to facilitate the management of changes by zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#zones GoogleOsConfigGuestPolicies#zones}

---

### GoogleOsConfigGuestPoliciesAssignmentGroupLabels <a name="GoogleOsConfigGuestPoliciesAssignmentGroupLabels" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabels {
	Labels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabels.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Google Compute Engine instance labels that must be present for an instance to be included in this assignment group. |

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabels.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Google Compute Engine instance labels that must be present for an instance to be included in this assignment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#labels GoogleOsConfigGuestPolicies#labels}

---

### GoogleOsConfigGuestPoliciesAssignmentOsTypes <a name="GoogleOsConfigGuestPoliciesAssignmentOsTypes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypes {
	OsArchitecture: *string,
	OsShortName: *string,
	OsVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypes.property.osArchitecture">OsArchitecture</a></code> | <code>*string</code> | Targets VM instances with OS Inventory enabled and having the following OS architecture. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypes.property.osShortName">OsShortName</a></code> | <code>*string</code> | Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows". |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypes.property.osVersion">OsVersion</a></code> | <code>*string</code> | Targets VM instances with OS Inventory enabled and having the following following OS version. |

---

##### `OsArchitecture`<sup>Optional</sup> <a name="OsArchitecture" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypes.property.osArchitecture"></a>

```go
OsArchitecture *string
```

- *Type:* *string

Targets VM instances with OS Inventory enabled and having the following OS architecture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#os_architecture GoogleOsConfigGuestPolicies#os_architecture}

---

##### `OsShortName`<sup>Optional</sup> <a name="OsShortName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypes.property.osShortName"></a>

```go
OsShortName *string
```

- *Type:* *string

Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#os_short_name GoogleOsConfigGuestPolicies#os_short_name}

---

##### `OsVersion`<sup>Optional</sup> <a name="OsVersion" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypes.property.osVersion"></a>

```go
OsVersion *string
```

- *Type:* *string

Targets VM instances with OS Inventory enabled and having the following following OS version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#os_version GoogleOsConfigGuestPolicies#os_version}

---

### GoogleOsConfigGuestPoliciesConfig <a name="GoogleOsConfigGuestPoliciesConfig" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Assignment: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment,
	GuestPolicyId: *string,
	Description: *string,
	Etag: *string,
	Id: *string,
	PackageRepositories: interface{},
	Packages: interface{},
	Project: *string,
	Recipes: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.assignment">Assignment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment">GoogleOsConfigGuestPoliciesAssignment</a></code> | assignment block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.guestPolicyId">GuestPolicyId</a></code> | <code>*string</code> | The logical name of the guest policy in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.description">Description</a></code> | <code>*string</code> | Description of the guest policy. Length of the description is limited to 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.etag">Etag</a></code> | <code>*string</code> | The etag for this guest policy. If this is provided on update, it must match the server's etag. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#id GoogleOsConfigGuestPolicies#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.packageRepositories">PackageRepositories</a></code> | <code>interface{}</code> | package_repositories block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.packages">Packages</a></code> | <code>interface{}</code> | packages block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#project GoogleOsConfigGuestPolicies#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.recipes">Recipes</a></code> | <code>interface{}</code> | recipes block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeouts">GoogleOsConfigGuestPoliciesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Assignment`<sup>Required</sup> <a name="Assignment" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.assignment"></a>

```go
Assignment GoogleOsConfigGuestPoliciesAssignment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment">GoogleOsConfigGuestPoliciesAssignment</a>

assignment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#assignment GoogleOsConfigGuestPolicies#assignment}

---

##### `GuestPolicyId`<sup>Required</sup> <a name="GuestPolicyId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.guestPolicyId"></a>

```go
GuestPolicyId *string
```

- *Type:* *string

The logical name of the guest policy in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens.

* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#guest_policy_id GoogleOsConfigGuestPolicies#guest_policy_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the guest policy. Length of the description is limited to 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#description GoogleOsConfigGuestPolicies#description}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

The etag for this guest policy. If this is provided on update, it must match the server's etag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#etag GoogleOsConfigGuestPolicies#etag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#id GoogleOsConfigGuestPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PackageRepositories`<sup>Optional</sup> <a name="PackageRepositories" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.packageRepositories"></a>

```go
PackageRepositories interface{}
```

- *Type:* interface{}

package_repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#package_repositories GoogleOsConfigGuestPolicies#package_repositories}

---

##### `Packages`<sup>Optional</sup> <a name="Packages" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.packages"></a>

```go
Packages interface{}
```

- *Type:* interface{}

packages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#packages GoogleOsConfigGuestPolicies#packages}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#project GoogleOsConfigGuestPolicies#project}.

---

##### `Recipes`<sup>Optional</sup> <a name="Recipes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.recipes"></a>

```go
Recipes interface{}
```

- *Type:* interface{}

recipes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#recipes GoogleOsConfigGuestPolicies#recipes}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesConfig.property.timeouts"></a>

```go
Timeouts GoogleOsConfigGuestPoliciesTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeouts">GoogleOsConfigGuestPoliciesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#timeouts GoogleOsConfigGuestPolicies#timeouts}

---

### GoogleOsConfigGuestPoliciesPackageRepositories <a name="GoogleOsConfigGuestPoliciesPackageRepositories" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositories.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesPackageRepositories {
	Apt: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt,
	Goo: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGoo,
	Yum: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum,
	Zypper: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositories.property.apt">Apt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt">GoogleOsConfigGuestPoliciesPackageRepositoriesApt</a></code> | apt block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositories.property.goo">Goo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGoo">GoogleOsConfigGuestPoliciesPackageRepositoriesGoo</a></code> | goo block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositories.property.yum">Yum</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum">GoogleOsConfigGuestPoliciesPackageRepositoriesYum</a></code> | yum block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositories.property.zypper">Zypper</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper">GoogleOsConfigGuestPoliciesPackageRepositoriesZypper</a></code> | zypper block. |

---

##### `Apt`<sup>Optional</sup> <a name="Apt" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositories.property.apt"></a>

```go
Apt GoogleOsConfigGuestPoliciesPackageRepositoriesApt
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt">GoogleOsConfigGuestPoliciesPackageRepositoriesApt</a>

apt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#apt GoogleOsConfigGuestPolicies#apt}

---

##### `Goo`<sup>Optional</sup> <a name="Goo" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositories.property.goo"></a>

```go
Goo GoogleOsConfigGuestPoliciesPackageRepositoriesGoo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGoo">GoogleOsConfigGuestPoliciesPackageRepositoriesGoo</a>

goo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#goo GoogleOsConfigGuestPolicies#goo}

---

##### `Yum`<sup>Optional</sup> <a name="Yum" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositories.property.yum"></a>

```go
Yum GoogleOsConfigGuestPoliciesPackageRepositoriesYum
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum">GoogleOsConfigGuestPoliciesPackageRepositoriesYum</a>

yum block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#yum GoogleOsConfigGuestPolicies#yum}

---

##### `Zypper`<sup>Optional</sup> <a name="Zypper" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositories.property.zypper"></a>

```go
Zypper GoogleOsConfigGuestPoliciesPackageRepositoriesZypper
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper">GoogleOsConfigGuestPoliciesPackageRepositoriesZypper</a>

zypper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#zypper GoogleOsConfigGuestPolicies#zypper}

---

### GoogleOsConfigGuestPoliciesPackageRepositoriesApt <a name="GoogleOsConfigGuestPoliciesPackageRepositoriesApt" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt {
	Components: *[]*string,
	Distribution: *string,
	Uri: *string,
	ArchiveType: *string,
	GpgKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt.property.components">Components</a></code> | <code>*[]*string</code> | List of components for this repository. Must contain at least one item. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt.property.distribution">Distribution</a></code> | <code>*string</code> | Distribution of this repository. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt.property.uri">Uri</a></code> | <code>*string</code> | URI for this repository. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt.property.archiveType">ArchiveType</a></code> | <code>*string</code> | Type of archive files in this repository. The default behavior is DEB. Default value: "DEB" Possible values: ["DEB", "DEB_SRC"]. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt.property.gpgKey">GpgKey</a></code> | <code>*string</code> | URI of the key file for this repository. |

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt.property.components"></a>

```go
Components *[]*string
```

- *Type:* *[]*string

List of components for this repository. Must contain at least one item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#components GoogleOsConfigGuestPolicies#components}

---

##### `Distribution`<sup>Required</sup> <a name="Distribution" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt.property.distribution"></a>

```go
Distribution *string
```

- *Type:* *string

Distribution of this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#distribution GoogleOsConfigGuestPolicies#distribution}

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

URI for this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#uri GoogleOsConfigGuestPolicies#uri}

---

##### `ArchiveType`<sup>Optional</sup> <a name="ArchiveType" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt.property.archiveType"></a>

```go
ArchiveType *string
```

- *Type:* *string

Type of archive files in this repository. The default behavior is DEB. Default value: "DEB" Possible values: ["DEB", "DEB_SRC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#archive_type GoogleOsConfigGuestPolicies#archive_type}

---

##### `GpgKey`<sup>Optional</sup> <a name="GpgKey" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt.property.gpgKey"></a>

```go
GpgKey *string
```

- *Type:* *string

URI of the key file for this repository.

The agent maintains a keyring at
/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg containing all the keys in any applied guest policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#gpg_key GoogleOsConfigGuestPolicies#gpg_key}

---

### GoogleOsConfigGuestPoliciesPackageRepositoriesGoo <a name="GoogleOsConfigGuestPoliciesPackageRepositoriesGoo" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGoo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGoo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGoo {
	Name: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGoo.property.name">Name</a></code> | <code>*string</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGoo.property.url">Url</a></code> | <code>*string</code> | The url of the repository. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGoo.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#name GoogleOsConfigGuestPolicies#name}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGoo.property.url"></a>

```go
Url *string
```

- *Type:* *string

The url of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#url GoogleOsConfigGuestPolicies#url}

---

### GoogleOsConfigGuestPoliciesPackageRepositoriesYum <a name="GoogleOsConfigGuestPoliciesPackageRepositoriesYum" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum {
	BaseUrl: *string,
	Id: *string,
	DisplayName: *string,
	GpgKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | The location of the repository directory. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum.property.id">Id</a></code> | <code>*string</code> | A one word, unique name for this repository. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum.property.gpgKeys">GpgKeys</a></code> | <code>*[]*string</code> | URIs of GPG keys. |

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

The location of the repository directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#base_url GoogleOsConfigGuestPolicies#base_url}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum.property.id"></a>

```go
Id *string
```

- *Type:* *string

A one word, unique name for this repository.

This is the repo id in the Yum config file and also the displayName
if displayName is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#id GoogleOsConfigGuestPolicies#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#display_name GoogleOsConfigGuestPolicies#display_name}

---

##### `GpgKeys`<sup>Optional</sup> <a name="GpgKeys" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum.property.gpgKeys"></a>

```go
GpgKeys *[]*string
```

- *Type:* *[]*string

URIs of GPG keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#gpg_keys GoogleOsConfigGuestPolicies#gpg_keys}

---

### GoogleOsConfigGuestPoliciesPackageRepositoriesZypper <a name="GoogleOsConfigGuestPoliciesPackageRepositoriesZypper" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper {
	BaseUrl: *string,
	Id: *string,
	DisplayName: *string,
	GpgKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | The location of the repository directory. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper.property.id">Id</a></code> | <code>*string</code> | A one word, unique name for this repository. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper.property.gpgKeys">GpgKeys</a></code> | <code>*[]*string</code> | URIs of GPG keys. |

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

The location of the repository directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#base_url GoogleOsConfigGuestPolicies#base_url}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper.property.id"></a>

```go
Id *string
```

- *Type:* *string

A one word, unique name for this repository.

This is the repo id in the zypper config file and also the displayName
if displayName is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#id GoogleOsConfigGuestPolicies#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#display_name GoogleOsConfigGuestPolicies#display_name}

---

##### `GpgKeys`<sup>Optional</sup> <a name="GpgKeys" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper.property.gpgKeys"></a>

```go
GpgKeys *[]*string
```

- *Type:* *[]*string

URIs of GPG keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#gpg_keys GoogleOsConfigGuestPolicies#gpg_keys}

---

### GoogleOsConfigGuestPoliciesPackages <a name="GoogleOsConfigGuestPoliciesPackages" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesPackages {
	Name: *string,
	DesiredState: *string,
	Manager: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackages.property.name">Name</a></code> | <code>*string</code> | The name of the package. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackages.property.desiredState">DesiredState</a></code> | <code>*string</code> | The desiredState the agent should maintain for this package. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackages.property.manager">Manager</a></code> | <code>*string</code> | Type of package manager that can be used to install this package. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackages.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the package.

A package is uniquely identified for conflict validation
by checking the package name and the manager(s) that the package targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#name GoogleOsConfigGuestPolicies#name}

---

##### `DesiredState`<sup>Optional</sup> <a name="DesiredState" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackages.property.desiredState"></a>

```go
DesiredState *string
```

- *Type:* *string

The desiredState the agent should maintain for this package.

The default is to ensure the package is installed. Possible values: ["INSTALLED", "UPDATED", "REMOVED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#desired_state GoogleOsConfigGuestPolicies#desired_state}

---

##### `Manager`<sup>Optional</sup> <a name="Manager" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackages.property.manager"></a>

```go
Manager *string
```

- *Type:* *string

Type of package manager that can be used to install this package.

If a system does not have the package manager,
the package is not installed or removed no error message is returned. By default, or if you specify ANY,
the agent attempts to install and remove this package using the default package manager.
This is useful when creating a policy that applies to different types of systems.
The default behavior is ANY. Default value: "ANY" Possible values: ["ANY", "APT", "YUM", "ZYPPER", "GOO"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#manager GoogleOsConfigGuestPolicies#manager}

---

### GoogleOsConfigGuestPoliciesRecipes <a name="GoogleOsConfigGuestPoliciesRecipes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipes {
	Name: *string,
	Artifacts: interface{},
	DesiredState: *string,
	InstallSteps: interface{},
	UpdateSteps: interface{},
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipes.property.name">Name</a></code> | <code>*string</code> | Unique identifier for the recipe. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipes.property.artifacts">Artifacts</a></code> | <code>interface{}</code> | artifacts block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipes.property.desiredState">DesiredState</a></code> | <code>*string</code> | Default is INSTALLED. The desired state the agent should maintain for this recipe. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipes.property.installSteps">InstallSteps</a></code> | <code>interface{}</code> | install_steps block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipes.property.updateSteps">UpdateSteps</a></code> | <code>interface{}</code> | update_steps block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipes.property.version">Version</a></code> | <code>*string</code> | The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78). |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique identifier for the recipe.

Only one recipe with a given name is installed on an instance.
Names are also used to identify resources which helps to determine whether guest policies have conflicts.
This means that requests to create multiple recipes with the same name and version are rejected since they
could potentially have conflicting assignments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#name GoogleOsConfigGuestPolicies#name}

---

##### `Artifacts`<sup>Optional</sup> <a name="Artifacts" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipes.property.artifacts"></a>

```go
Artifacts interface{}
```

- *Type:* interface{}

artifacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#artifacts GoogleOsConfigGuestPolicies#artifacts}

---

##### `DesiredState`<sup>Optional</sup> <a name="DesiredState" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipes.property.desiredState"></a>

```go
DesiredState *string
```

- *Type:* *string

Default is INSTALLED. The desired state the agent should maintain for this recipe.

INSTALLED: The software recipe is installed on the instance but won't be updated to new versions.
INSTALLED_KEEP_UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version,
if a higher version of the recipe is assigned to this instance.
REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected. Default value: "INSTALLED" Possible values: ["INSTALLED", "UPDATED", "REMOVED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#desired_state GoogleOsConfigGuestPolicies#desired_state}

---

##### `InstallSteps`<sup>Optional</sup> <a name="InstallSteps" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipes.property.installSteps"></a>

```go
InstallSteps interface{}
```

- *Type:* interface{}

install_steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#install_steps GoogleOsConfigGuestPolicies#install_steps}

---

##### `UpdateSteps`<sup>Optional</sup> <a name="UpdateSteps" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipes.property.updateSteps"></a>

```go
UpdateSteps interface{}
```

- *Type:* interface{}

update_steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#update_steps GoogleOsConfigGuestPolicies#update_steps}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipes.property.version"></a>

```go
Version *string
```

- *Type:* *string

The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#version GoogleOsConfigGuestPolicies#version}

---

### GoogleOsConfigGuestPoliciesRecipesArtifacts <a name="GoogleOsConfigGuestPoliciesRecipesArtifacts" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifacts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesArtifacts {
	Id: *string,
	AllowInsecure: interface{},
	Gcs: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs,
	Remote: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemote,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifacts.property.id">Id</a></code> | <code>*string</code> | Id of the artifact, which the installation and update steps of this recipe can reference. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifacts.property.allowInsecure">AllowInsecure</a></code> | <code>interface{}</code> | Defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifacts.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs">GoogleOsConfigGuestPoliciesRecipesArtifactsGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifacts.property.remote">Remote</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemote">GoogleOsConfigGuestPoliciesRecipesArtifactsRemote</a></code> | remote block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifacts.property.id"></a>

```go
Id *string
```

- *Type:* *string

Id of the artifact, which the installation and update steps of this recipe can reference.

Artifacts in a recipe cannot have the same id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#id GoogleOsConfigGuestPolicies#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `AllowInsecure`<sup>Optional</sup> <a name="AllowInsecure" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifacts.property.allowInsecure"></a>

```go
AllowInsecure interface{}
```

- *Type:* interface{}

Defaults to false.

When false, recipes are subject to validations based on the artifact type:
Remote: A checksum must be specified, and only protocols with transport-layer security are permitted.
GCS: An object generation number must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#allow_insecure GoogleOsConfigGuestPolicies#allow_insecure}

---

##### `Gcs`<sup>Optional</sup> <a name="Gcs" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifacts.property.gcs"></a>

```go
Gcs GoogleOsConfigGuestPoliciesRecipesArtifactsGcs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs">GoogleOsConfigGuestPoliciesRecipesArtifactsGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#gcs GoogleOsConfigGuestPolicies#gcs}

---

##### `Remote`<sup>Optional</sup> <a name="Remote" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifacts.property.remote"></a>

```go
Remote GoogleOsConfigGuestPoliciesRecipesArtifactsRemote
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemote">GoogleOsConfigGuestPoliciesRecipesArtifactsRemote</a>

remote block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#remote GoogleOsConfigGuestPolicies#remote}

---

### GoogleOsConfigGuestPoliciesRecipesArtifactsGcs <a name="GoogleOsConfigGuestPoliciesRecipesArtifactsGcs" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs {
	Bucket: *string,
	Generation: *f64,
	Object: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs.property.bucket">Bucket</a></code> | <code>*string</code> | Bucket of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567 this value would be my-bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs.property.generation">Generation</a></code> | <code>*f64</code> | Must be provided if allowInsecure is false. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs.property.object">Object</a></code> | <code>*string</code> | Name of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567 this value would be foo/bar. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Bucket of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567 this value would be my-bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#bucket GoogleOsConfigGuestPolicies#bucket}

---

##### `Generation`<sup>Optional</sup> <a name="Generation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs.property.generation"></a>

```go
Generation *f64
```

- *Type:* *f64

Must be provided if allowInsecure is false.

Generation number of the Google Cloud Storage object.
https://storage.googleapis.com/my-bucket/foo/bar#1234567 this value would be 1234567.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#generation GoogleOsConfigGuestPolicies#generation}

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs.property.object"></a>

```go
Object *string
```

- *Type:* *string

Name of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567 this value would be foo/bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#object GoogleOsConfigGuestPolicies#object}

---

### GoogleOsConfigGuestPoliciesRecipesArtifactsRemote <a name="GoogleOsConfigGuestPoliciesRecipesArtifactsRemote" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemote"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemote.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemote {
	CheckSum: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemote.property.checkSum">CheckSum</a></code> | <code>*string</code> | Must be provided if allowInsecure is false. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemote.property.uri">Uri</a></code> | <code>*string</code> | URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}. |

---

##### `CheckSum`<sup>Optional</sup> <a name="CheckSum" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemote.property.checkSum"></a>

```go
CheckSum *string
```

- *Type:* *string

Must be provided if allowInsecure is false.

SHA256 checksum in hex format, to compare to the checksum of the artifact.
If the checksum is not empty and it doesn't match the artifact then the recipe installation fails before running any
of the steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#check_sum GoogleOsConfigGuestPolicies#check_sum}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemote.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#uri GoogleOsConfigGuestPolicies#uri}

---

### GoogleOsConfigGuestPoliciesRecipesInstallSteps <a name="GoogleOsConfigGuestPoliciesRecipesInstallSteps" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps {
	ArchiveExtraction: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction,
	DpkgInstallation: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation,
	FileCopy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy,
	FileExec: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec,
	MsiInstallation: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation,
	RpmInstallation: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation,
	ScriptRun: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps.property.archiveExtraction">ArchiveExtraction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction">GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction</a></code> | archive_extraction block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps.property.dpkgInstallation">DpkgInstallation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation</a></code> | dpkg_installation block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps.property.fileCopy">FileCopy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy</a></code> | file_copy block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps.property.fileExec">FileExec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec</a></code> | file_exec block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps.property.msiInstallation">MsiInstallation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation</a></code> | msi_installation block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps.property.rpmInstallation">RpmInstallation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation</a></code> | rpm_installation block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps.property.scriptRun">ScriptRun</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun">GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun</a></code> | script_run block. |

---

##### `ArchiveExtraction`<sup>Optional</sup> <a name="ArchiveExtraction" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps.property.archiveExtraction"></a>

```go
ArchiveExtraction GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction">GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction</a>

archive_extraction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#archive_extraction GoogleOsConfigGuestPolicies#archive_extraction}

---

##### `DpkgInstallation`<sup>Optional</sup> <a name="DpkgInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps.property.dpkgInstallation"></a>

```go
DpkgInstallation GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation</a>

dpkg_installation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#dpkg_installation GoogleOsConfigGuestPolicies#dpkg_installation}

---

##### `FileCopy`<sup>Optional</sup> <a name="FileCopy" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps.property.fileCopy"></a>

```go
FileCopy GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy</a>

file_copy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#file_copy GoogleOsConfigGuestPolicies#file_copy}

---

##### `FileExec`<sup>Optional</sup> <a name="FileExec" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps.property.fileExec"></a>

```go
FileExec GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec</a>

file_exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#file_exec GoogleOsConfigGuestPolicies#file_exec}

---

##### `MsiInstallation`<sup>Optional</sup> <a name="MsiInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps.property.msiInstallation"></a>

```go
MsiInstallation GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation</a>

msi_installation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#msi_installation GoogleOsConfigGuestPolicies#msi_installation}

---

##### `RpmInstallation`<sup>Optional</sup> <a name="RpmInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps.property.rpmInstallation"></a>

```go
RpmInstallation GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation</a>

rpm_installation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#rpm_installation GoogleOsConfigGuestPolicies#rpm_installation}

---

##### `ScriptRun`<sup>Optional</sup> <a name="ScriptRun" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallSteps.property.scriptRun"></a>

```go
ScriptRun GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun">GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun</a>

script_run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#script_run GoogleOsConfigGuestPolicies#script_run}

---

### GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction <a name="GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction {
	ArtifactId: *string,
	Type: *string,
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction.property.artifactId">ArtifactId</a></code> | <code>*string</code> | The id of the relevant artifact in the recipe. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction.property.type">Type</a></code> | <code>*string</code> | The type of the archive to extract. Possible values: ["TAR", "TAR_GZIP", "TAR_BZIP", "TAR_LZMA", "TAR_XZ", "ZIP"]. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction.property.destination">Destination</a></code> | <code>*string</code> | Directory to extract archive to. Defaults to / on Linux or C:\ on Windows. |

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction.property.artifactId"></a>

```go
ArtifactId *string
```

- *Type:* *string

The id of the relevant artifact in the recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the archive to extract. Possible values: ["TAR", "TAR_GZIP", "TAR_BZIP", "TAR_LZMA", "TAR_XZ", "ZIP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#type GoogleOsConfigGuestPolicies#type}

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Directory to extract archive to. Defaults to / on Linux or C:\ on Windows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#destination GoogleOsConfigGuestPolicies#destination}

---

### GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation <a name="GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation {
	ArtifactId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation.property.artifactId">ArtifactId</a></code> | <code>*string</code> | The id of the relevant artifact in the recipe. |

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation.property.artifactId"></a>

```go
ArtifactId *string
```

- *Type:* *string

The id of the relevant artifact in the recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}

---

### GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy <a name="GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy {
	ArtifactId: *string,
	Destination: *string,
	Overwrite: interface{},
	Permissions: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy.property.artifactId">ArtifactId</a></code> | <code>*string</code> | The id of the relevant artifact in the recipe. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy.property.destination">Destination</a></code> | <code>*string</code> | The absolute path on the instance to put the file. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy.property.overwrite">Overwrite</a></code> | <code>interface{}</code> | Whether to allow this step to overwrite existing files.If this is false and the file already exists the file is not overwritten and the step is considered a success. Defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy.property.permissions">Permissions</a></code> | <code>*string</code> | Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). |

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy.property.artifactId"></a>

```go
ArtifactId *string
```

- *Type:* *string

The id of the relevant artifact in the recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

The absolute path on the instance to put the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#destination GoogleOsConfigGuestPolicies#destination}

---

##### `Overwrite`<sup>Optional</sup> <a name="Overwrite" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy.property.overwrite"></a>

```go
Overwrite interface{}
```

- *Type:* interface{}

Whether to allow this step to overwrite existing files.If this is false and the file already exists the file is not overwritten and the step is considered a success. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#overwrite GoogleOsConfigGuestPolicies#overwrite}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy.property.permissions"></a>

```go
Permissions *string
```

- *Type:* *string

Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility).

Each digit represents a three bit
number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one
bit corresponds to the execute permission. Default behavior is 755.

Below are some examples of permissions and their associated values:
read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#permissions GoogleOsConfigGuestPolicies#permissions}

---

### GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec <a name="GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec {
	AllowedExitCodes: *string,
	Args: *[]*string,
	ArtifactId: *string,
	LocalPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec.property.allowedExitCodes">AllowedExitCodes</a></code> | <code>*string</code> | A list of possible return values that the program can return to indicate a success. Defaults to [0]. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec.property.args">Args</a></code> | <code>*[]*string</code> | Arguments to be passed to the provided executable. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec.property.artifactId">ArtifactId</a></code> | <code>*string</code> | The id of the relevant artifact in the recipe. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec.property.localPath">LocalPath</a></code> | <code>*string</code> | The absolute path of the file on the local filesystem. |

---

##### `AllowedExitCodes`<sup>Optional</sup> <a name="AllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec.property.allowedExitCodes"></a>

```go
AllowedExitCodes *string
```

- *Type:* *string

A list of possible return values that the program can return to indicate a success. Defaults to [0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Arguments to be passed to the provided executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#args GoogleOsConfigGuestPolicies#args}

---

##### `ArtifactId`<sup>Optional</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec.property.artifactId"></a>

```go
ArtifactId *string
```

- *Type:* *string

The id of the relevant artifact in the recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

The absolute path of the file on the local filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#local_path GoogleOsConfigGuestPolicies#local_path}

---

### GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation <a name="GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation {
	ArtifactId: *string,
	AllowedExitCodes: *[]*f64,
	Flags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation.property.artifactId">ArtifactId</a></code> | <code>*string</code> | The id of the relevant artifact in the recipe. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation.property.allowedExitCodes">AllowedExitCodes</a></code> | <code>*[]*f64</code> | Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation.property.flags">Flags</a></code> | <code>*[]*string</code> | The flags to use when installing the MSI. Defaults to the install flag. |

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation.property.artifactId"></a>

```go
ArtifactId *string
```

- *Type:* *string

The id of the relevant artifact in the recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}

---

##### `AllowedExitCodes`<sup>Optional</sup> <a name="AllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation.property.allowedExitCodes"></a>

```go
AllowedExitCodes *[]*f64
```

- *Type:* *[]*f64

Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}

---

##### `Flags`<sup>Optional</sup> <a name="Flags" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation.property.flags"></a>

```go
Flags *[]*string
```

- *Type:* *[]*string

The flags to use when installing the MSI. Defaults to the install flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#flags GoogleOsConfigGuestPolicies#flags}

---

### GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation <a name="GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation {
	ArtifactId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation.property.artifactId">ArtifactId</a></code> | <code>*string</code> | The id of the relevant artifact in the recipe. |

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation.property.artifactId"></a>

```go
ArtifactId *string
```

- *Type:* *string

The id of the relevant artifact in the recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}

---

### GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun <a name="GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun {
	Script: *string,
	AllowedExitCodes: *[]*f64,
	Interpreter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun.property.script">Script</a></code> | <code>*string</code> | The shell script to be executed. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun.property.allowedExitCodes">AllowedExitCodes</a></code> | <code>*[]*f64</code> | Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun.property.interpreter">Interpreter</a></code> | <code>*string</code> | The script interpreter to use to run the script. |

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun.property.script"></a>

```go
Script *string
```

- *Type:* *string

The shell script to be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#script GoogleOsConfigGuestPolicies#script}

---

##### `AllowedExitCodes`<sup>Optional</sup> <a name="AllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun.property.allowedExitCodes"></a>

```go
AllowedExitCodes *[]*f64
```

- *Type:* *[]*f64

Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}

---

##### `Interpreter`<sup>Optional</sup> <a name="Interpreter" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun.property.interpreter"></a>

```go
Interpreter *string
```

- *Type:* *string

The script interpreter to use to run the script.

If no interpreter is specified the script is executed directly,
which likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#interpreter GoogleOsConfigGuestPolicies#interpreter}

---

### GoogleOsConfigGuestPoliciesRecipesUpdateSteps <a name="GoogleOsConfigGuestPoliciesRecipesUpdateSteps" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps {
	ArchiveExtraction: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction,
	DpkgInstallation: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation,
	FileCopy: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy,
	FileExec: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec,
	MsiInstallation: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation,
	RpmInstallation: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation,
	ScriptRun: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps.property.archiveExtraction">ArchiveExtraction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction">GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction</a></code> | archive_extraction block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps.property.dpkgInstallation">DpkgInstallation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation</a></code> | dpkg_installation block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps.property.fileCopy">FileCopy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy</a></code> | file_copy block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps.property.fileExec">FileExec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec</a></code> | file_exec block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps.property.msiInstallation">MsiInstallation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation</a></code> | msi_installation block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps.property.rpmInstallation">RpmInstallation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation</a></code> | rpm_installation block. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps.property.scriptRun">ScriptRun</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun">GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun</a></code> | script_run block. |

---

##### `ArchiveExtraction`<sup>Optional</sup> <a name="ArchiveExtraction" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps.property.archiveExtraction"></a>

```go
ArchiveExtraction GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction">GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction</a>

archive_extraction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#archive_extraction GoogleOsConfigGuestPolicies#archive_extraction}

---

##### `DpkgInstallation`<sup>Optional</sup> <a name="DpkgInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps.property.dpkgInstallation"></a>

```go
DpkgInstallation GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation</a>

dpkg_installation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#dpkg_installation GoogleOsConfigGuestPolicies#dpkg_installation}

---

##### `FileCopy`<sup>Optional</sup> <a name="FileCopy" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps.property.fileCopy"></a>

```go
FileCopy GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy</a>

file_copy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#file_copy GoogleOsConfigGuestPolicies#file_copy}

---

##### `FileExec`<sup>Optional</sup> <a name="FileExec" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps.property.fileExec"></a>

```go
FileExec GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec</a>

file_exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#file_exec GoogleOsConfigGuestPolicies#file_exec}

---

##### `MsiInstallation`<sup>Optional</sup> <a name="MsiInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps.property.msiInstallation"></a>

```go
MsiInstallation GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation</a>

msi_installation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#msi_installation GoogleOsConfigGuestPolicies#msi_installation}

---

##### `RpmInstallation`<sup>Optional</sup> <a name="RpmInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps.property.rpmInstallation"></a>

```go
RpmInstallation GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation</a>

rpm_installation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#rpm_installation GoogleOsConfigGuestPolicies#rpm_installation}

---

##### `ScriptRun`<sup>Optional</sup> <a name="ScriptRun" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateSteps.property.scriptRun"></a>

```go
ScriptRun GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun">GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun</a>

script_run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#script_run GoogleOsConfigGuestPolicies#script_run}

---

### GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction <a name="GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction {
	ArtifactId: *string,
	Type: *string,
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction.property.artifactId">ArtifactId</a></code> | <code>*string</code> | The id of the relevant artifact in the recipe. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction.property.type">Type</a></code> | <code>*string</code> | The type of the archive to extract. Possible values: ["TAR", "TAR_GZIP", "TAR_BZIP", "TAR_LZMA", "TAR_XZ", "ZIP"]. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction.property.destination">Destination</a></code> | <code>*string</code> | Directory to extract archive to. Defaults to / on Linux or C:\ on Windows. |

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction.property.artifactId"></a>

```go
ArtifactId *string
```

- *Type:* *string

The id of the relevant artifact in the recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the archive to extract. Possible values: ["TAR", "TAR_GZIP", "TAR_BZIP", "TAR_LZMA", "TAR_XZ", "ZIP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#type GoogleOsConfigGuestPolicies#type}

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Directory to extract archive to. Defaults to / on Linux or C:\ on Windows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#destination GoogleOsConfigGuestPolicies#destination}

---

### GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation <a name="GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation {
	ArtifactId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation.property.artifactId">ArtifactId</a></code> | <code>*string</code> | The id of the relevant artifact in the recipe. |

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation.property.artifactId"></a>

```go
ArtifactId *string
```

- *Type:* *string

The id of the relevant artifact in the recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}

---

### GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy <a name="GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy {
	ArtifactId: *string,
	Destination: *string,
	Overwrite: interface{},
	Permissions: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy.property.artifactId">ArtifactId</a></code> | <code>*string</code> | The id of the relevant artifact in the recipe. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy.property.destination">Destination</a></code> | <code>*string</code> | The absolute path on the instance to put the file. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy.property.overwrite">Overwrite</a></code> | <code>interface{}</code> | Whether to allow this step to overwrite existing files.If this is false and the file already exists the file is not overwritten and the step is considered a success. Defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy.property.permissions">Permissions</a></code> | <code>*string</code> | Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). |

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy.property.artifactId"></a>

```go
ArtifactId *string
```

- *Type:* *string

The id of the relevant artifact in the recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

The absolute path on the instance to put the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#destination GoogleOsConfigGuestPolicies#destination}

---

##### `Overwrite`<sup>Optional</sup> <a name="Overwrite" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy.property.overwrite"></a>

```go
Overwrite interface{}
```

- *Type:* interface{}

Whether to allow this step to overwrite existing files.If this is false and the file already exists the file is not overwritten and the step is considered a success. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#overwrite GoogleOsConfigGuestPolicies#overwrite}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy.property.permissions"></a>

```go
Permissions *string
```

- *Type:* *string

Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility).

Each digit represents a three bit
number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one
bit corresponds to the execute permission. Default behavior is 755.

Below are some examples of permissions and their associated values:
read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#permissions GoogleOsConfigGuestPolicies#permissions}

---

### GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec <a name="GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec {
	AllowedExitCodes: *[]*f64,
	Args: *[]*string,
	ArtifactId: *string,
	LocalPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec.property.allowedExitCodes">AllowedExitCodes</a></code> | <code>*[]*f64</code> | A list of possible return values that the program can return to indicate a success. Defaults to [0]. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec.property.args">Args</a></code> | <code>*[]*string</code> | Arguments to be passed to the provided executable. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec.property.artifactId">ArtifactId</a></code> | <code>*string</code> | The id of the relevant artifact in the recipe. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec.property.localPath">LocalPath</a></code> | <code>*string</code> | The absolute path of the file on the local filesystem. |

---

##### `AllowedExitCodes`<sup>Optional</sup> <a name="AllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec.property.allowedExitCodes"></a>

```go
AllowedExitCodes *[]*f64
```

- *Type:* *[]*f64

A list of possible return values that the program can return to indicate a success. Defaults to [0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Arguments to be passed to the provided executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#args GoogleOsConfigGuestPolicies#args}

---

##### `ArtifactId`<sup>Optional</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec.property.artifactId"></a>

```go
ArtifactId *string
```

- *Type:* *string

The id of the relevant artifact in the recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

The absolute path of the file on the local filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#local_path GoogleOsConfigGuestPolicies#local_path}

---

### GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation <a name="GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation {
	ArtifactId: *string,
	AllowedExitCodes: *[]*f64,
	Flags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation.property.artifactId">ArtifactId</a></code> | <code>*string</code> | The id of the relevant artifact in the recipe. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation.property.allowedExitCodes">AllowedExitCodes</a></code> | <code>*[]*f64</code> | Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation.property.flags">Flags</a></code> | <code>*[]*string</code> | The flags to use when installing the MSI. Defaults to the install flag. |

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation.property.artifactId"></a>

```go
ArtifactId *string
```

- *Type:* *string

The id of the relevant artifact in the recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}

---

##### `AllowedExitCodes`<sup>Optional</sup> <a name="AllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation.property.allowedExitCodes"></a>

```go
AllowedExitCodes *[]*f64
```

- *Type:* *[]*f64

Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}

---

##### `Flags`<sup>Optional</sup> <a name="Flags" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation.property.flags"></a>

```go
Flags *[]*string
```

- *Type:* *[]*string

The flags to use when installing the MSI. Defaults to the install flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#flags GoogleOsConfigGuestPolicies#flags}

---

### GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation <a name="GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation {
	ArtifactId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation.property.artifactId">ArtifactId</a></code> | <code>*string</code> | The id of the relevant artifact in the recipe. |

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation.property.artifactId"></a>

```go
ArtifactId *string
```

- *Type:* *string

The id of the relevant artifact in the recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}

---

### GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun <a name="GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun {
	Script: *string,
	AllowedExitCodes: *[]*f64,
	Interpreter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun.property.script">Script</a></code> | <code>*string</code> | The shell script to be executed. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun.property.allowedExitCodes">AllowedExitCodes</a></code> | <code>*[]*f64</code> | Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun.property.interpreter">Interpreter</a></code> | <code>*string</code> | The script interpreter to use to run the script. |

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun.property.script"></a>

```go
Script *string
```

- *Type:* *string

The shell script to be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#script GoogleOsConfigGuestPolicies#script}

---

##### `AllowedExitCodes`<sup>Optional</sup> <a name="AllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun.property.allowedExitCodes"></a>

```go
AllowedExitCodes *[]*f64
```

- *Type:* *[]*f64

Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}

---

##### `Interpreter`<sup>Optional</sup> <a name="Interpreter" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun.property.interpreter"></a>

```go
Interpreter *string
```

- *Type:* *string

The script interpreter to use to run the script.

If no interpreter is specified the script is executed directly,
which likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#interpreter GoogleOsConfigGuestPolicies#interpreter}

---

### GoogleOsConfigGuestPoliciesTimeouts <a name="GoogleOsConfigGuestPoliciesTimeouts" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

&googleosconfigguestpolicies.GoogleOsConfigGuestPoliciesTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#create GoogleOsConfigGuestPolicies#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#delete GoogleOsConfigGuestPolicies#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#update GoogleOsConfigGuestPolicies#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#create GoogleOsConfigGuestPolicies#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#delete GoogleOsConfigGuestPolicies#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_os_config_guest_policies#update GoogleOsConfigGuestPolicies#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList <a name="GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesAssignmentGroupLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.get"></a>

```go
func Get(index *f64) GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference <a name="GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOsConfigGuestPoliciesAssignmentOsTypesList <a name="GoogleOsConfigGuestPoliciesAssignmentOsTypesList" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesAssignmentOsTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleOsConfigGuestPoliciesAssignmentOsTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.get"></a>

```go
func Get(index *f64) GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference <a name="GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.resetOsArchitecture">ResetOsArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.resetOsShortName">ResetOsShortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.resetOsVersion">ResetOsVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOsArchitecture` <a name="ResetOsArchitecture" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.resetOsArchitecture"></a>

```go
func ResetOsArchitecture()
```

##### `ResetOsShortName` <a name="ResetOsShortName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.resetOsShortName"></a>

```go
func ResetOsShortName()
```

##### `ResetOsVersion` <a name="ResetOsVersion" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.resetOsVersion"></a>

```go
func ResetOsVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.osArchitectureInput">OsArchitectureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.osShortNameInput">OsShortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.osVersionInput">OsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.osArchitecture">OsArchitecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.osShortName">OsShortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.osVersion">OsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OsArchitectureInput`<sup>Optional</sup> <a name="OsArchitectureInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.osArchitectureInput"></a>

```go
func OsArchitectureInput() *string
```

- *Type:* *string

---

##### `OsShortNameInput`<sup>Optional</sup> <a name="OsShortNameInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.osShortNameInput"></a>

```go
func OsShortNameInput() *string
```

- *Type:* *string

---

##### `OsVersionInput`<sup>Optional</sup> <a name="OsVersionInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.osVersionInput"></a>

```go
func OsVersionInput() *string
```

- *Type:* *string

---

##### `OsArchitecture`<sup>Required</sup> <a name="OsArchitecture" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.osArchitecture"></a>

```go
func OsArchitecture() *string
```

- *Type:* *string

---

##### `OsShortName`<sup>Required</sup> <a name="OsShortName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.osShortName"></a>

```go
func OsShortName() *string
```

- *Type:* *string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.osVersion"></a>

```go
func OsVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOsConfigGuestPoliciesAssignmentOutputReference <a name="GoogleOsConfigGuestPoliciesAssignmentOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesAssignmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesAssignmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.putGroupLabels">PutGroupLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.putOsTypes">PutOsTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.resetGroupLabels">ResetGroupLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.resetInstanceNamePrefixes">ResetInstanceNamePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.resetInstances">ResetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.resetOsTypes">ResetOsTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.resetZones">ResetZones</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroupLabels` <a name="PutGroupLabels" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.putGroupLabels"></a>

```go
func PutGroupLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.putGroupLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOsTypes` <a name="PutOsTypes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.putOsTypes"></a>

```go
func PutOsTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.putOsTypes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGroupLabels` <a name="ResetGroupLabels" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.resetGroupLabels"></a>

```go
func ResetGroupLabels()
```

##### `ResetInstanceNamePrefixes` <a name="ResetInstanceNamePrefixes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.resetInstanceNamePrefixes"></a>

```go
func ResetInstanceNamePrefixes()
```

##### `ResetInstances` <a name="ResetInstances" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.resetInstances"></a>

```go
func ResetInstances()
```

##### `ResetOsTypes` <a name="ResetOsTypes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.resetOsTypes"></a>

```go
func ResetOsTypes()
```

##### `ResetZones` <a name="ResetZones" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.resetZones"></a>

```go
func ResetZones()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.groupLabels">GroupLabels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList">GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.osTypes">OsTypes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList">GoogleOsConfigGuestPoliciesAssignmentOsTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.groupLabelsInput">GroupLabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.instanceNamePrefixesInput">InstanceNamePrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.instancesInput">InstancesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.osTypesInput">OsTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.zonesInput">ZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.instanceNamePrefixes">InstanceNamePrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.instances">Instances</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment">GoogleOsConfigGuestPoliciesAssignment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupLabels`<sup>Required</sup> <a name="GroupLabels" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.groupLabels"></a>

```go
func GroupLabels() GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList">GoogleOsConfigGuestPoliciesAssignmentGroupLabelsList</a>

---

##### `OsTypes`<sup>Required</sup> <a name="OsTypes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.osTypes"></a>

```go
func OsTypes() GoogleOsConfigGuestPoliciesAssignmentOsTypesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOsTypesList">GoogleOsConfigGuestPoliciesAssignmentOsTypesList</a>

---

##### `GroupLabelsInput`<sup>Optional</sup> <a name="GroupLabelsInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.groupLabelsInput"></a>

```go
func GroupLabelsInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceNamePrefixesInput`<sup>Optional</sup> <a name="InstanceNamePrefixesInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.instanceNamePrefixesInput"></a>

```go
func InstanceNamePrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.instancesInput"></a>

```go
func InstancesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OsTypesInput`<sup>Optional</sup> <a name="OsTypesInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.osTypesInput"></a>

```go
func OsTypesInput() interface{}
```

- *Type:* interface{}

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.zonesInput"></a>

```go
func ZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `InstanceNamePrefixes`<sup>Required</sup> <a name="InstanceNamePrefixes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.instanceNamePrefixes"></a>

```go
func InstanceNamePrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.instances"></a>

```go
func Instances() *[]*string
```

- *Type:* *[]*string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignmentOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesAssignment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesAssignment">GoogleOsConfigGuestPoliciesAssignment</a>

---


### GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference <a name="GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.resetArchiveType">ResetArchiveType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.resetGpgKey">ResetGpgKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveType` <a name="ResetArchiveType" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.resetArchiveType"></a>

```go
func ResetArchiveType()
```

##### `ResetGpgKey` <a name="ResetGpgKey" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.resetGpgKey"></a>

```go
func ResetGpgKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.archiveTypeInput">ArchiveTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.componentsInput">ComponentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.distributionInput">DistributionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.gpgKeyInput">GpgKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.archiveType">ArchiveType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.components">Components</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.distribution">Distribution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.gpgKey">GpgKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt">GoogleOsConfigGuestPoliciesPackageRepositoriesApt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveTypeInput`<sup>Optional</sup> <a name="ArchiveTypeInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.archiveTypeInput"></a>

```go
func ArchiveTypeInput() *string
```

- *Type:* *string

---

##### `ComponentsInput`<sup>Optional</sup> <a name="ComponentsInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.componentsInput"></a>

```go
func ComponentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DistributionInput`<sup>Optional</sup> <a name="DistributionInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.distributionInput"></a>

```go
func DistributionInput() *string
```

- *Type:* *string

---

##### `GpgKeyInput`<sup>Optional</sup> <a name="GpgKeyInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.gpgKeyInput"></a>

```go
func GpgKeyInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `ArchiveType`<sup>Required</sup> <a name="ArchiveType" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.archiveType"></a>

```go
func ArchiveType() *string
```

- *Type:* *string

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.components"></a>

```go
func Components() *[]*string
```

- *Type:* *[]*string

---

##### `Distribution`<sup>Required</sup> <a name="Distribution" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.distribution"></a>

```go
func Distribution() *string
```

- *Type:* *string

---

##### `GpgKey`<sup>Required</sup> <a name="GpgKey" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.gpgKey"></a>

```go
func GpgKey() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesPackageRepositoriesApt
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt">GoogleOsConfigGuestPoliciesPackageRepositoriesApt</a>

---


### GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference <a name="GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGoo">GoogleOsConfigGuestPoliciesPackageRepositoriesGoo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesPackageRepositoriesGoo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGoo">GoogleOsConfigGuestPoliciesPackageRepositoriesGoo</a>

---


### GoogleOsConfigGuestPoliciesPackageRepositoriesList <a name="GoogleOsConfigGuestPoliciesPackageRepositoriesList" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesPackageRepositoriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleOsConfigGuestPoliciesPackageRepositoriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.get"></a>

```go
func Get(index *f64) GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference <a name="GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.putApt">PutApt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.putGoo">PutGoo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.putYum">PutYum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.putZypper">PutZypper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.resetApt">ResetApt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.resetGoo">ResetGoo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.resetYum">ResetYum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.resetZypper">ResetZypper</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApt` <a name="PutApt" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.putApt"></a>

```go
func PutApt(value GoogleOsConfigGuestPoliciesPackageRepositoriesApt)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.putApt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt">GoogleOsConfigGuestPoliciesPackageRepositoriesApt</a>

---

##### `PutGoo` <a name="PutGoo" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.putGoo"></a>

```go
func PutGoo(value GoogleOsConfigGuestPoliciesPackageRepositoriesGoo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.putGoo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGoo">GoogleOsConfigGuestPoliciesPackageRepositoriesGoo</a>

---

##### `PutYum` <a name="PutYum" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.putYum"></a>

```go
func PutYum(value GoogleOsConfigGuestPoliciesPackageRepositoriesYum)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.putYum.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum">GoogleOsConfigGuestPoliciesPackageRepositoriesYum</a>

---

##### `PutZypper` <a name="PutZypper" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.putZypper"></a>

```go
func PutZypper(value GoogleOsConfigGuestPoliciesPackageRepositoriesZypper)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.putZypper.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper">GoogleOsConfigGuestPoliciesPackageRepositoriesZypper</a>

---

##### `ResetApt` <a name="ResetApt" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.resetApt"></a>

```go
func ResetApt()
```

##### `ResetGoo` <a name="ResetGoo" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.resetGoo"></a>

```go
func ResetGoo()
```

##### `ResetYum` <a name="ResetYum" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.resetYum"></a>

```go
func ResetYum()
```

##### `ResetZypper` <a name="ResetZypper" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.resetZypper"></a>

```go
func ResetZypper()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.apt">Apt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference">GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.goo">Goo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference">GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.yum">Yum</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference">GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.zypper">Zypper</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference">GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.aptInput">AptInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt">GoogleOsConfigGuestPoliciesPackageRepositoriesApt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.gooInput">GooInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGoo">GoogleOsConfigGuestPoliciesPackageRepositoriesGoo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.yumInput">YumInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum">GoogleOsConfigGuestPoliciesPackageRepositoriesYum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.zypperInput">ZypperInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper">GoogleOsConfigGuestPoliciesPackageRepositoriesZypper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Apt`<sup>Required</sup> <a name="Apt" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.apt"></a>

```go
func Apt() GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference">GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference</a>

---

##### `Goo`<sup>Required</sup> <a name="Goo" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.goo"></a>

```go
func Goo() GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference">GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference</a>

---

##### `Yum`<sup>Required</sup> <a name="Yum" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.yum"></a>

```go
func Yum() GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference">GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference</a>

---

##### `Zypper`<sup>Required</sup> <a name="Zypper" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.zypper"></a>

```go
func Zypper() GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference">GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference</a>

---

##### `AptInput`<sup>Optional</sup> <a name="AptInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.aptInput"></a>

```go
func AptInput() GoogleOsConfigGuestPoliciesPackageRepositoriesApt
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesApt">GoogleOsConfigGuestPoliciesPackageRepositoriesApt</a>

---

##### `GooInput`<sup>Optional</sup> <a name="GooInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.gooInput"></a>

```go
func GooInput() GoogleOsConfigGuestPoliciesPackageRepositoriesGoo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesGoo">GoogleOsConfigGuestPoliciesPackageRepositoriesGoo</a>

---

##### `YumInput`<sup>Optional</sup> <a name="YumInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.yumInput"></a>

```go
func YumInput() GoogleOsConfigGuestPoliciesPackageRepositoriesYum
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum">GoogleOsConfigGuestPoliciesPackageRepositoriesYum</a>

---

##### `ZypperInput`<sup>Optional</sup> <a name="ZypperInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.zypperInput"></a>

```go
func ZypperInput() GoogleOsConfigGuestPoliciesPackageRepositoriesZypper
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper">GoogleOsConfigGuestPoliciesPackageRepositoriesZypper</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference <a name="GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.resetGpgKeys">ResetGpgKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetGpgKeys` <a name="ResetGpgKeys" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.resetGpgKeys"></a>

```go
func ResetGpgKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.gpgKeysInput">GpgKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.gpgKeys">GpgKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum">GoogleOsConfigGuestPoliciesPackageRepositoriesYum</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GpgKeysInput`<sup>Optional</sup> <a name="GpgKeysInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.gpgKeysInput"></a>

```go
func GpgKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `GpgKeys`<sup>Required</sup> <a name="GpgKeys" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.gpgKeys"></a>

```go
func GpgKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesPackageRepositoriesYum
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesYum">GoogleOsConfigGuestPoliciesPackageRepositoriesYum</a>

---


### GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference <a name="GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.resetGpgKeys">ResetGpgKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetGpgKeys` <a name="ResetGpgKeys" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.resetGpgKeys"></a>

```go
func ResetGpgKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.gpgKeysInput">GpgKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.gpgKeys">GpgKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper">GoogleOsConfigGuestPoliciesPackageRepositoriesZypper</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GpgKeysInput`<sup>Optional</sup> <a name="GpgKeysInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.gpgKeysInput"></a>

```go
func GpgKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `GpgKeys`<sup>Required</sup> <a name="GpgKeys" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.gpgKeys"></a>

```go
func GpgKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesPackageRepositoriesZypper
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackageRepositoriesZypper">GoogleOsConfigGuestPoliciesPackageRepositoriesZypper</a>

---


### GoogleOsConfigGuestPoliciesPackagesList <a name="GoogleOsConfigGuestPoliciesPackagesList" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesPackagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleOsConfigGuestPoliciesPackagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.get"></a>

```go
func Get(index *f64) GoogleOsConfigGuestPoliciesPackagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOsConfigGuestPoliciesPackagesOutputReference <a name="GoogleOsConfigGuestPoliciesPackagesOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesPackagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleOsConfigGuestPoliciesPackagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.resetDesiredState">ResetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.resetManager">ResetManager</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDesiredState` <a name="ResetDesiredState" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.resetDesiredState"></a>

```go
func ResetDesiredState()
```

##### `ResetManager` <a name="ResetManager" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.resetManager"></a>

```go
func ResetManager()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.desiredStateInput">DesiredStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.managerInput">ManagerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.manager">Manager</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.desiredStateInput"></a>

```go
func DesiredStateInput() *string
```

- *Type:* *string

---

##### `ManagerInput`<sup>Optional</sup> <a name="ManagerInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.managerInput"></a>

```go
func ManagerInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `Manager`<sup>Required</sup> <a name="Manager" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.manager"></a>

```go
func Manager() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesPackagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.resetGeneration">ResetGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.resetObject">ResetObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetGeneration` <a name="ResetGeneration" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.resetGeneration"></a>

```go
func ResetGeneration()
```

##### `ResetObject` <a name="ResetObject" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.resetObject"></a>

```go
func ResetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.generationInput">GenerationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs">GoogleOsConfigGuestPoliciesRecipesArtifactsGcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `GenerationInput`<sup>Optional</sup> <a name="GenerationInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.generationInput"></a>

```go
func GenerationInput() *f64
```

- *Type:* *f64

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesRecipesArtifactsGcs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs">GoogleOsConfigGuestPoliciesRecipesArtifactsGcs</a>

---


### GoogleOsConfigGuestPoliciesRecipesArtifactsList <a name="GoogleOsConfigGuestPoliciesRecipesArtifactsList" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesArtifactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleOsConfigGuestPoliciesRecipesArtifactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.get"></a>

```go
func Get(index *f64) GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.putGcs">PutGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.putRemote">PutRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.resetAllowInsecure">ResetAllowInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.resetGcs">ResetGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.resetRemote">ResetRemote</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcs` <a name="PutGcs" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.putGcs"></a>

```go
func PutGcs(value GoogleOsConfigGuestPoliciesRecipesArtifactsGcs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs">GoogleOsConfigGuestPoliciesRecipesArtifactsGcs</a>

---

##### `PutRemote` <a name="PutRemote" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.putRemote"></a>

```go
func PutRemote(value GoogleOsConfigGuestPoliciesRecipesArtifactsRemote)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.putRemote.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemote">GoogleOsConfigGuestPoliciesRecipesArtifactsRemote</a>

---

##### `ResetAllowInsecure` <a name="ResetAllowInsecure" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.resetAllowInsecure"></a>

```go
func ResetAllowInsecure()
```

##### `ResetGcs` <a name="ResetGcs" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.resetGcs"></a>

```go
func ResetGcs()
```

##### `ResetRemote` <a name="ResetRemote" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.resetRemote"></a>

```go
func ResetRemote()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference">GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.remote">Remote</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference">GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.allowInsecureInput">AllowInsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.gcsInput">GcsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs">GoogleOsConfigGuestPoliciesRecipesArtifactsGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.remoteInput">RemoteInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemote">GoogleOsConfigGuestPoliciesRecipesArtifactsRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.allowInsecure">AllowInsecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Gcs`<sup>Required</sup> <a name="Gcs" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.gcs"></a>

```go
func Gcs() GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference">GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference</a>

---

##### `Remote`<sup>Required</sup> <a name="Remote" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.remote"></a>

```go
func Remote() GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference">GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference</a>

---

##### `AllowInsecureInput`<sup>Optional</sup> <a name="AllowInsecureInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.allowInsecureInput"></a>

```go
func AllowInsecureInput() interface{}
```

- *Type:* interface{}

---

##### `GcsInput`<sup>Optional</sup> <a name="GcsInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.gcsInput"></a>

```go
func GcsInput() GoogleOsConfigGuestPoliciesRecipesArtifactsGcs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsGcs">GoogleOsConfigGuestPoliciesRecipesArtifactsGcs</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RemoteInput`<sup>Optional</sup> <a name="RemoteInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.remoteInput"></a>

```go
func RemoteInput() GoogleOsConfigGuestPoliciesRecipesArtifactsRemote
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemote">GoogleOsConfigGuestPoliciesRecipesArtifactsRemote</a>

---

##### `AllowInsecure`<sup>Required</sup> <a name="AllowInsecure" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.allowInsecure"></a>

```go
func AllowInsecure() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.resetCheckSum">ResetCheckSum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCheckSum` <a name="ResetCheckSum" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.resetCheckSum"></a>

```go
func ResetCheckSum()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.property.checkSumInput">CheckSumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.property.checkSum">CheckSum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemote">GoogleOsConfigGuestPoliciesRecipesArtifactsRemote</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckSumInput`<sup>Optional</sup> <a name="CheckSumInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.property.checkSumInput"></a>

```go
func CheckSumInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `CheckSum`<sup>Required</sup> <a name="CheckSum" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.property.checkSum"></a>

```go
func CheckSum() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesRecipesArtifactsRemote
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsRemote">GoogleOsConfigGuestPoliciesRecipesArtifactsRemote</a>

---


### GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.resetDestination"></a>

```go
func ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction">GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.artifactIdInput"></a>

```go
func ArtifactIdInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction">GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction</a>

---


### GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.property.artifactIdInput"></a>

```go
func ArtifactIdInput() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation</a>

---


### GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.resetOverwrite">ResetOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOverwrite` <a name="ResetOverwrite" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.resetOverwrite"></a>

```go
func ResetOverwrite()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.resetPermissions"></a>

```go
func ResetPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.overwriteInput">OverwriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.overwrite">Overwrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.permissions">Permissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.artifactIdInput"></a>

```go
func ArtifactIdInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `OverwriteInput`<sup>Optional</sup> <a name="OverwriteInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.overwriteInput"></a>

```go
func OverwriteInput() interface{}
```

- *Type:* interface{}

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Overwrite`<sup>Required</sup> <a name="Overwrite" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.overwrite"></a>

```go
func Overwrite() interface{}
```

- *Type:* interface{}

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.permissions"></a>

```go
func Permissions() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy</a>

---


### GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.resetAllowedExitCodes">ResetAllowedExitCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.resetArtifactId">ResetArtifactId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedExitCodes` <a name="ResetAllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.resetAllowedExitCodes"></a>

```go
func ResetAllowedExitCodes()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetArtifactId` <a name="ResetArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.resetArtifactId"></a>

```go
func ResetArtifactId()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.allowedExitCodesInput">AllowedExitCodesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.allowedExitCodes">AllowedExitCodes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedExitCodesInput`<sup>Optional</sup> <a name="AllowedExitCodesInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.allowedExitCodesInput"></a>

```go
func AllowedExitCodesInput() *string
```

- *Type:* *string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.artifactIdInput"></a>

```go
func ArtifactIdInput() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `AllowedExitCodes`<sup>Required</sup> <a name="AllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.allowedExitCodes"></a>

```go
func AllowedExitCodes() *string
```

- *Type:* *string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec</a>

---


### GoogleOsConfigGuestPoliciesRecipesInstallStepsList <a name="GoogleOsConfigGuestPoliciesRecipesInstallStepsList" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesInstallStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleOsConfigGuestPoliciesRecipesInstallStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.get"></a>

```go
func Get(index *f64) GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.resetAllowedExitCodes">ResetAllowedExitCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.resetFlags">ResetFlags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedExitCodes` <a name="ResetAllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.resetAllowedExitCodes"></a>

```go
func ResetAllowedExitCodes()
```

##### `ResetFlags` <a name="ResetFlags" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.resetFlags"></a>

```go
func ResetFlags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.allowedExitCodesInput">AllowedExitCodesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.flagsInput">FlagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.allowedExitCodes">AllowedExitCodes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.flags">Flags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedExitCodesInput`<sup>Optional</sup> <a name="AllowedExitCodesInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.allowedExitCodesInput"></a>

```go
func AllowedExitCodesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.artifactIdInput"></a>

```go
func ArtifactIdInput() *string
```

- *Type:* *string

---

##### `FlagsInput`<sup>Optional</sup> <a name="FlagsInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.flagsInput"></a>

```go
func FlagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedExitCodes`<sup>Required</sup> <a name="AllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.allowedExitCodes"></a>

```go
func AllowedExitCodes() *[]*f64
```

- *Type:* *[]*f64

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.flags"></a>

```go
func Flags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation</a>

---


### GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putArchiveExtraction">PutArchiveExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putDpkgInstallation">PutDpkgInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putFileCopy">PutFileCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putFileExec">PutFileExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putMsiInstallation">PutMsiInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putRpmInstallation">PutRpmInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putScriptRun">PutScriptRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resetArchiveExtraction">ResetArchiveExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resetDpkgInstallation">ResetDpkgInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resetFileCopy">ResetFileCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resetFileExec">ResetFileExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resetMsiInstallation">ResetMsiInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resetRpmInstallation">ResetRpmInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resetScriptRun">ResetScriptRun</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutArchiveExtraction` <a name="PutArchiveExtraction" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putArchiveExtraction"></a>

```go
func PutArchiveExtraction(value GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putArchiveExtraction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction">GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction</a>

---

##### `PutDpkgInstallation` <a name="PutDpkgInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putDpkgInstallation"></a>

```go
func PutDpkgInstallation(value GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putDpkgInstallation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation</a>

---

##### `PutFileCopy` <a name="PutFileCopy" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putFileCopy"></a>

```go
func PutFileCopy(value GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putFileCopy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy</a>

---

##### `PutFileExec` <a name="PutFileExec" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putFileExec"></a>

```go
func PutFileExec(value GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putFileExec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec</a>

---

##### `PutMsiInstallation` <a name="PutMsiInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putMsiInstallation"></a>

```go
func PutMsiInstallation(value GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putMsiInstallation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation</a>

---

##### `PutRpmInstallation` <a name="PutRpmInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putRpmInstallation"></a>

```go
func PutRpmInstallation(value GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putRpmInstallation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation</a>

---

##### `PutScriptRun` <a name="PutScriptRun" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putScriptRun"></a>

```go
func PutScriptRun(value GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.putScriptRun.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun">GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun</a>

---

##### `ResetArchiveExtraction` <a name="ResetArchiveExtraction" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resetArchiveExtraction"></a>

```go
func ResetArchiveExtraction()
```

##### `ResetDpkgInstallation` <a name="ResetDpkgInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resetDpkgInstallation"></a>

```go
func ResetDpkgInstallation()
```

##### `ResetFileCopy` <a name="ResetFileCopy" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resetFileCopy"></a>

```go
func ResetFileCopy()
```

##### `ResetFileExec` <a name="ResetFileExec" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resetFileExec"></a>

```go
func ResetFileExec()
```

##### `ResetMsiInstallation` <a name="ResetMsiInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resetMsiInstallation"></a>

```go
func ResetMsiInstallation()
```

##### `ResetRpmInstallation` <a name="ResetRpmInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resetRpmInstallation"></a>

```go
func ResetRpmInstallation()
```

##### `ResetScriptRun` <a name="ResetScriptRun" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.resetScriptRun"></a>

```go
func ResetScriptRun()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.archiveExtraction">ArchiveExtraction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference">GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.dpkgInstallation">DpkgInstallation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference">GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.fileCopy">FileCopy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.fileExec">FileExec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.msiInstallation">MsiInstallation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference">GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.rpmInstallation">RpmInstallation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference">GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.scriptRun">ScriptRun</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference">GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.archiveExtractionInput">ArchiveExtractionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction">GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.dpkgInstallationInput">DpkgInstallationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.fileCopyInput">FileCopyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.fileExecInput">FileExecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.msiInstallationInput">MsiInstallationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.rpmInstallationInput">RpmInstallationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.scriptRunInput">ScriptRunInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun">GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveExtraction`<sup>Required</sup> <a name="ArchiveExtraction" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.archiveExtraction"></a>

```go
func ArchiveExtraction() GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference">GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference</a>

---

##### `DpkgInstallation`<sup>Required</sup> <a name="DpkgInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.dpkgInstallation"></a>

```go
func DpkgInstallation() GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference">GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference</a>

---

##### `FileCopy`<sup>Required</sup> <a name="FileCopy" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.fileCopy"></a>

```go
func FileCopy() GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference</a>

---

##### `FileExec`<sup>Required</sup> <a name="FileExec" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.fileExec"></a>

```go
func FileExec() GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference</a>

---

##### `MsiInstallation`<sup>Required</sup> <a name="MsiInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.msiInstallation"></a>

```go
func MsiInstallation() GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference">GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference</a>

---

##### `RpmInstallation`<sup>Required</sup> <a name="RpmInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.rpmInstallation"></a>

```go
func RpmInstallation() GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference">GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference</a>

---

##### `ScriptRun`<sup>Required</sup> <a name="ScriptRun" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.scriptRun"></a>

```go
func ScriptRun() GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference">GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference</a>

---

##### `ArchiveExtractionInput`<sup>Optional</sup> <a name="ArchiveExtractionInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.archiveExtractionInput"></a>

```go
func ArchiveExtractionInput() GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction">GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction</a>

---

##### `DpkgInstallationInput`<sup>Optional</sup> <a name="DpkgInstallationInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.dpkgInstallationInput"></a>

```go
func DpkgInstallationInput() GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation</a>

---

##### `FileCopyInput`<sup>Optional</sup> <a name="FileCopyInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.fileCopyInput"></a>

```go
func FileCopyInput() GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy</a>

---

##### `FileExecInput`<sup>Optional</sup> <a name="FileExecInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.fileExecInput"></a>

```go
func FileExecInput() GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec">GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec</a>

---

##### `MsiInstallationInput`<sup>Optional</sup> <a name="MsiInstallationInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.msiInstallationInput"></a>

```go
func MsiInstallationInput() GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation</a>

---

##### `RpmInstallationInput`<sup>Optional</sup> <a name="RpmInstallationInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.rpmInstallationInput"></a>

```go
func RpmInstallationInput() GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation</a>

---

##### `ScriptRunInput`<sup>Optional</sup> <a name="ScriptRunInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.scriptRunInput"></a>

```go
func ScriptRunInput() GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun">GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.property.artifactIdInput"></a>

```go
func ArtifactIdInput() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation">GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation</a>

---


### GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.resetAllowedExitCodes">ResetAllowedExitCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.resetInterpreter">ResetInterpreter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedExitCodes` <a name="ResetAllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.resetAllowedExitCodes"></a>

```go
func ResetAllowedExitCodes()
```

##### `ResetInterpreter` <a name="ResetInterpreter" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.resetInterpreter"></a>

```go
func ResetInterpreter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.allowedExitCodesInput">AllowedExitCodesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.interpreterInput">InterpreterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.scriptInput">ScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.allowedExitCodes">AllowedExitCodes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.interpreter">Interpreter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.script">Script</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun">GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedExitCodesInput`<sup>Optional</sup> <a name="AllowedExitCodesInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.allowedExitCodesInput"></a>

```go
func AllowedExitCodesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `InterpreterInput`<sup>Optional</sup> <a name="InterpreterInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.interpreterInput"></a>

```go
func InterpreterInput() *string
```

- *Type:* *string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.scriptInput"></a>

```go
func ScriptInput() *string
```

- *Type:* *string

---

##### `AllowedExitCodes`<sup>Required</sup> <a name="AllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.allowedExitCodes"></a>

```go
func AllowedExitCodes() *[]*f64
```

- *Type:* *[]*f64

---

##### `Interpreter`<sup>Required</sup> <a name="Interpreter" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.interpreter"></a>

```go
func Interpreter() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.script"></a>

```go
func Script() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun">GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun</a>

---


### GoogleOsConfigGuestPoliciesRecipesList <a name="GoogleOsConfigGuestPoliciesRecipesList" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleOsConfigGuestPoliciesRecipesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.get"></a>

```go
func Get(index *f64) GoogleOsConfigGuestPoliciesRecipesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOsConfigGuestPoliciesRecipesOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleOsConfigGuestPoliciesRecipesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.putArtifacts">PutArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.putInstallSteps">PutInstallSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.putUpdateSteps">PutUpdateSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.resetArtifacts">ResetArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.resetDesiredState">ResetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.resetInstallSteps">ResetInstallSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.resetUpdateSteps">ResetUpdateSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutArtifacts` <a name="PutArtifacts" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.putArtifacts"></a>

```go
func PutArtifacts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.putArtifacts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInstallSteps` <a name="PutInstallSteps" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.putInstallSteps"></a>

```go
func PutInstallSteps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.putInstallSteps.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUpdateSteps` <a name="PutUpdateSteps" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.putUpdateSteps"></a>

```go
func PutUpdateSteps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.putUpdateSteps.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArtifacts` <a name="ResetArtifacts" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.resetArtifacts"></a>

```go
func ResetArtifacts()
```

##### `ResetDesiredState` <a name="ResetDesiredState" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.resetDesiredState"></a>

```go
func ResetDesiredState()
```

##### `ResetInstallSteps` <a name="ResetInstallSteps" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.resetInstallSteps"></a>

```go
func ResetInstallSteps()
```

##### `ResetUpdateSteps` <a name="ResetUpdateSteps" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.resetUpdateSteps"></a>

```go
func ResetUpdateSteps()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList">GoogleOsConfigGuestPoliciesRecipesArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.installSteps">InstallSteps</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList">GoogleOsConfigGuestPoliciesRecipesInstallStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.updateSteps">UpdateSteps</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList">GoogleOsConfigGuestPoliciesRecipesUpdateStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.artifactsInput">ArtifactsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.desiredStateInput">DesiredStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.installStepsInput">InstallStepsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.updateStepsInput">UpdateStepsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Artifacts`<sup>Required</sup> <a name="Artifacts" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.artifacts"></a>

```go
func Artifacts() GoogleOsConfigGuestPoliciesRecipesArtifactsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesArtifactsList">GoogleOsConfigGuestPoliciesRecipesArtifactsList</a>

---

##### `InstallSteps`<sup>Required</sup> <a name="InstallSteps" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.installSteps"></a>

```go
func InstallSteps() GoogleOsConfigGuestPoliciesRecipesInstallStepsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesInstallStepsList">GoogleOsConfigGuestPoliciesRecipesInstallStepsList</a>

---

##### `UpdateSteps`<sup>Required</sup> <a name="UpdateSteps" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.updateSteps"></a>

```go
func UpdateSteps() GoogleOsConfigGuestPoliciesRecipesUpdateStepsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList">GoogleOsConfigGuestPoliciesRecipesUpdateStepsList</a>

---

##### `ArtifactsInput`<sup>Optional</sup> <a name="ArtifactsInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.artifactsInput"></a>

```go
func ArtifactsInput() interface{}
```

- *Type:* interface{}

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.desiredStateInput"></a>

```go
func DesiredStateInput() *string
```

- *Type:* *string

---

##### `InstallStepsInput`<sup>Optional</sup> <a name="InstallStepsInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.installStepsInput"></a>

```go
func InstallStepsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UpdateStepsInput`<sup>Optional</sup> <a name="UpdateStepsInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.updateStepsInput"></a>

```go
func UpdateStepsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.resetDestination"></a>

```go
func ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction">GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.artifactIdInput"></a>

```go
func ArtifactIdInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction">GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction</a>

---


### GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.property.artifactIdInput"></a>

```go
func ArtifactIdInput() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation</a>

---


### GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.resetOverwrite">ResetOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOverwrite` <a name="ResetOverwrite" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.resetOverwrite"></a>

```go
func ResetOverwrite()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.resetPermissions"></a>

```go
func ResetPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.overwriteInput">OverwriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.overwrite">Overwrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.permissions">Permissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.artifactIdInput"></a>

```go
func ArtifactIdInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `OverwriteInput`<sup>Optional</sup> <a name="OverwriteInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.overwriteInput"></a>

```go
func OverwriteInput() interface{}
```

- *Type:* interface{}

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Overwrite`<sup>Required</sup> <a name="Overwrite" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.overwrite"></a>

```go
func Overwrite() interface{}
```

- *Type:* interface{}

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.permissions"></a>

```go
func Permissions() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy</a>

---


### GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.resetAllowedExitCodes">ResetAllowedExitCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.resetArtifactId">ResetArtifactId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedExitCodes` <a name="ResetAllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.resetAllowedExitCodes"></a>

```go
func ResetAllowedExitCodes()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetArtifactId` <a name="ResetArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.resetArtifactId"></a>

```go
func ResetArtifactId()
```

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.allowedExitCodesInput">AllowedExitCodesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.allowedExitCodes">AllowedExitCodes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedExitCodesInput`<sup>Optional</sup> <a name="AllowedExitCodesInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.allowedExitCodesInput"></a>

```go
func AllowedExitCodesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.artifactIdInput"></a>

```go
func ArtifactIdInput() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `AllowedExitCodes`<sup>Required</sup> <a name="AllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.allowedExitCodes"></a>

```go
func AllowedExitCodes() *[]*f64
```

- *Type:* *[]*f64

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec</a>

---


### GoogleOsConfigGuestPoliciesRecipesUpdateStepsList <a name="GoogleOsConfigGuestPoliciesRecipesUpdateStepsList" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesUpdateStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleOsConfigGuestPoliciesRecipesUpdateStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.get"></a>

```go
func Get(index *f64) GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.resetAllowedExitCodes">ResetAllowedExitCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.resetFlags">ResetFlags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedExitCodes` <a name="ResetAllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.resetAllowedExitCodes"></a>

```go
func ResetAllowedExitCodes()
```

##### `ResetFlags` <a name="ResetFlags" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.resetFlags"></a>

```go
func ResetFlags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.allowedExitCodesInput">AllowedExitCodesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.flagsInput">FlagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.allowedExitCodes">AllowedExitCodes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.flags">Flags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedExitCodesInput`<sup>Optional</sup> <a name="AllowedExitCodesInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.allowedExitCodesInput"></a>

```go
func AllowedExitCodesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.artifactIdInput"></a>

```go
func ArtifactIdInput() *string
```

- *Type:* *string

---

##### `FlagsInput`<sup>Optional</sup> <a name="FlagsInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.flagsInput"></a>

```go
func FlagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedExitCodes`<sup>Required</sup> <a name="AllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.allowedExitCodes"></a>

```go
func AllowedExitCodes() *[]*f64
```

- *Type:* *[]*f64

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.flags"></a>

```go
func Flags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation</a>

---


### GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putArchiveExtraction">PutArchiveExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putDpkgInstallation">PutDpkgInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putFileCopy">PutFileCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putFileExec">PutFileExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putMsiInstallation">PutMsiInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putRpmInstallation">PutRpmInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putScriptRun">PutScriptRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resetArchiveExtraction">ResetArchiveExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resetDpkgInstallation">ResetDpkgInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resetFileCopy">ResetFileCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resetFileExec">ResetFileExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resetMsiInstallation">ResetMsiInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resetRpmInstallation">ResetRpmInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resetScriptRun">ResetScriptRun</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutArchiveExtraction` <a name="PutArchiveExtraction" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putArchiveExtraction"></a>

```go
func PutArchiveExtraction(value GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putArchiveExtraction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction">GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction</a>

---

##### `PutDpkgInstallation` <a name="PutDpkgInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putDpkgInstallation"></a>

```go
func PutDpkgInstallation(value GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putDpkgInstallation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation</a>

---

##### `PutFileCopy` <a name="PutFileCopy" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putFileCopy"></a>

```go
func PutFileCopy(value GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putFileCopy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy</a>

---

##### `PutFileExec` <a name="PutFileExec" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putFileExec"></a>

```go
func PutFileExec(value GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putFileExec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec</a>

---

##### `PutMsiInstallation` <a name="PutMsiInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putMsiInstallation"></a>

```go
func PutMsiInstallation(value GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putMsiInstallation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation</a>

---

##### `PutRpmInstallation` <a name="PutRpmInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putRpmInstallation"></a>

```go
func PutRpmInstallation(value GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putRpmInstallation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation</a>

---

##### `PutScriptRun` <a name="PutScriptRun" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putScriptRun"></a>

```go
func PutScriptRun(value GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.putScriptRun.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun">GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun</a>

---

##### `ResetArchiveExtraction` <a name="ResetArchiveExtraction" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resetArchiveExtraction"></a>

```go
func ResetArchiveExtraction()
```

##### `ResetDpkgInstallation` <a name="ResetDpkgInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resetDpkgInstallation"></a>

```go
func ResetDpkgInstallation()
```

##### `ResetFileCopy` <a name="ResetFileCopy" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resetFileCopy"></a>

```go
func ResetFileCopy()
```

##### `ResetFileExec` <a name="ResetFileExec" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resetFileExec"></a>

```go
func ResetFileExec()
```

##### `ResetMsiInstallation` <a name="ResetMsiInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resetMsiInstallation"></a>

```go
func ResetMsiInstallation()
```

##### `ResetRpmInstallation` <a name="ResetRpmInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resetRpmInstallation"></a>

```go
func ResetRpmInstallation()
```

##### `ResetScriptRun` <a name="ResetScriptRun" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.resetScriptRun"></a>

```go
func ResetScriptRun()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.archiveExtraction">ArchiveExtraction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference">GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.dpkgInstallation">DpkgInstallation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference">GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.fileCopy">FileCopy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.fileExec">FileExec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.msiInstallation">MsiInstallation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference">GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.rpmInstallation">RpmInstallation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference">GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.scriptRun">ScriptRun</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference">GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.archiveExtractionInput">ArchiveExtractionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction">GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.dpkgInstallationInput">DpkgInstallationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.fileCopyInput">FileCopyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.fileExecInput">FileExecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.msiInstallationInput">MsiInstallationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.rpmInstallationInput">RpmInstallationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.scriptRunInput">ScriptRunInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun">GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveExtraction`<sup>Required</sup> <a name="ArchiveExtraction" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.archiveExtraction"></a>

```go
func ArchiveExtraction() GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference">GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference</a>

---

##### `DpkgInstallation`<sup>Required</sup> <a name="DpkgInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.dpkgInstallation"></a>

```go
func DpkgInstallation() GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference">GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference</a>

---

##### `FileCopy`<sup>Required</sup> <a name="FileCopy" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.fileCopy"></a>

```go
func FileCopy() GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference</a>

---

##### `FileExec`<sup>Required</sup> <a name="FileExec" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.fileExec"></a>

```go
func FileExec() GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference</a>

---

##### `MsiInstallation`<sup>Required</sup> <a name="MsiInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.msiInstallation"></a>

```go
func MsiInstallation() GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference">GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference</a>

---

##### `RpmInstallation`<sup>Required</sup> <a name="RpmInstallation" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.rpmInstallation"></a>

```go
func RpmInstallation() GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference">GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference</a>

---

##### `ScriptRun`<sup>Required</sup> <a name="ScriptRun" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.scriptRun"></a>

```go
func ScriptRun() GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference">GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference</a>

---

##### `ArchiveExtractionInput`<sup>Optional</sup> <a name="ArchiveExtractionInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.archiveExtractionInput"></a>

```go
func ArchiveExtractionInput() GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction">GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction</a>

---

##### `DpkgInstallationInput`<sup>Optional</sup> <a name="DpkgInstallationInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.dpkgInstallationInput"></a>

```go
func DpkgInstallationInput() GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation</a>

---

##### `FileCopyInput`<sup>Optional</sup> <a name="FileCopyInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.fileCopyInput"></a>

```go
func FileCopyInput() GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy</a>

---

##### `FileExecInput`<sup>Optional</sup> <a name="FileExecInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.fileExecInput"></a>

```go
func FileExecInput() GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec">GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec</a>

---

##### `MsiInstallationInput`<sup>Optional</sup> <a name="MsiInstallationInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.msiInstallationInput"></a>

```go
func MsiInstallationInput() GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation</a>

---

##### `RpmInstallationInput`<sup>Optional</sup> <a name="RpmInstallationInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.rpmInstallationInput"></a>

```go
func RpmInstallationInput() GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation</a>

---

##### `ScriptRunInput`<sup>Optional</sup> <a name="ScriptRunInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.scriptRunInput"></a>

```go
func ScriptRunInput() GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun">GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.property.artifactIdInput">ArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactIdInput`<sup>Optional</sup> <a name="ArtifactIdInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.property.artifactIdInput"></a>

```go
func ArtifactIdInput() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation">GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation</a>

---


### GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference <a name="GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.resetAllowedExitCodes">ResetAllowedExitCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.resetInterpreter">ResetInterpreter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedExitCodes` <a name="ResetAllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.resetAllowedExitCodes"></a>

```go
func ResetAllowedExitCodes()
```

##### `ResetInterpreter` <a name="ResetInterpreter" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.resetInterpreter"></a>

```go
func ResetInterpreter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.allowedExitCodesInput">AllowedExitCodesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.interpreterInput">InterpreterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.scriptInput">ScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.allowedExitCodes">AllowedExitCodes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.interpreter">Interpreter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.script">Script</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun">GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedExitCodesInput`<sup>Optional</sup> <a name="AllowedExitCodesInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.allowedExitCodesInput"></a>

```go
func AllowedExitCodesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `InterpreterInput`<sup>Optional</sup> <a name="InterpreterInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.interpreterInput"></a>

```go
func InterpreterInput() *string
```

- *Type:* *string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.scriptInput"></a>

```go
func ScriptInput() *string
```

- *Type:* *string

---

##### `AllowedExitCodes`<sup>Required</sup> <a name="AllowedExitCodes" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.allowedExitCodes"></a>

```go
func AllowedExitCodes() *[]*f64
```

- *Type:* *[]*f64

---

##### `Interpreter`<sup>Required</sup> <a name="Interpreter" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.interpreter"></a>

```go
func Interpreter() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.script"></a>

```go
func Script() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun">GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun</a>

---


### GoogleOsConfigGuestPoliciesTimeoutsOutputReference <a name="GoogleOsConfigGuestPoliciesTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleosconfigguestpolicies"

googleosconfigguestpolicies.NewGoogleOsConfigGuestPoliciesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleOsConfigGuestPoliciesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOsConfigGuestPolicies.GoogleOsConfigGuestPoliciesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



