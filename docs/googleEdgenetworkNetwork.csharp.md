# `googleEdgenetworkNetwork` Submodule <a name="`googleEdgenetworkNetwork` Submodule" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEdgenetworkNetwork <a name="GoogleEdgenetworkNetwork" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network google_edgenetwork_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgenetworkNetwork(Construct Scope, string Id, GoogleEdgenetworkNetworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig">GoogleEdgenetworkNetworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig">GoogleEdgenetworkNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleEdgenetworkNetworkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts">GoogleEdgenetworkNetworkTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEdgenetworkNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEdgenetworkNetwork.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEdgenetworkNetwork.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEdgenetworkNetwork.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEdgenetworkNetwork.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleEdgenetworkNetwork resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleEdgenetworkNetwork to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleEdgenetworkNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEdgenetworkNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference">GoogleEdgenetworkNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.networkIdInput">NetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.networkId">NetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.timeouts"></a>

```csharp
public GoogleEdgenetworkNetworkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference">GoogleEdgenetworkNetworkTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `NetworkIdInput`<sup>Optional</sup> <a name="NetworkIdInput" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.networkIdInput"></a>

```csharp
public string NetworkIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.networkId"></a>

```csharp
public string NetworkId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetwork.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEdgenetworkNetworkConfig <a name="GoogleEdgenetworkNetworkConfig" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgenetworkNetworkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string NetworkId,
    string Zone,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    double Mtu = null,
    string Project = null,
    GoogleEdgenetworkNetworkTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.location">Location</a></code> | <code>string</code> | The Google Cloud region to which the target Distributed Cloud Edge zone belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.networkId">NetworkId</a></code> | <code>string</code> | A unique ID that identifies this network. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.zone">Zone</a></code> | <code>string</code> | The name of the target Distributed Cloud Edge zone. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.description">Description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#id GoogleEdgenetworkNetwork#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.mtu">Mtu</a></code> | <code>double</code> | IP (L3) MTU value of the network. Default value is '1500'. Possible values are: '1500', '9000'. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#project GoogleEdgenetworkNetwork#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts">GoogleEdgenetworkNetworkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The Google Cloud region to which the target Distributed Cloud Edge zone belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#location GoogleEdgenetworkNetwork#location}

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.networkId"></a>

```csharp
public string NetworkId { get; set; }
```

- *Type:* string

A unique ID that identifies this network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#network_id GoogleEdgenetworkNetwork#network_id}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The name of the target Distributed Cloud Edge zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#zone GoogleEdgenetworkNetwork#zone}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#description GoogleEdgenetworkNetwork#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#id GoogleEdgenetworkNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#labels GoogleEdgenetworkNetwork#labels}

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

IP (L3) MTU value of the network. Default value is '1500'. Possible values are: '1500', '9000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#mtu GoogleEdgenetworkNetwork#mtu}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#project GoogleEdgenetworkNetwork#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkConfig.property.timeouts"></a>

```csharp
public GoogleEdgenetworkNetworkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts">GoogleEdgenetworkNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#timeouts GoogleEdgenetworkNetwork#timeouts}

---

### GoogleEdgenetworkNetworkTimeouts <a name="GoogleEdgenetworkNetworkTimeouts" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgenetworkNetworkTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#create GoogleEdgenetworkNetwork#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#delete GoogleEdgenetworkNetwork#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#update GoogleEdgenetworkNetwork#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#create GoogleEdgenetworkNetwork#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#delete GoogleEdgenetworkNetwork#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_edgenetwork_network#update GoogleEdgenetworkNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEdgenetworkNetworkTimeoutsOutputReference <a name="GoogleEdgenetworkNetworkTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgenetworkNetworkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgenetworkNetwork.GoogleEdgenetworkNetworkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



