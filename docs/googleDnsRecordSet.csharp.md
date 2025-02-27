# `googleDnsRecordSet` Submodule <a name="`googleDnsRecordSet` Submodule" id="@cdktf/provider-google-beta.googleDnsRecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDnsRecordSet <a name="GoogleDnsRecordSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set google_dns_record_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSet(Construct Scope, string Id, GoogleDnsRecordSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig">GoogleDnsRecordSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig">GoogleDnsRecordSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.putRoutingPolicy">PutRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetRoutingPolicy">ResetRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetRrdatas">ResetRrdatas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRoutingPolicy` <a name="PutRoutingPolicy" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.putRoutingPolicy"></a>

```csharp
private void PutRoutingPolicy(GoogleDnsRecordSetRoutingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.putRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRoutingPolicy` <a name="ResetRoutingPolicy" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetRoutingPolicy"></a>

```csharp
private void ResetRoutingPolicy()
```

##### `ResetRrdatas` <a name="ResetRrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetRrdatas"></a>

```csharp
private void ResetRrdatas()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDnsRecordSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDnsRecordSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDnsRecordSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDnsRecordSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDnsRecordSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDnsRecordSet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDnsRecordSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDnsRecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDnsRecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.routingPolicy">RoutingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference">GoogleDnsRecordSetRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.managedZoneInput">ManagedZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.routingPolicyInput">RoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.rrdatasInput">RrdatasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.managedZone">ManagedZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `RoutingPolicy`<sup>Required</sup> <a name="RoutingPolicy" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.routingPolicy"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyOutputReference RoutingPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference">GoogleDnsRecordSetRoutingPolicyOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedZoneInput`<sup>Optional</sup> <a name="ManagedZoneInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.managedZoneInput"></a>

```csharp
public string ManagedZoneInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoutingPolicyInput`<sup>Optional</sup> <a name="RoutingPolicyInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.routingPolicyInput"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicy RoutingPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a>

---

##### `RrdatasInput`<sup>Optional</sup> <a name="RrdatasInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.rrdatasInput"></a>

```csharp
public string[] RrdatasInput { get; }
```

