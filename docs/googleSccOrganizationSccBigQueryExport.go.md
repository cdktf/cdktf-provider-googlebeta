# `googleSccOrganizationSccBigQueryExport` Submodule <a name="`googleSccOrganizationSccBigQueryExport` Submodule" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccOrganizationSccBigQueryExport <a name="GoogleSccOrganizationSccBigQueryExport" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_scc_big_query_export google_scc_organization_scc_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesccorganizationsccbigqueryexport"

googlesccorganizationsccbigqueryexport.NewGoogleSccOrganizationSccBigQueryExport(scope Construct, id *string, config GoogleSccOrganizationSccBigQueryExportConfig) GoogleSccOrganizationSccBigQueryExport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig">GoogleSccOrganizationSccBigQueryExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig">GoogleSccOrganizationSccBigQueryExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.putTimeouts"></a>

```go
func PutTimeouts(value GoogleSccOrganizationSccBigQueryExportTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts">GoogleSccOrganizationSccBigQueryExportTimeouts</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetDataset"></a>

```go
func ResetDataset()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSccOrganizationSccBigQueryExport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesccorganizationsccbigqueryexport"

googlesccorganizationsccbigqueryexport.GoogleSccOrganizationSccBigQueryExport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesccorganizationsccbigqueryexport"

googlesccorganizationsccbigqueryexport.GoogleSccOrganizationSccBigQueryExport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesccorganizationsccbigqueryexport"

googlesccorganizationsccbigqueryexport.GoogleSccOrganizationSccBigQueryExport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesccorganizationsccbigqueryexport"

googlesccorganizationsccbigqueryexport.GoogleSccOrganizationSccBigQueryExport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleSccOrganizationSccBigQueryExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleSccOrganizationSccBigQueryExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleSccOrganizationSccBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_scc_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSccOrganizationSccBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.mostRecentEditor">MostRecentEditor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference">GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.bigQueryExportIdInput">BigQueryExportIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.bigQueryExportId">BigQueryExportId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `MostRecentEditor`<sup>Required</sup> <a name="MostRecentEditor" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.mostRecentEditor"></a>

```go
func MostRecentEditor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.timeouts"></a>

```go
func Timeouts() GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference">GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BigQueryExportIdInput`<sup>Optional</sup> <a name="BigQueryExportIdInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.bigQueryExportIdInput"></a>

```go
func BigQueryExportIdInput() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BigQueryExportId`<sup>Required</sup> <a name="BigQueryExportId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.bigQueryExportId"></a>

```go
func BigQueryExportId() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccOrganizationSccBigQueryExportConfig <a name="GoogleSccOrganizationSccBigQueryExportConfig" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesccorganizationsccbigqueryexport"

&googlesccorganizationsccbigqueryexport.GoogleSccOrganizationSccBigQueryExportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BigQueryExportId: *string,
	Organization: *string,
	Dataset: *string,
	Description: *string,
	Filter: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.bigQueryExportId">BigQueryExportId</a></code> | <code>*string</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.organization">Organization</a></code> | <code>*string</code> | The organization whose Cloud Security Command Center the Big Query Export Config lives in. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.dataset">Dataset</a></code> | <code>*string</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.description">Description</a></code> | <code>*string</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.filter">Filter</a></code> | <code>*string</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_scc_big_query_export#id GoogleSccOrganizationSccBigQueryExport#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts">GoogleSccOrganizationSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BigQueryExportId`<sup>Required</sup> <a name="BigQueryExportId" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.bigQueryExportId"></a>

```go
BigQueryExportId *string
```

- *Type:* *string

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_scc_big_query_export#big_query_export_id GoogleSccOrganizationSccBigQueryExport#big_query_export_id}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The organization whose Cloud Security Command Center the Big Query Export Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_scc_big_query_export#organization GoogleSccOrganizationSccBigQueryExport#organization}

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_scc_big_query_export#dataset GoogleSccOrganizationSccBigQueryExport#dataset}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_scc_big_query_export#description GoogleSccOrganizationSccBigQueryExport#description}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Expression that defines the filter to apply across create/update events of findings.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* >, <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_scc_big_query_export#filter GoogleSccOrganizationSccBigQueryExport#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_scc_big_query_export#id GoogleSccOrganizationSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportConfig.property.timeouts"></a>

```go
Timeouts GoogleSccOrganizationSccBigQueryExportTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts">GoogleSccOrganizationSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_scc_big_query_export#timeouts GoogleSccOrganizationSccBigQueryExport#timeouts}

---

### GoogleSccOrganizationSccBigQueryExportTimeouts <a name="GoogleSccOrganizationSccBigQueryExportTimeouts" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesccorganizationsccbigqueryexport"

&googlesccorganizationsccbigqueryexport.GoogleSccOrganizationSccBigQueryExportTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_scc_big_query_export#create GoogleSccOrganizationSccBigQueryExport#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_scc_big_query_export#delete GoogleSccOrganizationSccBigQueryExport#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_scc_big_query_export#update GoogleSccOrganizationSccBigQueryExport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_scc_big_query_export#create GoogleSccOrganizationSccBigQueryExport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_scc_big_query_export#delete GoogleSccOrganizationSccBigQueryExport#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_scc_organization_scc_big_query_export#update GoogleSccOrganizationSccBigQueryExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference <a name="GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlesccorganizationsccbigqueryexport"

googlesccorganizationsccbigqueryexport.NewGoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSccOrganizationSccBigQueryExport.GoogleSccOrganizationSccBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



