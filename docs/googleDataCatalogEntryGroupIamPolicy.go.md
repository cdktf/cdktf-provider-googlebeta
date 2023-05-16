# `google_data_catalog_entry_group_iam_policy`

Refer to the Terraform Registory for docs: [`google_data_catalog_entry_group_iam_policy`](https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_data_catalog_entry_group_iam_policy).

# `googleDataCatalogEntryGroupIamPolicy` Submodule <a name="`googleDataCatalogEntryGroupIamPolicy` Submodule" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataCatalogEntryGroupIamPolicy <a name="GoogleDataCatalogEntryGroupIamPolicy" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_data_catalog_entry_group_iam_policy google_data_catalog_entry_group_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googledatacatalogentrygroupiampolicy"

googledatacatalogentrygroupiampolicy.NewGoogleDataCatalogEntryGroupIamPolicy(scope Construct, id *string, config GoogleDataCatalogEntryGroupIamPolicyConfig) GoogleDataCatalogEntryGroupIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig">GoogleDataCatalogEntryGroupIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig">GoogleDataCatalogEntryGroupIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googledatacatalogentrygroupiampolicy"

googledatacatalogentrygroupiampolicy.GoogleDataCatalogEntryGroupIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googledatacatalogentrygroupiampolicy"

googledatacatalogentrygroupiampolicy.GoogleDataCatalogEntryGroupIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googledatacatalogentrygroupiampolicy"

googledatacatalogentrygroupiampolicy.GoogleDataCatalogEntryGroupIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.entryGroupInput">EntryGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.entryGroup">EntryGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `EntryGroupInput`<sup>Optional</sup> <a name="EntryGroupInput" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.entryGroupInput"></a>

```go
func EntryGroupInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `EntryGroup`<sup>Required</sup> <a name="EntryGroup" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.entryGroup"></a>

```go
func EntryGroup() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataCatalogEntryGroupIamPolicyConfig <a name="GoogleDataCatalogEntryGroupIamPolicyConfig" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v7/googledatacatalogentrygroupiampolicy"

&googledatacatalogentrygroupiampolicy.GoogleDataCatalogEntryGroupIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EntryGroup: *string,
	PolicyData: *string,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.entryGroup">EntryGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_data_catalog_entry_group_iam_policy#entry_group GoogleDataCatalogEntryGroupIamPolicy#entry_group}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_data_catalog_entry_group_iam_policy#policy_data GoogleDataCatalogEntryGroupIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_data_catalog_entry_group_iam_policy#id GoogleDataCatalogEntryGroupIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_data_catalog_entry_group_iam_policy#project GoogleDataCatalogEntryGroupIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_data_catalog_entry_group_iam_policy#region GoogleDataCatalogEntryGroupIamPolicy#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EntryGroup`<sup>Required</sup> <a name="EntryGroup" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.entryGroup"></a>

```go
EntryGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_data_catalog_entry_group_iam_policy#entry_group GoogleDataCatalogEntryGroupIamPolicy#entry_group}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_data_catalog_entry_group_iam_policy#policy_data GoogleDataCatalogEntryGroupIamPolicy#policy_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_data_catalog_entry_group_iam_policy#id GoogleDataCatalogEntryGroupIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_data_catalog_entry_group_iam_policy#project GoogleDataCatalogEntryGroupIamPolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDataCatalogEntryGroupIamPolicy.GoogleDataCatalogEntryGroupIamPolicyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.0/docs/resources/google_data_catalog_entry_group_iam_policy#region GoogleDataCatalogEntryGroupIamPolicy#region}.

---