- *Type:* string[]

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedZone`<sup>Required</sup> <a name="ManagedZone" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.managedZone"></a>

```csharp
public string ManagedZone { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Rrdatas`<sup>Required</sup> <a name="Rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; }
```

- *Type:* string[]

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDnsRecordSetConfig <a name="GoogleDnsRecordSetConfig" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedZone,
    string Name,
    string Type,
    string Id = null,
    string Project = null,
    GoogleDnsRecordSetRoutingPolicy RoutingPolicy = null,
    string[] Rrdatas = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.managedZone">ManagedZone</a></code> | <code>string</code> | The name of the zone in which this record set will reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.name">Name</a></code> | <code>string</code> | The DNS name this record set will apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.type">Type</a></code> | <code>string</code> | The DNS record set type. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#id GoogleDnsRecordSet#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.routingPolicy">RoutingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a></code> | routing_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | The string data for the records in this record set whose meaning depends on the DNS type. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.ttl">Ttl</a></code> | <code>double</code> | The time-to-live of this record set (seconds). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedZone`<sup>Required</sup> <a name="ManagedZone" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.managedZone"></a>

```csharp
public string ManagedZone { get; set; }
```

- *Type:* string

The name of the zone in which this record set will reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#managed_zone GoogleDnsRecordSet#managed_zone}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The DNS name this record set will apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#name GoogleDnsRecordSet#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The DNS record set type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#type GoogleDnsRecordSet#type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#id GoogleDnsRecordSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}

---

##### `RoutingPolicy`<sup>Optional</sup> <a name="RoutingPolicy" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.routingPolicy"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicy RoutingPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a>

routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#routing_policy GoogleDnsRecordSet#routing_policy}

---

##### `Rrdatas`<sup>Optional</sup> <a name="Rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; set; }
```

- *Type:* string[]

The string data for the records in this record set whose meaning depends on the DNS type.

For TXT record, if the string data contains spaces, add surrounding " if you don't want your string to get split on spaces. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add "" inside the Terraform configuration string (e.g. "first255characters""morecharacters").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

The time-to-live of this record set (seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#ttl GoogleDnsRecordSet#ttl}

---

### GoogleDnsRecordSetRoutingPolicy <a name="GoogleDnsRecordSetRoutingPolicy" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicy {
    object EnableGeoFencing = null,
    object Geo = null,
    string HealthCheck = null,
    GoogleDnsRecordSetRoutingPolicyPrimaryBackup PrimaryBackup = null,
    object Wrr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.enableGeoFencing">EnableGeoFencing</a></code> | <code>object</code> | Specifies whether to enable fencing for geo queries. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.geo">Geo</a></code> | <code>object</code> | geo block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.healthCheck">HealthCheck</a></code> | <code>string</code> | Specifies the health check. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.primaryBackup">PrimaryBackup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a></code> | primary_backup block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.wrr">Wrr</a></code> | <code>object</code> | wrr block. |

---

##### `EnableGeoFencing`<sup>Optional</sup> <a name="EnableGeoFencing" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.enableGeoFencing"></a>

```csharp
public object EnableGeoFencing { get; set; }
```

- *Type:* object

Specifies whether to enable fencing for geo queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#enable_geo_fencing GoogleDnsRecordSet#enable_geo_fencing}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.geo"></a>

```csharp
public object Geo { get; set; }
```

- *Type:* object

geo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#geo GoogleDnsRecordSet#geo}

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.healthCheck"></a>

```csharp
public string HealthCheck { get; set; }
```

- *Type:* string

Specifies the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#health_check GoogleDnsRecordSet#health_check}

---

##### `PrimaryBackup`<sup>Optional</sup> <a name="PrimaryBackup" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.primaryBackup"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyPrimaryBackup PrimaryBackup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a>

primary_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#primary_backup GoogleDnsRecordSet#primary_backup}

---

##### `Wrr`<sup>Optional</sup> <a name="Wrr" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy.property.wrr"></a>

```csharp
public object Wrr { get; set; }
```

- *Type:* object

wrr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#wrr GoogleDnsRecordSet#wrr}

---

### GoogleDnsRecordSetRoutingPolicyGeo <a name="GoogleDnsRecordSetRoutingPolicyGeo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyGeo {
    string Location,
    GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets HealthCheckedTargets = null,
    string[] Rrdatas = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.location">Location</a></code> | <code>string</code> | The location name defined in Google Cloud. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.healthCheckedTargets">HealthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a></code> | health_checked_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location name defined in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#location GoogleDnsRecordSet#location}

---

##### `HealthCheckedTargets`<sup>Optional</sup> <a name="HealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.healthCheckedTargets"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets HealthCheckedTargets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

health_checked_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#health_checked_targets GoogleDnsRecordSet#health_checked_targets}

---

##### `Rrdatas`<sup>Optional</sup> <a name="Rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeo.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}.

---

### GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets <a name="GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets {
    string[] ExternalEndpoints = null,
    object InternalLoadBalancers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets.property.externalEndpoints">ExternalEndpoints</a></code> | <code>string[]</code> | The Internet IP addresses to be health checked. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets.property.internalLoadBalancers">InternalLoadBalancers</a></code> | <code>object</code> | internal_load_balancers block. |

---

##### `ExternalEndpoints`<sup>Optional</sup> <a name="ExternalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets.property.externalEndpoints"></a>

```csharp
public string[] ExternalEndpoints { get; set; }
```

- *Type:* string[]

The Internet IP addresses to be health checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}

---

##### `InternalLoadBalancers`<sup>Optional</sup> <a name="InternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets.property.internalLoadBalancers"></a>

```csharp
public object InternalLoadBalancers { get; set; }
```

- *Type:* object

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}

---

### GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers <a name="GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers {
    string IpAddress,
    string IpProtocol,
    string NetworkUrl,
    string Port,
    string Project,
    string LoadBalancerType = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress">IpAddress</a></code> | <code>string</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.port">Port</a></code> | <code>string</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.region">Region</a></code> | <code>string</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#ip_address GoogleDnsRecordSet#ip_address}

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#ip_protocol GoogleDnsRecordSet#ip_protocol}

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; set; }
```

- *Type:* string

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#network_url GoogleDnsRecordSet#network_url}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#port GoogleDnsRecordSet#port}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}

---

##### `LoadBalancerType`<sup>Optional</sup> <a name="LoadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; set; }
```

- *Type:* string

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#load_balancer_type GoogleDnsRecordSet#load_balancer_type}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#region GoogleDnsRecordSet#region}

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackup <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackup" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyPrimaryBackup {
    object BackupGeo,
    GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary Primary,
    object EnableGeoFencingForBackups = null,
    double TrickleRatio = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.backupGeo">BackupGeo</a></code> | <code>object</code> | backup_geo block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.primary">Primary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a></code> | primary block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.enableGeoFencingForBackups">EnableGeoFencingForBackups</a></code> | <code>object</code> | Specifies whether to enable fencing for backup geo queries. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.trickleRatio">TrickleRatio</a></code> | <code>double</code> | Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy. |

---

##### `BackupGeo`<sup>Required</sup> <a name="BackupGeo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.backupGeo"></a>

```csharp
public object BackupGeo { get; set; }
```

- *Type:* object

backup_geo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#backup_geo GoogleDnsRecordSet#backup_geo}

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.primary"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary Primary { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

primary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#primary GoogleDnsRecordSet#primary}

---

##### `EnableGeoFencingForBackups`<sup>Optional</sup> <a name="EnableGeoFencingForBackups" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.enableGeoFencingForBackups"></a>

```csharp
public object EnableGeoFencingForBackups { get; set; }
```

- *Type:* object

Specifies whether to enable fencing for backup geo queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#enable_geo_fencing_for_backups GoogleDnsRecordSet#enable_geo_fencing_for_backups}

---

##### `TrickleRatio`<sup>Optional</sup> <a name="TrickleRatio" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup.property.trickleRatio"></a>

```csharp
public double TrickleRatio { get; set; }
```

- *Type:* double

Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#trickle_ratio GoogleDnsRecordSet#trickle_ratio}

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo {
    string Location,
    GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets HealthCheckedTargets = null,
    string[] Rrdatas = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.location">Location</a></code> | <code>string</code> | The location name defined in Google Cloud. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.healthCheckedTargets">HealthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a></code> | health_checked_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location name defined in Google Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#location GoogleDnsRecordSet#location}

---

##### `HealthCheckedTargets`<sup>Optional</sup> <a name="HealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.healthCheckedTargets"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets HealthCheckedTargets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

health_checked_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#health_checked_targets GoogleDnsRecordSet#health_checked_targets}

---

##### `Rrdatas`<sup>Optional</sup> <a name="Rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeo.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}.

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets {
    string[] ExternalEndpoints = null,
    object InternalLoadBalancers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.property.externalEndpoints">ExternalEndpoints</a></code> | <code>string[]</code> | The Internet IP addresses to be health checked. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.property.internalLoadBalancers">InternalLoadBalancers</a></code> | <code>object</code> | internal_load_balancers block. |

---

##### `ExternalEndpoints`<sup>Optional</sup> <a name="ExternalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.property.externalEndpoints"></a>

```csharp
public string[] ExternalEndpoints { get; set; }
```

- *Type:* string[]

The Internet IP addresses to be health checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}

---

##### `InternalLoadBalancers`<sup>Optional</sup> <a name="InternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets.property.internalLoadBalancers"></a>

```csharp
public object InternalLoadBalancers { get; set; }
```

- *Type:* object

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers {
    string IpAddress,
    string IpProtocol,
    string NetworkUrl,
    string Port,
    string Project,
    string LoadBalancerType = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress">IpAddress</a></code> | <code>string</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.port">Port</a></code> | <code>string</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.region">Region</a></code> | <code>string</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#ip_address GoogleDnsRecordSet#ip_address}

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#ip_protocol GoogleDnsRecordSet#ip_protocol}

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; set; }
```

- *Type:* string

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#network_url GoogleDnsRecordSet#network_url}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#port GoogleDnsRecordSet#port}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}

---

##### `LoadBalancerType`<sup>Optional</sup> <a name="LoadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; set; }
```

- *Type:* string

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#load_balancer_type GoogleDnsRecordSet#load_balancer_type}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#region GoogleDnsRecordSet#region}

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary {
    string[] ExternalEndpoints = null,
    object InternalLoadBalancers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary.property.externalEndpoints">ExternalEndpoints</a></code> | <code>string[]</code> | The Internet IP addresses to be health checked. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary.property.internalLoadBalancers">InternalLoadBalancers</a></code> | <code>object</code> | internal_load_balancers block. |

---

##### `ExternalEndpoints`<sup>Optional</sup> <a name="ExternalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary.property.externalEndpoints"></a>

```csharp
public string[] ExternalEndpoints { get; set; }
```

- *Type:* string[]

The Internet IP addresses to be health checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}

---

##### `InternalLoadBalancers`<sup>Optional</sup> <a name="InternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary.property.internalLoadBalancers"></a>

```csharp
public object InternalLoadBalancers { get; set; }
```

- *Type:* object

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}

---

### GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers {
    string IpAddress,
    string IpProtocol,
    string NetworkUrl,
    string Port,
    string Project,
    string LoadBalancerType = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipAddress">IpAddress</a></code> | <code>string</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.port">Port</a></code> | <code>string</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.region">Region</a></code> | <code>string</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#ip_address GoogleDnsRecordSet#ip_address}

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#ip_protocol GoogleDnsRecordSet#ip_protocol}

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; set; }
```

- *Type:* string

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#network_url GoogleDnsRecordSet#network_url}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#port GoogleDnsRecordSet#port}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}

---

##### `LoadBalancerType`<sup>Optional</sup> <a name="LoadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; set; }
```

- *Type:* string

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#load_balancer_type GoogleDnsRecordSet#load_balancer_type}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#region GoogleDnsRecordSet#region}

---

### GoogleDnsRecordSetRoutingPolicyWrr <a name="GoogleDnsRecordSetRoutingPolicyWrr" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyWrr {
    double Weight,
    GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets HealthCheckedTargets = null,
    string[] Rrdatas = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.weight">Weight</a></code> | <code>double</code> | The ratio of traffic routed to the target. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.healthCheckedTargets">HealthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a></code> | health_checked_targets block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}. |

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

The ratio of traffic routed to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#weight GoogleDnsRecordSet#weight}

---

##### `HealthCheckedTargets`<sup>Optional</sup> <a name="HealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.healthCheckedTargets"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets HealthCheckedTargets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

health_checked_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#health_checked_targets GoogleDnsRecordSet#health_checked_targets}

---

##### `Rrdatas`<sup>Optional</sup> <a name="Rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrr.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}.

---

### GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets <a name="GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets {
    string[] ExternalEndpoints = null,
    object InternalLoadBalancers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets.property.externalEndpoints">ExternalEndpoints</a></code> | <code>string[]</code> | The Internet IP addresses to be health checked. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets.property.internalLoadBalancers">InternalLoadBalancers</a></code> | <code>object</code> | internal_load_balancers block. |

---

##### `ExternalEndpoints`<sup>Optional</sup> <a name="ExternalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets.property.externalEndpoints"></a>

```csharp
public string[] ExternalEndpoints { get; set; }
```

- *Type:* string[]

The Internet IP addresses to be health checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#external_endpoints GoogleDnsRecordSet#external_endpoints}

---

##### `InternalLoadBalancers`<sup>Optional</sup> <a name="InternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets.property.internalLoadBalancers"></a>

```csharp
public object InternalLoadBalancers { get; set; }
```

- *Type:* object

internal_load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#internal_load_balancers GoogleDnsRecordSet#internal_load_balancers}

---

### GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers <a name="GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers {
    string IpAddress,
    string IpProtocol,
    string NetworkUrl,
    string Port,
    string Project,
    string LoadBalancerType = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipAddress">IpAddress</a></code> | <code>string</code> | The frontend IP address of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.port">Port</a></code> | <code>string</code> | The configured port of the load balancer. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the load balancer belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.region">Region</a></code> | <code>string</code> | The region of the load balancer. Only needed for regional load balancers. |

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

The frontend IP address of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#ip_address GoogleDnsRecordSet#ip_address}

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#ip_protocol GoogleDnsRecordSet#ip_protocol}

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; set; }
```

- *Type:* string

The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#network_url GoogleDnsRecordSet#network_url}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

The configured port of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#port GoogleDnsRecordSet#port}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the load balancer belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#project GoogleDnsRecordSet#project}

---

##### `LoadBalancerType`<sup>Optional</sup> <a name="LoadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; set; }
```

- *Type:* string

The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb", "regionalL7ilb", "globalL7ilb"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#load_balancer_type GoogleDnsRecordSet#load_balancer_type}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the load balancer. Only needed for regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dns_record_set#region GoogleDnsRecordSet#region}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList <a name="GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.get"></a>

```csharp
private GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference <a name="GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType">ResetLoadBalancerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoadBalancerType` <a name="ResetLoadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType"></a>

```csharp
private void ResetLoadBalancerType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">LoadBalancerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `LoadBalancerTypeInput`<sup>Optional</sup> <a name="LoadBalancerTypeInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```csharp
public string LoadBalancerTypeInput { get; }
```

- *Type:* string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```csharp
public string NetworkUrlInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `LoadBalancerType`<sup>Required</sup> <a name="LoadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; }
```

- *Type:* string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference <a name="GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers">PutInternalLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resetExternalEndpoints">ResetExternalEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resetInternalLoadBalancers">ResetInternalLoadBalancers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternalLoadBalancers` <a name="PutInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers"></a>

```csharp
private void PutInternalLoadBalancers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* object

---

##### `ResetExternalEndpoints` <a name="ResetExternalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resetExternalEndpoints"></a>

```csharp
private void ResetExternalEndpoints()
```

##### `ResetInternalLoadBalancers` <a name="ResetInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.resetInternalLoadBalancers"></a>

```csharp
private void ResetInternalLoadBalancers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers">InternalLoadBalancers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.externalEndpointsInput">ExternalEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput">InternalLoadBalancersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.externalEndpoints">ExternalEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalLoadBalancers`<sup>Required</sup> <a name="InternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList InternalLoadBalancers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList</a>

---

##### `ExternalEndpointsInput`<sup>Optional</sup> <a name="ExternalEndpointsInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.externalEndpointsInput"></a>

```csharp
public string[] ExternalEndpointsInput { get; }
```

- *Type:* string[]

---

##### `InternalLoadBalancersInput`<sup>Optional</sup> <a name="InternalLoadBalancersInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput"></a>

```csharp
public object InternalLoadBalancersInput { get; }
```

- *Type:* object

---

##### `ExternalEndpoints`<sup>Required</sup> <a name="ExternalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.externalEndpoints"></a>

```csharp
public string[] ExternalEndpoints { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference.property.internalValue"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

---


### GoogleDnsRecordSetRoutingPolicyGeoList <a name="GoogleDnsRecordSetRoutingPolicyGeoList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyGeoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.get"></a>

```csharp
private GoogleDnsRecordSetRoutingPolicyGeoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsRecordSetRoutingPolicyGeoOutputReference <a name="GoogleDnsRecordSetRoutingPolicyGeoOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyGeoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.putHealthCheckedTargets">PutHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resetHealthCheckedTargets">ResetHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resetRrdatas">ResetRrdatas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHealthCheckedTargets` <a name="PutHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.putHealthCheckedTargets"></a>

```csharp
private void PutHealthCheckedTargets(GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.putHealthCheckedTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

---

##### `ResetHealthCheckedTargets` <a name="ResetHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resetHealthCheckedTargets"></a>

```csharp
private void ResetHealthCheckedTargets()
```

##### `ResetRrdatas` <a name="ResetRrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.resetRrdatas"></a>

```csharp
private void ResetRrdatas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargets">HealthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargetsInput">HealthCheckedTargetsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatasInput">RrdatasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheckedTargets`<sup>Required</sup> <a name="HealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargets"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference HealthCheckedTargets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference</a>

---

##### `HealthCheckedTargetsInput`<sup>Optional</sup> <a name="HealthCheckedTargetsInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.healthCheckedTargetsInput"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets HealthCheckedTargetsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyGeoHealthCheckedTargets</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `RrdatasInput`<sup>Optional</sup> <a name="RrdatasInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatasInput"></a>

```csharp
public string[] RrdatasInput { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Rrdatas`<sup>Required</sup> <a name="Rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsRecordSetRoutingPolicyOutputReference <a name="GoogleDnsRecordSetRoutingPolicyOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putGeo">PutGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup">PutPrimaryBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putWrr">PutWrr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetEnableGeoFencing">ResetEnableGeoFencing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetPrimaryBackup">ResetPrimaryBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetWrr">ResetWrr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGeo` <a name="PutGeo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putGeo"></a>

```csharp
private void PutGeo(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putGeo.parameter.value"></a>

- *Type:* object

---

##### `PutPrimaryBackup` <a name="PutPrimaryBackup" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup"></a>

```csharp
private void PutPrimaryBackup(GoogleDnsRecordSetRoutingPolicyPrimaryBackup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putPrimaryBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a>

---

##### `PutWrr` <a name="PutWrr" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putWrr"></a>

```csharp
private void PutWrr(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.putWrr.parameter.value"></a>

- *Type:* object

---

##### `ResetEnableGeoFencing` <a name="ResetEnableGeoFencing" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetEnableGeoFencing"></a>

```csharp
private void ResetEnableGeoFencing()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetGeo"></a>

```csharp
private void ResetGeo()
```

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetHealthCheck"></a>

```csharp
private void ResetHealthCheck()
```

##### `ResetPrimaryBackup` <a name="ResetPrimaryBackup" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetPrimaryBackup"></a>

```csharp
private void ResetPrimaryBackup()
```

##### `ResetWrr` <a name="ResetWrr" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.resetWrr"></a>

```csharp
private void ResetWrr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.geo">Geo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList">GoogleDnsRecordSetRoutingPolicyGeoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.primaryBackup">PrimaryBackup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.wrr">Wrr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList">GoogleDnsRecordSetRoutingPolicyWrrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencingInput">EnableGeoFencingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.geoInput">GeoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.healthCheckInput">HealthCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.primaryBackupInput">PrimaryBackupInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.wrrInput">WrrInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencing">EnableGeoFencing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.healthCheck">HealthCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.geo"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyGeoList Geo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyGeoList">GoogleDnsRecordSetRoutingPolicyGeoList</a>

---

##### `PrimaryBackup`<sup>Required</sup> <a name="PrimaryBackup" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.primaryBackup"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference PrimaryBackup { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference</a>

---

##### `Wrr`<sup>Required</sup> <a name="Wrr" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.wrr"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyWrrList Wrr { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList">GoogleDnsRecordSetRoutingPolicyWrrList</a>

---

##### `EnableGeoFencingInput`<sup>Optional</sup> <a name="EnableGeoFencingInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencingInput"></a>

```csharp
public object EnableGeoFencingInput { get; }
```

- *Type:* object

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.geoInput"></a>

```csharp
public object GeoInput { get; }
```

- *Type:* object

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.healthCheckInput"></a>

```csharp
public string HealthCheckInput { get; }
```

- *Type:* string

---

##### `PrimaryBackupInput`<sup>Optional</sup> <a name="PrimaryBackupInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.primaryBackupInput"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyPrimaryBackup PrimaryBackupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a>

---

##### `WrrInput`<sup>Optional</sup> <a name="WrrInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.wrrInput"></a>

```csharp
public object WrrInput { get; }
```

- *Type:* object

---

##### `EnableGeoFencing`<sup>Required</sup> <a name="EnableGeoFencing" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.enableGeoFencing"></a>

```csharp
public object EnableGeoFencing { get; }
```

- *Type:* object

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.healthCheck"></a>

```csharp
public string HealthCheck { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicy">GoogleDnsRecordSetRoutingPolicy</a>

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.get"></a>

```csharp
private GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType">ResetLoadBalancerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoadBalancerType` <a name="ResetLoadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType"></a>

```csharp
private void ResetLoadBalancerType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">LoadBalancerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `LoadBalancerTypeInput`<sup>Optional</sup> <a name="LoadBalancerTypeInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```csharp
public string LoadBalancerTypeInput { get; }
```

- *Type:* string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```csharp
public string NetworkUrlInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `LoadBalancerType`<sup>Required</sup> <a name="LoadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; }
```

- *Type:* string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers">PutInternalLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resetExternalEndpoints">ResetExternalEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resetInternalLoadBalancers">ResetInternalLoadBalancers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternalLoadBalancers` <a name="PutInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers"></a>

```csharp
private void PutInternalLoadBalancers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* object

---

##### `ResetExternalEndpoints` <a name="ResetExternalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resetExternalEndpoints"></a>

```csharp
private void ResetExternalEndpoints()
```

##### `ResetInternalLoadBalancers` <a name="ResetInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.resetInternalLoadBalancers"></a>

```csharp
private void ResetInternalLoadBalancers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers">InternalLoadBalancers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.externalEndpointsInput">ExternalEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput">InternalLoadBalancersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.externalEndpoints">ExternalEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalLoadBalancers`<sup>Required</sup> <a name="InternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancers"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList InternalLoadBalancers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList</a>

---

##### `ExternalEndpointsInput`<sup>Optional</sup> <a name="ExternalEndpointsInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.externalEndpointsInput"></a>

```csharp
public string[] ExternalEndpointsInput { get; }
```

- *Type:* string[]

---

##### `InternalLoadBalancersInput`<sup>Optional</sup> <a name="InternalLoadBalancersInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput"></a>

```csharp
public object InternalLoadBalancersInput { get; }
```

- *Type:* object

---

##### `ExternalEndpoints`<sup>Required</sup> <a name="ExternalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.externalEndpoints"></a>

```csharp
public string[] ExternalEndpoints { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference.property.internalValue"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.get"></a>

```csharp
private GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.putHealthCheckedTargets">PutHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetHealthCheckedTargets">ResetHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetRrdatas">ResetRrdatas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHealthCheckedTargets` <a name="PutHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.putHealthCheckedTargets"></a>

```csharp
private void PutHealthCheckedTargets(GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.putHealthCheckedTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

---

##### `ResetHealthCheckedTargets` <a name="ResetHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetHealthCheckedTargets"></a>

```csharp
private void ResetHealthCheckedTargets()
```

##### `ResetRrdatas` <a name="ResetRrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.resetRrdatas"></a>

```csharp
private void ResetRrdatas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargets">HealthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargetsInput">HealthCheckedTargetsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatasInput">RrdatasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheckedTargets`<sup>Required</sup> <a name="HealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargets"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference HealthCheckedTargets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference</a>

---

##### `HealthCheckedTargetsInput`<sup>Optional</sup> <a name="HealthCheckedTargetsInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.healthCheckedTargetsInput"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets HealthCheckedTargetsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `RrdatasInput`<sup>Optional</sup> <a name="RrdatasInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatasInput"></a>

```csharp
public string[] RrdatasInput { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Rrdatas`<sup>Required</sup> <a name="Rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putBackupGeo">PutBackupGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putPrimary">PutPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetEnableGeoFencingForBackups">ResetEnableGeoFencingForBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetTrickleRatio">ResetTrickleRatio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupGeo` <a name="PutBackupGeo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putBackupGeo"></a>

```csharp
private void PutBackupGeo(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putBackupGeo.parameter.value"></a>

- *Type:* object

---

##### `PutPrimary` <a name="PutPrimary" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putPrimary"></a>

```csharp
private void PutPrimary(GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.putPrimary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

---

##### `ResetEnableGeoFencingForBackups` <a name="ResetEnableGeoFencingForBackups" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetEnableGeoFencingForBackups"></a>

```csharp
private void ResetEnableGeoFencingForBackups()
```

##### `ResetTrickleRatio` <a name="ResetTrickleRatio" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.resetTrickleRatio"></a>

```csharp
private void ResetTrickleRatio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeo">BackupGeo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primary">Primary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeoInput">BackupGeoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackupsInput">EnableGeoFencingForBackupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primaryInput">PrimaryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatioInput">TrickleRatioInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackups">EnableGeoFencingForBackups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatio">TrickleRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupGeo`<sup>Required</sup> <a name="BackupGeo" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeo"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList BackupGeo { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList</a>

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primary"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference Primary { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference</a>

---

##### `BackupGeoInput`<sup>Optional</sup> <a name="BackupGeoInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.backupGeoInput"></a>

```csharp
public object BackupGeoInput { get; }
```

- *Type:* object

---

##### `EnableGeoFencingForBackupsInput`<sup>Optional</sup> <a name="EnableGeoFencingForBackupsInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackupsInput"></a>

```csharp
public object EnableGeoFencingForBackupsInput { get; }
```

- *Type:* object

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.primaryInput"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary PrimaryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

---

##### `TrickleRatioInput`<sup>Optional</sup> <a name="TrickleRatioInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatioInput"></a>

```csharp
public double TrickleRatioInput { get; }
```

- *Type:* double

---

##### `EnableGeoFencingForBackups`<sup>Required</sup> <a name="EnableGeoFencingForBackups" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.enableGeoFencingForBackups"></a>

```csharp
public object EnableGeoFencingForBackups { get; }
```

- *Type:* object

---

##### `TrickleRatio`<sup>Required</sup> <a name="TrickleRatio" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.trickleRatio"></a>

```csharp
public double TrickleRatio { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupOutputReference.property.internalValue"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyPrimaryBackup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackup">GoogleDnsRecordSetRoutingPolicyPrimaryBackup</a>

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.get"></a>

```csharp
private GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resetLoadBalancerType">ResetLoadBalancerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoadBalancerType` <a name="ResetLoadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resetLoadBalancerType"></a>

```csharp
private void ResetLoadBalancerType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">LoadBalancerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `LoadBalancerTypeInput`<sup>Optional</sup> <a name="LoadBalancerTypeInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```csharp
public string LoadBalancerTypeInput { get; }
```

- *Type:* string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```csharp
public string NetworkUrlInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `LoadBalancerType`<sup>Required</sup> <a name="LoadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; }
```

- *Type:* string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference <a name="GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.putInternalLoadBalancers">PutInternalLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resetExternalEndpoints">ResetExternalEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resetInternalLoadBalancers">ResetInternalLoadBalancers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternalLoadBalancers` <a name="PutInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.putInternalLoadBalancers"></a>

```csharp
private void PutInternalLoadBalancers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* object

---

##### `ResetExternalEndpoints` <a name="ResetExternalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resetExternalEndpoints"></a>

```csharp
private void ResetExternalEndpoints()
```

##### `ResetInternalLoadBalancers` <a name="ResetInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.resetInternalLoadBalancers"></a>

```csharp
private void ResetInternalLoadBalancers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancers">InternalLoadBalancers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.externalEndpointsInput">ExternalEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancersInput">InternalLoadBalancersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.externalEndpoints">ExternalEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalLoadBalancers`<sup>Required</sup> <a name="InternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancers"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList InternalLoadBalancers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList</a>

---

##### `ExternalEndpointsInput`<sup>Optional</sup> <a name="ExternalEndpointsInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.externalEndpointsInput"></a>

```csharp
public string[] ExternalEndpointsInput { get; }
```

- *Type:* string[]

---

##### `InternalLoadBalancersInput`<sup>Optional</sup> <a name="InternalLoadBalancersInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalLoadBalancersInput"></a>

```csharp
public object InternalLoadBalancersInput { get; }
```

- *Type:* object

---

##### `ExternalEndpoints`<sup>Required</sup> <a name="ExternalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.externalEndpoints"></a>

```csharp
public string[] ExternalEndpoints { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference.property.internalValue"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary">GoogleDnsRecordSetRoutingPolicyPrimaryBackupPrimary</a>

---


### GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList <a name="GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.get"></a>

```csharp
private GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference <a name="GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType">ResetLoadBalancerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoadBalancerType` <a name="ResetLoadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resetLoadBalancerType"></a>

```csharp
private void ResetLoadBalancerType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput">LoadBalancerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `LoadBalancerTypeInput`<sup>Optional</sup> <a name="LoadBalancerTypeInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerTypeInput"></a>

```csharp
public string LoadBalancerTypeInput { get; }
```

- *Type:* string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrlInput"></a>

```csharp
public string NetworkUrlInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `LoadBalancerType`<sup>Required</sup> <a name="LoadBalancerType" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; }
```

- *Type:* string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference <a name="GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.putInternalLoadBalancers">PutInternalLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resetExternalEndpoints">ResetExternalEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resetInternalLoadBalancers">ResetInternalLoadBalancers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternalLoadBalancers` <a name="PutInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.putInternalLoadBalancers"></a>

```csharp
private void PutInternalLoadBalancers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.putInternalLoadBalancers.parameter.value"></a>

- *Type:* object

---

##### `ResetExternalEndpoints` <a name="ResetExternalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resetExternalEndpoints"></a>

```csharp
private void ResetExternalEndpoints()
```

##### `ResetInternalLoadBalancers` <a name="ResetInternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.resetInternalLoadBalancers"></a>

```csharp
private void ResetInternalLoadBalancers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancers">InternalLoadBalancers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.externalEndpointsInput">ExternalEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput">InternalLoadBalancersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.externalEndpoints">ExternalEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalLoadBalancers`<sup>Required</sup> <a name="InternalLoadBalancers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancers"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList InternalLoadBalancers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList</a>

---

##### `ExternalEndpointsInput`<sup>Optional</sup> <a name="ExternalEndpointsInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.externalEndpointsInput"></a>

```csharp
public string[] ExternalEndpointsInput { get; }
```

- *Type:* string[]

---

##### `InternalLoadBalancersInput`<sup>Optional</sup> <a name="InternalLoadBalancersInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalLoadBalancersInput"></a>

```csharp
public object InternalLoadBalancersInput { get; }
```

- *Type:* object

---

##### `ExternalEndpoints`<sup>Required</sup> <a name="ExternalEndpoints" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.externalEndpoints"></a>

```csharp
public string[] ExternalEndpoints { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference.property.internalValue"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

---


### GoogleDnsRecordSetRoutingPolicyWrrList <a name="GoogleDnsRecordSetRoutingPolicyWrrList" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyWrrList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.get"></a>

```csharp
private GoogleDnsRecordSetRoutingPolicyWrrOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsRecordSetRoutingPolicyWrrOutputReference <a name="GoogleDnsRecordSetRoutingPolicyWrrOutputReference" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsRecordSetRoutingPolicyWrrOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.putHealthCheckedTargets">PutHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resetHealthCheckedTargets">ResetHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resetRrdatas">ResetRrdatas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHealthCheckedTargets` <a name="PutHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.putHealthCheckedTargets"></a>

```csharp
private void PutHealthCheckedTargets(GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.putHealthCheckedTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

---

##### `ResetHealthCheckedTargets` <a name="ResetHealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resetHealthCheckedTargets"></a>

```csharp
private void ResetHealthCheckedTargets()
```

##### `ResetRrdatas` <a name="ResetRrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.resetRrdatas"></a>

```csharp
private void ResetRrdatas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargets">HealthCheckedTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargetsInput">HealthCheckedTargetsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatasInput">RrdatasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatas">Rrdatas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheckedTargets`<sup>Required</sup> <a name="HealthCheckedTargets" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargets"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference HealthCheckedTargets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference</a>

---

##### `HealthCheckedTargetsInput`<sup>Optional</sup> <a name="HealthCheckedTargetsInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.healthCheckedTargetsInput"></a>

```csharp
public GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets HealthCheckedTargetsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets">GoogleDnsRecordSetRoutingPolicyWrrHealthCheckedTargets</a>

---

##### `RrdatasInput`<sup>Optional</sup> <a name="RrdatasInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatasInput"></a>

```csharp
public string[] RrdatasInput { get; }
```

- *Type:* string[]

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Rrdatas`<sup>Required</sup> <a name="Rrdatas" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.rrdatas"></a>

```csharp
public string[] Rrdatas { get; }
```

- *Type:* string[]

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsRecordSet.GoogleDnsRecordSetRoutingPolicyWrrOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



