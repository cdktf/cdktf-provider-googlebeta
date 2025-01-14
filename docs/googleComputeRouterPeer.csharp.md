# `googleComputeRouterPeer` Submodule <a name="`googleComputeRouterPeer` Submodule" id="@cdktf/provider-google-beta.googleComputeRouterPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRouterPeer <a name="GoogleComputeRouterPeer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer google_compute_router_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterPeer(Construct Scope, string Id, GoogleComputeRouterPeerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig">GoogleComputeRouterPeerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig">GoogleComputeRouterPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putAdvertisedIpRanges">PutAdvertisedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putBfd">PutBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putCustomLearnedIpRanges">PutCustomLearnedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putMd5AuthenticationKey">PutMd5AuthenticationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedGroups">ResetAdvertisedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedIpRanges">ResetAdvertisedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedRoutePriority">ResetAdvertisedRoutePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertiseMode">ResetAdvertiseMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetBfd">ResetBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetCustomLearnedIpRanges">ResetCustomLearnedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetCustomLearnedRoutePriority">ResetCustomLearnedRoutePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnable">ResetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnableIpv4">ResetEnableIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnableIpv6">ResetEnableIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetExportPolicies">ResetExportPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetImportPolicies">ResetImportPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpv4NexthopAddress">ResetIpv4NexthopAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpv6NexthopAddress">ResetIpv6NexthopAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetMd5AuthenticationKey">ResetMd5AuthenticationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpAddress">ResetPeerIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpv4NexthopAddress">ResetPeerIpv4NexthopAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpv6NexthopAddress">ResetPeerIpv6NexthopAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetRouterApplianceInstance">ResetRouterApplianceInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvertisedIpRanges` <a name="PutAdvertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putAdvertisedIpRanges"></a>

