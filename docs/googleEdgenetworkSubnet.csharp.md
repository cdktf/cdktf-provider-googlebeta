# `googleEdgenetworkSubnet` Submodule <a name="`googleEdgenetworkSubnet` Submodule" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEdgenetworkSubnet <a name="GoogleEdgenetworkSubnet" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet google_edgenetwork_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgenetworkSubnet(Construct Scope, string Id, GoogleEdgenetworkSubnetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig">GoogleEdgenetworkSubnetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig">GoogleEdgenetworkSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetIpv4Cidr">ResetIpv4Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetIpv6Cidr">ResetIpv6Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetVlanId">ResetVlanId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleEdgenetworkSubnetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts">GoogleEdgenetworkSubnetTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpv4Cidr` <a name="ResetIpv4Cidr" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetIpv4Cidr"></a>

```csharp
private void ResetIpv4Cidr()
```

##### `ResetIpv6Cidr` <a name="ResetIpv6Cidr" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetIpv6Cidr"></a>

```csharp
private void ResetIpv6Cidr()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVlanId` <a name="ResetVlanId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.resetVlanId"></a>

```csharp
private void ResetVlanId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEdgenetworkSubnet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEdgenetworkSubnet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEdgenetworkSubnet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEdgenetworkSubnet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEdgenetworkSubnet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleEdgenetworkSubnet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleEdgenetworkSubnet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleEdgenetworkSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEdgenetworkSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference">GoogleEdgenetworkSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv4CidrInput">Ipv4CidrInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv6CidrInput">Ipv6CidrInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.vlanIdInput">VlanIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv4Cidr">Ipv4Cidr</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv6Cidr">Ipv6Cidr</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.vlanId">VlanId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.timeouts"></a>

```csharp
public GoogleEdgenetworkSubnetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference">GoogleEdgenetworkSubnetTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Ipv4CidrInput`<sup>Optional</sup> <a name="Ipv4CidrInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv4CidrInput"></a>

```csharp
public string[] Ipv4CidrInput { get; }
```

- *Type:* string[]

---

##### `Ipv6CidrInput`<sup>Optional</sup> <a name="Ipv6CidrInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv6CidrInput"></a>

```csharp
public string[] Ipv6CidrInput { get; }
```

- *Type:* string[]

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.vlanIdInput"></a>

```csharp
public double VlanIdInput { get; }
```

- *Type:* double

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ipv4Cidr`<sup>Required</sup> <a name="Ipv4Cidr" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv4Cidr"></a>

```csharp
public string[] Ipv4Cidr { get; }
```

- *Type:* string[]

---

##### `Ipv6Cidr`<sup>Required</sup> <a name="Ipv6Cidr" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.ipv6Cidr"></a>

```csharp
public string[] Ipv6Cidr { get; }
```

- *Type:* string[]

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.vlanId"></a>

```csharp
public double VlanId { get; }
```

- *Type:* double

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEdgenetworkSubnetConfig <a name="GoogleEdgenetworkSubnetConfig" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgenetworkSubnetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Network,
    string SubnetId,
    string Zone,
    string Description = null,
    string Id = null,
    string[] Ipv4Cidr = null,
    string[] Ipv6Cidr = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleEdgenetworkSubnetTimeouts Timeouts = null,
    double VlanId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.location">Location</a></code> | <code>string</code> | The Google Cloud region to which the target Distributed Cloud Edge zone belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.network">Network</a></code> | <code>string</code> | The ID of the network to which this router belongs. Must be of the form: 'projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | A unique ID that identifies this subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.zone">Zone</a></code> | <code>string</code> | The name of the target Distributed Cloud Edge zone. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.description">Description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#id GoogleEdgenetworkSubnet#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.ipv4Cidr">Ipv4Cidr</a></code> | <code>string[]</code> | The ranges of ipv4 addresses that are owned by this subnetwork, in CIDR format. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.ipv6Cidr">Ipv6Cidr</a></code> | <code>string[]</code> | The ranges of ipv6 addresses that are owned by this subnetwork, in CIDR format. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#project GoogleEdgenetworkSubnet#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts">GoogleEdgenetworkSubnetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.vlanId">VlanId</a></code> | <code>double</code> | VLAN ID for this subnetwork. If not specified, one is assigned automatically. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The Google Cloud region to which the target Distributed Cloud Edge zone belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#location GoogleEdgenetworkSubnet#location}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The ID of the network to which this router belongs. Must be of the form: 'projects/{{project}}/locations/{{location}}/zones/{{zone}}/networks/{{network_id}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#network GoogleEdgenetworkSubnet#network}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

A unique ID that identifies this subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#subnet_id GoogleEdgenetworkSubnet#subnet_id}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The name of the target Distributed Cloud Edge zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#zone GoogleEdgenetworkSubnet#zone}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#description GoogleEdgenetworkSubnet#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#id GoogleEdgenetworkSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv4Cidr`<sup>Optional</sup> <a name="Ipv4Cidr" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.ipv4Cidr"></a>

```csharp
public string[] Ipv4Cidr { get; set; }
```

- *Type:* string[]

The ranges of ipv4 addresses that are owned by this subnetwork, in CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#ipv4_cidr GoogleEdgenetworkSubnet#ipv4_cidr}

---

##### `Ipv6Cidr`<sup>Optional</sup> <a name="Ipv6Cidr" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.ipv6Cidr"></a>

```csharp
public string[] Ipv6Cidr { get; set; }
```

- *Type:* string[]

The ranges of ipv6 addresses that are owned by this subnetwork, in CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#ipv6_cidr GoogleEdgenetworkSubnet#ipv6_cidr}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#labels GoogleEdgenetworkSubnet#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#project GoogleEdgenetworkSubnet#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.timeouts"></a>

```csharp
public GoogleEdgenetworkSubnetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts">GoogleEdgenetworkSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#timeouts GoogleEdgenetworkSubnet#timeouts}

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetConfig.property.vlanId"></a>

```csharp
public double VlanId { get; set; }
```

- *Type:* double

VLAN ID for this subnetwork. If not specified, one is assigned automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#vlan_id GoogleEdgenetworkSubnet#vlan_id}

---

### GoogleEdgenetworkSubnetTimeouts <a name="GoogleEdgenetworkSubnetTimeouts" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgenetworkSubnetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#create GoogleEdgenetworkSubnet#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#delete GoogleEdgenetworkSubnet#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#update GoogleEdgenetworkSubnet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#create GoogleEdgenetworkSubnet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#delete GoogleEdgenetworkSubnet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_edgenetwork_subnet#update GoogleEdgenetworkSubnet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEdgenetworkSubnetTimeoutsOutputReference <a name="GoogleEdgenetworkSubnetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgenetworkSubnetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgenetworkSubnet.GoogleEdgenetworkSubnetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