```csharp
private void PutAdvertisedIpRanges(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putAdvertisedIpRanges.parameter.value"></a>

- *Type:* object

---

##### `PutBfd` <a name="PutBfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putBfd"></a>

```csharp
private void PutBfd(GoogleComputeRouterPeerBfd Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putBfd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

---

##### `PutCustomLearnedIpRanges` <a name="PutCustomLearnedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putCustomLearnedIpRanges"></a>

```csharp
private void PutCustomLearnedIpRanges(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putCustomLearnedIpRanges.parameter.value"></a>

- *Type:* object

---

##### `PutMd5AuthenticationKey` <a name="PutMd5AuthenticationKey" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putMd5AuthenticationKey"></a>

```csharp
private void PutMd5AuthenticationKey(GoogleComputeRouterPeerMd5AuthenticationKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putMd5AuthenticationKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeRouterPeerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>

---

##### `ResetAdvertisedGroups` <a name="ResetAdvertisedGroups" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedGroups"></a>

```csharp
private void ResetAdvertisedGroups()
```

##### `ResetAdvertisedIpRanges` <a name="ResetAdvertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedIpRanges"></a>

```csharp
private void ResetAdvertisedIpRanges()
```

##### `ResetAdvertisedRoutePriority` <a name="ResetAdvertisedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedRoutePriority"></a>

```csharp
private void ResetAdvertisedRoutePriority()
```

##### `ResetAdvertiseMode` <a name="ResetAdvertiseMode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertiseMode"></a>

```csharp
private void ResetAdvertiseMode()
```

##### `ResetBfd` <a name="ResetBfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetBfd"></a>

```csharp
private void ResetBfd()
```

##### `ResetCustomLearnedIpRanges` <a name="ResetCustomLearnedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetCustomLearnedIpRanges"></a>

```csharp
private void ResetCustomLearnedIpRanges()
```

##### `ResetCustomLearnedRoutePriority` <a name="ResetCustomLearnedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetCustomLearnedRoutePriority"></a>

```csharp
private void ResetCustomLearnedRoutePriority()
```

##### `ResetEnable` <a name="ResetEnable" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnable"></a>

```csharp
private void ResetEnable()
```

##### `ResetEnableIpv4` <a name="ResetEnableIpv4" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnableIpv4"></a>

```csharp
private void ResetEnableIpv4()
```

##### `ResetEnableIpv6` <a name="ResetEnableIpv6" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnableIpv6"></a>

```csharp
private void ResetEnableIpv6()
```

##### `ResetExportPolicies` <a name="ResetExportPolicies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetExportPolicies"></a>

```csharp
private void ResetExportPolicies()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportPolicies` <a name="ResetImportPolicies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetImportPolicies"></a>

```csharp
private void ResetImportPolicies()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetIpv4NexthopAddress` <a name="ResetIpv4NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpv4NexthopAddress"></a>

```csharp
private void ResetIpv4NexthopAddress()
```

##### `ResetIpv6NexthopAddress` <a name="ResetIpv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpv6NexthopAddress"></a>

```csharp
private void ResetIpv6NexthopAddress()
```

##### `ResetMd5AuthenticationKey` <a name="ResetMd5AuthenticationKey" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetMd5AuthenticationKey"></a>

```csharp
private void ResetMd5AuthenticationKey()
```

##### `ResetPeerIpAddress` <a name="ResetPeerIpAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpAddress"></a>

```csharp
private void ResetPeerIpAddress()
```

##### `ResetPeerIpv4NexthopAddress` <a name="ResetPeerIpv4NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpv4NexthopAddress"></a>

```csharp
private void ResetPeerIpv4NexthopAddress()
```

##### `ResetPeerIpv6NexthopAddress` <a name="ResetPeerIpv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpv6NexthopAddress"></a>

```csharp
private void ResetPeerIpv6NexthopAddress()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRouterApplianceInstance` <a name="ResetRouterApplianceInstance" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetRouterApplianceInstance"></a>

```csharp
private void ResetRouterApplianceInstance()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRouterPeer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRouterPeer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRouterPeer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRouterPeer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRouterPeer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeRouterPeer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRouterPeer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRouterPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRouterPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedIpRanges">AdvertisedIpRanges</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList">GoogleComputeRouterPeerAdvertisedIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.bfd">Bfd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference">GoogleComputeRouterPeerBfdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedIpRanges">CustomLearnedIpRanges</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList">GoogleComputeRouterPeerCustomLearnedIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.managementType">ManagementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.md5AuthenticationKey">Md5AuthenticationKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference">GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference">GoogleComputeRouterPeerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedGroupsInput">AdvertisedGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedIpRangesInput">AdvertisedIpRangesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedRoutePriorityInput">AdvertisedRoutePriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertiseModeInput">AdvertiseModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.bfdInput">BfdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedIpRangesInput">CustomLearnedIpRangesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedRoutePriorityInput">CustomLearnedRoutePriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv4Input">EnableIpv4Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv6Input">EnableIpv6Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.exportPoliciesInput">ExportPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.importPoliciesInput">ImportPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.interfaceInput">InterfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv4NexthopAddressInput">Ipv4NexthopAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv6NexthopAddressInput">Ipv6NexthopAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.md5AuthenticationKeyInput">Md5AuthenticationKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerAsnInput">PeerAsnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpAddressInput">PeerIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv4NexthopAddressInput">PeerIpv4NexthopAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv6NexthopAddressInput">PeerIpv6NexthopAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerApplianceInstanceInput">RouterApplianceInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerInput">RouterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedGroups">AdvertisedGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedRoutePriority">AdvertisedRoutePriority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertiseMode">AdvertiseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedRoutePriority">CustomLearnedRoutePriority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv4">EnableIpv4</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv6">EnableIpv6</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.exportPolicies">ExportPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.importPolicies">ImportPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.interface">Interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv4NexthopAddress">Ipv4NexthopAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv6NexthopAddress">Ipv6NexthopAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerAsn">PeerAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpAddress">PeerIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv4NexthopAddress">PeerIpv4NexthopAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv6NexthopAddress">PeerIpv6NexthopAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.router">Router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerApplianceInstance">RouterApplianceInstance</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdvertisedIpRanges`<sup>Required</sup> <a name="AdvertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedIpRanges"></a>

```csharp
public GoogleComputeRouterPeerAdvertisedIpRangesList AdvertisedIpRanges { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList">GoogleComputeRouterPeerAdvertisedIpRangesList</a>

---

##### `Bfd`<sup>Required</sup> <a name="Bfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.bfd"></a>

```csharp
public GoogleComputeRouterPeerBfdOutputReference Bfd { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference">GoogleComputeRouterPeerBfdOutputReference</a>

---

##### `CustomLearnedIpRanges`<sup>Required</sup> <a name="CustomLearnedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedIpRanges"></a>

```csharp
public GoogleComputeRouterPeerCustomLearnedIpRangesList CustomLearnedIpRanges { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList">GoogleComputeRouterPeerCustomLearnedIpRangesList</a>

---

##### `ManagementType`<sup>Required</sup> <a name="ManagementType" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.managementType"></a>

```csharp
public string ManagementType { get; }
```

- *Type:* string

---

##### `Md5AuthenticationKey`<sup>Required</sup> <a name="Md5AuthenticationKey" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.md5AuthenticationKey"></a>

```csharp
public GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference Md5AuthenticationKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference">GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.timeouts"></a>

```csharp
public GoogleComputeRouterPeerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference">GoogleComputeRouterPeerTimeoutsOutputReference</a>

---

##### `AdvertisedGroupsInput`<sup>Optional</sup> <a name="AdvertisedGroupsInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedGroupsInput"></a>

```csharp
public string[] AdvertisedGroupsInput { get; }
```

- *Type:* string[]

---

##### `AdvertisedIpRangesInput`<sup>Optional</sup> <a name="AdvertisedIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedIpRangesInput"></a>

```csharp
public object AdvertisedIpRangesInput { get; }
```

- *Type:* object

---

##### `AdvertisedRoutePriorityInput`<sup>Optional</sup> <a name="AdvertisedRoutePriorityInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedRoutePriorityInput"></a>

```csharp
public double AdvertisedRoutePriorityInput { get; }
```

- *Type:* double

---

##### `AdvertiseModeInput`<sup>Optional</sup> <a name="AdvertiseModeInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertiseModeInput"></a>

```csharp
public string AdvertiseModeInput { get; }
```

- *Type:* string

---

##### `BfdInput`<sup>Optional</sup> <a name="BfdInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.bfdInput"></a>

```csharp
public GoogleComputeRouterPeerBfd BfdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

---

##### `CustomLearnedIpRangesInput`<sup>Optional</sup> <a name="CustomLearnedIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedIpRangesInput"></a>

```csharp
public object CustomLearnedIpRangesInput { get; }
```

- *Type:* object

---

##### `CustomLearnedRoutePriorityInput`<sup>Optional</sup> <a name="CustomLearnedRoutePriorityInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedRoutePriorityInput"></a>

```csharp
public double CustomLearnedRoutePriorityInput { get; }
```

- *Type:* double

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `EnableIpv4Input`<sup>Optional</sup> <a name="EnableIpv4Input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv4Input"></a>

```csharp
public object EnableIpv4Input { get; }
```

- *Type:* object

---

##### `EnableIpv6Input`<sup>Optional</sup> <a name="EnableIpv6Input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv6Input"></a>

```csharp
public object EnableIpv6Input { get; }
```

- *Type:* object

---

##### `ExportPoliciesInput`<sup>Optional</sup> <a name="ExportPoliciesInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.exportPoliciesInput"></a>

```csharp
public string[] ExportPoliciesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportPoliciesInput`<sup>Optional</sup> <a name="ImportPoliciesInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.importPoliciesInput"></a>

```csharp
public string[] ImportPoliciesInput { get; }
```

- *Type:* string[]

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.interfaceInput"></a>

```csharp
public string InterfaceInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `Ipv4NexthopAddressInput`<sup>Optional</sup> <a name="Ipv4NexthopAddressInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv4NexthopAddressInput"></a>

```csharp
public string Ipv4NexthopAddressInput { get; }
```

- *Type:* string

---

##### `Ipv6NexthopAddressInput`<sup>Optional</sup> <a name="Ipv6NexthopAddressInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv6NexthopAddressInput"></a>

```csharp
public string Ipv6NexthopAddressInput { get; }
```

- *Type:* string

---

##### `Md5AuthenticationKeyInput`<sup>Optional</sup> <a name="Md5AuthenticationKeyInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.md5AuthenticationKeyInput"></a>

```csharp
public GoogleComputeRouterPeerMd5AuthenticationKey Md5AuthenticationKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PeerAsnInput`<sup>Optional</sup> <a name="PeerAsnInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerAsnInput"></a>

```csharp
public double PeerAsnInput { get; }
```

- *Type:* double

---

##### `PeerIpAddressInput`<sup>Optional</sup> <a name="PeerIpAddressInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpAddressInput"></a>

```csharp
public string PeerIpAddressInput { get; }
```

- *Type:* string

---

##### `PeerIpv4NexthopAddressInput`<sup>Optional</sup> <a name="PeerIpv4NexthopAddressInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv4NexthopAddressInput"></a>

```csharp
public string PeerIpv4NexthopAddressInput { get; }
```

- *Type:* string

---

##### `PeerIpv6NexthopAddressInput`<sup>Optional</sup> <a name="PeerIpv6NexthopAddressInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv6NexthopAddressInput"></a>

```csharp
public string PeerIpv6NexthopAddressInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RouterApplianceInstanceInput`<sup>Optional</sup> <a name="RouterApplianceInstanceInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerApplianceInstanceInput"></a>

```csharp
public string RouterApplianceInstanceInput { get; }
```

- *Type:* string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerInput"></a>

```csharp
public string RouterInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AdvertisedGroups`<sup>Required</sup> <a name="AdvertisedGroups" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedGroups"></a>

```csharp
public string[] AdvertisedGroups { get; }
```

- *Type:* string[]

---

##### `AdvertisedRoutePriority`<sup>Required</sup> <a name="AdvertisedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedRoutePriority"></a>

```csharp
public double AdvertisedRoutePriority { get; }
```

- *Type:* double

---

##### `AdvertiseMode`<sup>Required</sup> <a name="AdvertiseMode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertiseMode"></a>

```csharp
public string AdvertiseMode { get; }
```

- *Type:* string

---

##### `CustomLearnedRoutePriority`<sup>Required</sup> <a name="CustomLearnedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedRoutePriority"></a>

```csharp
public double CustomLearnedRoutePriority { get; }
```

- *Type:* double

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `EnableIpv4`<sup>Required</sup> <a name="EnableIpv4" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv4"></a>

```csharp
public object EnableIpv4 { get; }
```

- *Type:* object

---

##### `EnableIpv6`<sup>Required</sup> <a name="EnableIpv6" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv6"></a>

```csharp
public object EnableIpv6 { get; }
```

- *Type:* object

---

##### `ExportPolicies`<sup>Required</sup> <a name="ExportPolicies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.exportPolicies"></a>

```csharp
public string[] ExportPolicies { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportPolicies`<sup>Required</sup> <a name="ImportPolicies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.importPolicies"></a>

```csharp
public string[] ImportPolicies { get; }
```

- *Type:* string[]

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.interface"></a>

```csharp
public string Interface { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Ipv4NexthopAddress`<sup>Required</sup> <a name="Ipv4NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv4NexthopAddress"></a>

```csharp
public string Ipv4NexthopAddress { get; }
```

- *Type:* string

---

##### `Ipv6NexthopAddress`<sup>Required</sup> <a name="Ipv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv6NexthopAddress"></a>

```csharp
public string Ipv6NexthopAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PeerAsn`<sup>Required</sup> <a name="PeerAsn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerAsn"></a>

```csharp
public double PeerAsn { get; }
```

- *Type:* double

---

##### `PeerIpAddress`<sup>Required</sup> <a name="PeerIpAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpAddress"></a>

```csharp
public string PeerIpAddress { get; }
```

- *Type:* string

---

##### `PeerIpv4NexthopAddress`<sup>Required</sup> <a name="PeerIpv4NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv4NexthopAddress"></a>

```csharp
public string PeerIpv4NexthopAddress { get; }
```

- *Type:* string

---

##### `PeerIpv6NexthopAddress`<sup>Required</sup> <a name="PeerIpv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv6NexthopAddress"></a>

```csharp
public string PeerIpv6NexthopAddress { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.router"></a>

```csharp
public string Router { get; }
```

- *Type:* string

---

##### `RouterApplianceInstance`<sup>Required</sup> <a name="RouterApplianceInstance" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerApplianceInstance"></a>

```csharp
public string RouterApplianceInstance { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRouterPeerAdvertisedIpRanges <a name="GoogleComputeRouterPeerAdvertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterPeerAdvertisedIpRanges {
    string Range,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.property.range">Range</a></code> | <code>string</code> | The IP range to advertise. The value must be a CIDR-formatted string. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.property.description">Description</a></code> | <code>string</code> | User-specified description for the IP range. |

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.property.range"></a>

```csharp
public string Range { get; set; }
```

- *Type:* string

The IP range to advertise. The value must be a CIDR-formatted string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#range GoogleComputeRouterPeer#range}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

User-specified description for the IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#description GoogleComputeRouterPeer#description}

---

### GoogleComputeRouterPeerBfd <a name="GoogleComputeRouterPeerBfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterPeerBfd {
    string SessionInitializationMode,
    double MinReceiveInterval = null,
    double MinTransmitInterval = null,
    double Multiplier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.sessionInitializationMode">SessionInitializationMode</a></code> | <code>string</code> | The BFD session initialization mode for this BGP peer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.minReceiveInterval">MinReceiveInterval</a></code> | <code>double</code> | The minimum interval, in milliseconds, between BFD control packets received from the peer router. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.minTransmitInterval">MinTransmitInterval</a></code> | <code>double</code> | The minimum interval, in milliseconds, between BFD control packets transmitted to the peer router. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.multiplier">Multiplier</a></code> | <code>double</code> | The number of consecutive BFD packets that must be missed before BFD declares that a peer is unavailable. |

---

##### `SessionInitializationMode`<sup>Required</sup> <a name="SessionInitializationMode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.sessionInitializationMode"></a>

```csharp
public string SessionInitializationMode { get; set; }
```

- *Type:* string

The BFD session initialization mode for this BGP peer.

If set to 'ACTIVE', the Cloud Router will initiate the BFD session
for this BGP peer. If set to 'PASSIVE', the Cloud Router will wait
for the peer router to initiate the BFD session for this BGP peer.
If set to 'DISABLED', BFD is disabled for this BGP peer. Possible values: ["ACTIVE", "DISABLED", "PASSIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#session_initialization_mode GoogleComputeRouterPeer#session_initialization_mode}

---

##### `MinReceiveInterval`<sup>Optional</sup> <a name="MinReceiveInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.minReceiveInterval"></a>

```csharp
public double MinReceiveInterval { get; set; }
```

- *Type:* double

The minimum interval, in milliseconds, between BFD control packets received from the peer router.

The actual value is negotiated
between the two routers and is equal to the greater of this value
and the transmit interval of the other router. If set, this value
must be between 1000 and 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#min_receive_interval GoogleComputeRouterPeer#min_receive_interval}

---

##### `MinTransmitInterval`<sup>Optional</sup> <a name="MinTransmitInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.minTransmitInterval"></a>

```csharp
public double MinTransmitInterval { get; set; }
```

- *Type:* double

The minimum interval, in milliseconds, between BFD control packets transmitted to the peer router.

The actual value is negotiated
between the two routers and is equal to the greater of this value
and the corresponding receive interval of the other router. If set,
this value must be between 1000 and 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#min_transmit_interval GoogleComputeRouterPeer#min_transmit_interval}

---

##### `Multiplier`<sup>Optional</sup> <a name="Multiplier" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.multiplier"></a>

```csharp
public double Multiplier { get; set; }
```

- *Type:* double

The number of consecutive BFD packets that must be missed before BFD declares that a peer is unavailable.

If set, the value must
be a value between 5 and 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#multiplier GoogleComputeRouterPeer#multiplier}

---

### GoogleComputeRouterPeerConfig <a name="GoogleComputeRouterPeerConfig" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterPeerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Interface,
    string Name,
    double PeerAsn,
    string Router,
    string[] AdvertisedGroups = null,
    object AdvertisedIpRanges = null,
    double AdvertisedRoutePriority = null,
    string AdvertiseMode = null,
    GoogleComputeRouterPeerBfd Bfd = null,
    object CustomLearnedIpRanges = null,
    double CustomLearnedRoutePriority = null,
    object Enable = null,
    object EnableIpv4 = null,
    object EnableIpv6 = null,
    string[] ExportPolicies = null,
    string Id = null,
    string[] ImportPolicies = null,
    string IpAddress = null,
    string Ipv4NexthopAddress = null,
    string Ipv6NexthopAddress = null,
    GoogleComputeRouterPeerMd5AuthenticationKey Md5AuthenticationKey = null,
    string PeerIpAddress = null,
    string PeerIpv4NexthopAddress = null,
    string PeerIpv6NexthopAddress = null,
    string Project = null,
    string Region = null,
    string RouterApplianceInstance = null,
    GoogleComputeRouterPeerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.interface">Interface</a></code> | <code>string</code> | Name of the interface the BGP peer is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.name">Name</a></code> | <code>string</code> | Name of this BGP peer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerAsn">PeerAsn</a></code> | <code>double</code> | Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.router">Router</a></code> | <code>string</code> | The name of the Cloud Router in which this BgpPeer will be configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedGroups">AdvertisedGroups</a></code> | <code>string[]</code> | User-specified list of prefix groups to advertise in custom mode, which currently supports the following option:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedIpRanges">AdvertisedIpRanges</a></code> | <code>object</code> | advertised_ip_ranges block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedRoutePriority">AdvertisedRoutePriority</a></code> | <code>double</code> | The priority of routes advertised to this BGP peer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertiseMode">AdvertiseMode</a></code> | <code>string</code> | User-specified flag to indicate which mode to use for advertisement. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.bfd">Bfd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a></code> | bfd block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.customLearnedIpRanges">CustomLearnedIpRanges</a></code> | <code>object</code> | custom_learned_ip_ranges block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.customLearnedRoutePriority">CustomLearnedRoutePriority</a></code> | <code>double</code> | The user-defined custom learned route priority for a BGP session. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enable">Enable</a></code> | <code>object</code> | The status of the BGP peer connection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enableIpv4">EnableIpv4</a></code> | <code>object</code> | Enable IPv4 traffic over BGP Peer. It is enabled by default if the peerIpAddress is version 4. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enableIpv6">EnableIpv6</a></code> | <code>object</code> | Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.exportPolicies">ExportPolicies</a></code> | <code>string[]</code> | routers.list of export policies applied to this peer, in the order they must be evaluated.  The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_EXPORT type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#id GoogleComputeRouterPeer#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.importPolicies">ImportPolicies</a></code> | <code>string[]</code> | routers.list of import policies applied to this peer, in the order they must be evaluated.  The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_IMPORT type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipAddress">IpAddress</a></code> | <code>string</code> | IP address of the interface inside Google Cloud Platform. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipv4NexthopAddress">Ipv4NexthopAddress</a></code> | <code>string</code> | IPv4 address of the interface inside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipv6NexthopAddress">Ipv6NexthopAddress</a></code> | <code>string</code> | IPv6 address of the interface inside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.md5AuthenticationKey">Md5AuthenticationKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a></code> | md5_authentication_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpAddress">PeerIpAddress</a></code> | <code>string</code> | IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported. Required if 'ip_address' is set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpv4NexthopAddress">PeerIpv4NexthopAddress</a></code> | <code>string</code> | IPv4 address of the BGP interface outside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpv6NexthopAddress">PeerIpv6NexthopAddress</a></code> | <code>string</code> | IPv6 address of the BGP interface outside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#project GoogleComputeRouterPeer#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.region">Region</a></code> | <code>string</code> | Region where the router and BgpPeer reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.routerApplianceInstance">RouterApplianceInstance</a></code> | <code>string</code> | The URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.interface"></a>

```csharp
public string Interface { get; set; }
```

- *Type:* string

Name of the interface the BGP peer is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#interface GoogleComputeRouterPeer#interface}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of this BGP peer.

The name must be 1-63 characters long,
and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#name GoogleComputeRouterPeer#name}

---

##### `PeerAsn`<sup>Required</sup> <a name="PeerAsn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerAsn"></a>

```csharp
public double PeerAsn { get; set; }
```

- *Type:* double

Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#peer_asn GoogleComputeRouterPeer#peer_asn}

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.router"></a>

```csharp
public string Router { get; set; }
```

- *Type:* string

The name of the Cloud Router in which this BgpPeer will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#router GoogleComputeRouterPeer#router}

---

##### `AdvertisedGroups`<sup>Optional</sup> <a name="AdvertisedGroups" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedGroups"></a>

```csharp
public string[] AdvertisedGroups { get; set; }
```

- *Type:* string[]

User-specified list of prefix groups to advertise in custom mode, which currently supports the following option:.

* 'ALL_SUBNETS': Advertises all of the router's own VPC subnets.
  This excludes any routes learned for subnets that use VPC Network
  Peering.

Note that this field can only be populated if advertiseMode is 'CUSTOM'
and overrides the list defined for the router (in the "bgp" message).
These groups are advertised in addition to any specified prefixes.
Leave this field blank to advertise no custom groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#advertised_groups GoogleComputeRouterPeer#advertised_groups}

---

##### `AdvertisedIpRanges`<sup>Optional</sup> <a name="AdvertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedIpRanges"></a>

```csharp
public object AdvertisedIpRanges { get; set; }
```

- *Type:* object

advertised_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#advertised_ip_ranges GoogleComputeRouterPeer#advertised_ip_ranges}

---

##### `AdvertisedRoutePriority`<sup>Optional</sup> <a name="AdvertisedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedRoutePriority"></a>

```csharp
public double AdvertisedRoutePriority { get; set; }
```

- *Type:* double

The priority of routes advertised to this BGP peer.

Where there is more than one matching route of maximum
length, the routes with the lowest priority value win.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#advertised_route_priority GoogleComputeRouterPeer#advertised_route_priority}

---

##### `AdvertiseMode`<sup>Optional</sup> <a name="AdvertiseMode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertiseMode"></a>

```csharp
public string AdvertiseMode { get; set; }
```

- *Type:* string

User-specified flag to indicate which mode to use for advertisement.

Valid values of this enum field are: 'DEFAULT', 'CUSTOM' Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#advertise_mode GoogleComputeRouterPeer#advertise_mode}

---

##### `Bfd`<sup>Optional</sup> <a name="Bfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.bfd"></a>

```csharp
public GoogleComputeRouterPeerBfd Bfd { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

bfd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#bfd GoogleComputeRouterPeer#bfd}

---

##### `CustomLearnedIpRanges`<sup>Optional</sup> <a name="CustomLearnedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.customLearnedIpRanges"></a>

```csharp
public object CustomLearnedIpRanges { get; set; }
```

- *Type:* object

custom_learned_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#custom_learned_ip_ranges GoogleComputeRouterPeer#custom_learned_ip_ranges}

---

##### `CustomLearnedRoutePriority`<sup>Optional</sup> <a name="CustomLearnedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.customLearnedRoutePriority"></a>

```csharp
public double CustomLearnedRoutePriority { get; set; }
```

- *Type:* double

The user-defined custom learned route priority for a BGP session.

This value is applied to all custom learned route ranges for the session. You can choose a value
from 0 to 65335. If you don't provide a value, Google Cloud assigns a priority of 100 to the ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#custom_learned_route_priority GoogleComputeRouterPeer#custom_learned_route_priority}

---

##### `Enable`<sup>Optional</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

The status of the BGP peer connection.

If set to false, any active session
with the peer is terminated and all associated routing information is removed.
If set to true, the peer connection can be established with routing information.
The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#enable GoogleComputeRouterPeer#enable}

---

##### `EnableIpv4`<sup>Optional</sup> <a name="EnableIpv4" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enableIpv4"></a>

```csharp
public object EnableIpv4 { get; set; }
```

- *Type:* object

Enable IPv4 traffic over BGP Peer. It is enabled by default if the peerIpAddress is version 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#enable_ipv4 GoogleComputeRouterPeer#enable_ipv4}

---

##### `EnableIpv6`<sup>Optional</sup> <a name="EnableIpv6" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enableIpv6"></a>

```csharp
public object EnableIpv6 { get; set; }
```

- *Type:* object

Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#enable_ipv6 GoogleComputeRouterPeer#enable_ipv6}

---

##### `ExportPolicies`<sup>Optional</sup> <a name="ExportPolicies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.exportPolicies"></a>

```csharp
public string[] ExportPolicies { get; set; }
```

- *Type:* string[]

routers.list of export policies applied to this peer, in the order they must be evaluated.  The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_EXPORT type.

Note that Route Policies are currently available in preview.
Please use Beta API to use Route Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#export_policies GoogleComputeRouterPeer#export_policies}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#id GoogleComputeRouterPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportPolicies`<sup>Optional</sup> <a name="ImportPolicies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.importPolicies"></a>

```csharp
public string[] ImportPolicies { get; set; }
```

- *Type:* string[]

routers.list of import policies applied to this peer, in the order they must be evaluated.  The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_IMPORT type.

Note that Route Policies are currently available in preview.
Please use Beta API to use Route Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#import_policies GoogleComputeRouterPeer#import_policies}

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

IP address of the interface inside Google Cloud Platform. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#ip_address GoogleComputeRouterPeer#ip_address}

---

##### `Ipv4NexthopAddress`<sup>Optional</sup> <a name="Ipv4NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipv4NexthopAddress"></a>

```csharp
public string Ipv4NexthopAddress { get; set; }
```

- *Type:* string

IPv4 address of the interface inside Google Cloud Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#ipv4_nexthop_address GoogleComputeRouterPeer#ipv4_nexthop_address}

---

##### `Ipv6NexthopAddress`<sup>Optional</sup> <a name="Ipv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipv6NexthopAddress"></a>

```csharp
public string Ipv6NexthopAddress { get; set; }
```

- *Type:* string

IPv6 address of the interface inside Google Cloud Platform.

The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
If you do not specify the next hop addresses, Google Cloud automatically
assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#ipv6_nexthop_address GoogleComputeRouterPeer#ipv6_nexthop_address}

---

##### `Md5AuthenticationKey`<sup>Optional</sup> <a name="Md5AuthenticationKey" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.md5AuthenticationKey"></a>

```csharp
public GoogleComputeRouterPeerMd5AuthenticationKey Md5AuthenticationKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a>

md5_authentication_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#md5_authentication_key GoogleComputeRouterPeer#md5_authentication_key}

---

##### `PeerIpAddress`<sup>Optional</sup> <a name="PeerIpAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpAddress"></a>

```csharp
public string PeerIpAddress { get; set; }
```

- *Type:* string

IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported. Required if 'ip_address' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#peer_ip_address GoogleComputeRouterPeer#peer_ip_address}

---

##### `PeerIpv4NexthopAddress`<sup>Optional</sup> <a name="PeerIpv4NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpv4NexthopAddress"></a>

```csharp
public string PeerIpv4NexthopAddress { get; set; }
```

- *Type:* string

IPv4 address of the BGP interface outside Google Cloud Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#peer_ipv4_nexthop_address GoogleComputeRouterPeer#peer_ipv4_nexthop_address}

---

##### `PeerIpv6NexthopAddress`<sup>Optional</sup> <a name="PeerIpv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpv6NexthopAddress"></a>

```csharp
public string PeerIpv6NexthopAddress { get; set; }
```

- *Type:* string

IPv6 address of the BGP interface outside Google Cloud Platform.

The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
If you do not specify the next hop addresses, Google Cloud automatically
assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#peer_ipv6_nexthop_address GoogleComputeRouterPeer#peer_ipv6_nexthop_address}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#project GoogleComputeRouterPeer#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where the router and BgpPeer reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#region GoogleComputeRouterPeer#region}

---

##### `RouterApplianceInstance`<sup>Optional</sup> <a name="RouterApplianceInstance" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.routerApplianceInstance"></a>

```csharp
public string RouterApplianceInstance { get; set; }
```

- *Type:* string

The URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances.

The VM instance must be located in zones contained in the same region as
this Cloud Router. The VM instance is the peer side of the BGP session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#router_appliance_instance GoogleComputeRouterPeer#router_appliance_instance}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.timeouts"></a>

```csharp
public GoogleComputeRouterPeerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#timeouts GoogleComputeRouterPeer#timeouts}

---

### GoogleComputeRouterPeerCustomLearnedIpRanges <a name="GoogleComputeRouterPeerCustomLearnedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterPeerCustomLearnedIpRanges {
    string Range
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges.property.range">Range</a></code> | <code>string</code> | The IP range to learn. The value must be a CIDR-formatted string. |

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges.property.range"></a>

```csharp
public string Range { get; set; }
```

- *Type:* string

The IP range to learn. The value must be a CIDR-formatted string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#range GoogleComputeRouterPeer#range}

---

### GoogleComputeRouterPeerMd5AuthenticationKey <a name="GoogleComputeRouterPeerMd5AuthenticationKey" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterPeerMd5AuthenticationKey {
    string Key,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey.property.key">Key</a></code> | <code>string</code> | Value of the key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey.property.name">Name</a></code> | <code>string</code> | [REQUIRED] Name used to identify the key. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Value of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#key GoogleComputeRouterPeer#key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

[REQUIRED] Name used to identify the key.

Must be unique within a router. Must be referenced by exactly one bgpPeer. Must comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#name GoogleComputeRouterPeer#name}

---

### GoogleComputeRouterPeerTimeouts <a name="GoogleComputeRouterPeerTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterPeerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#create GoogleComputeRouterPeer#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#delete GoogleComputeRouterPeer#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#update GoogleComputeRouterPeer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#create GoogleComputeRouterPeer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#delete GoogleComputeRouterPeer#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_peer#update GoogleComputeRouterPeer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRouterPeerAdvertisedIpRangesList <a name="GoogleComputeRouterPeerAdvertisedIpRangesList" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterPeerAdvertisedIpRangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.get"></a>

```csharp
private GoogleComputeRouterPeerAdvertisedIpRangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRouterPeerAdvertisedIpRangesOutputReference <a name="GoogleComputeRouterPeerAdvertisedIpRangesOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterPeerAdvertisedIpRangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.rangeInput">RangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.range">Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.rangeInput"></a>

```csharp
public string RangeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.range"></a>

```csharp
public string Range { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRouterPeerBfdOutputReference <a name="GoogleComputeRouterPeerBfdOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterPeerBfdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMinReceiveInterval">ResetMinReceiveInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMinTransmitInterval">ResetMinTransmitInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMultiplier">ResetMultiplier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinReceiveInterval` <a name="ResetMinReceiveInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMinReceiveInterval"></a>

```csharp
private void ResetMinReceiveInterval()
```

##### `ResetMinTransmitInterval` <a name="ResetMinTransmitInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMinTransmitInterval"></a>

```csharp
private void ResetMinTransmitInterval()
```

##### `ResetMultiplier` <a name="ResetMultiplier" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMultiplier"></a>

```csharp
private void ResetMultiplier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minReceiveIntervalInput">MinReceiveIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minTransmitIntervalInput">MinTransmitIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.multiplierInput">MultiplierInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.sessionInitializationModeInput">SessionInitializationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minReceiveInterval">MinReceiveInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minTransmitInterval">MinTransmitInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.multiplier">Multiplier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.sessionInitializationMode">SessionInitializationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinReceiveIntervalInput`<sup>Optional</sup> <a name="MinReceiveIntervalInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minReceiveIntervalInput"></a>

```csharp
public double MinReceiveIntervalInput { get; }
```

- *Type:* double

---

##### `MinTransmitIntervalInput`<sup>Optional</sup> <a name="MinTransmitIntervalInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minTransmitIntervalInput"></a>

```csharp
public double MinTransmitIntervalInput { get; }
```

- *Type:* double

---

##### `MultiplierInput`<sup>Optional</sup> <a name="MultiplierInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.multiplierInput"></a>

```csharp
public double MultiplierInput { get; }
```

- *Type:* double

---

##### `SessionInitializationModeInput`<sup>Optional</sup> <a name="SessionInitializationModeInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.sessionInitializationModeInput"></a>

```csharp
public string SessionInitializationModeInput { get; }
```

- *Type:* string

---

##### `MinReceiveInterval`<sup>Required</sup> <a name="MinReceiveInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minReceiveInterval"></a>

```csharp
public double MinReceiveInterval { get; }
```

- *Type:* double

---

##### `MinTransmitInterval`<sup>Required</sup> <a name="MinTransmitInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minTransmitInterval"></a>

```csharp
public double MinTransmitInterval { get; }
```

- *Type:* double

---

##### `Multiplier`<sup>Required</sup> <a name="Multiplier" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.multiplier"></a>

```csharp
public double Multiplier { get; }
```

- *Type:* double

---

##### `SessionInitializationMode`<sup>Required</sup> <a name="SessionInitializationMode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.sessionInitializationMode"></a>

```csharp
public string SessionInitializationMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRouterPeerBfd InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

---


### GoogleComputeRouterPeerCustomLearnedIpRangesList <a name="GoogleComputeRouterPeerCustomLearnedIpRangesList" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterPeerCustomLearnedIpRangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.get"></a>

```csharp
private GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference <a name="GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.rangeInput">RangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.range">Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.rangeInput"></a>

```csharp
public string RangeInput { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.range"></a>

```csharp
public string Range { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference <a name="GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRouterPeerMd5AuthenticationKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a>

---


### GoogleComputeRouterPeerTimeoutsOutputReference <a name="GoogleComputeRouterPeerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterPeerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



