# `googleComputeRouterPeer` Submodule <a name="`googleComputeRouterPeer` Submodule" id="@cdktf/provider-google-beta.googleComputeRouterPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRouterPeer <a name="GoogleComputeRouterPeer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer google_compute_router_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

new googleComputeRouterPeer.GoogleComputeRouterPeer(scope: Construct, id: string, config: GoogleComputeRouterPeerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig">GoogleComputeRouterPeerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig">GoogleComputeRouterPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putAdvertisedIpRanges">putAdvertisedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putBfd">putBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putCustomLearnedIpRanges">putCustomLearnedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putMd5AuthenticationKey">putMd5AuthenticationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedGroups">resetAdvertisedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedIpRanges">resetAdvertisedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedRoutePriority">resetAdvertisedRoutePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertiseMode">resetAdvertiseMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetBfd">resetBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetCustomLearnedIpRanges">resetCustomLearnedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetCustomLearnedRoutePriority">resetCustomLearnedRoutePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnableIpv4">resetEnableIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnableIpv6">resetEnableIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetExportPolicies">resetExportPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetImportPolicies">resetImportPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpv4NexthopAddress">resetIpv4NexthopAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpv6NexthopAddress">resetIpv6NexthopAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetMd5AuthenticationKey">resetMd5AuthenticationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpAddress">resetPeerIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpv4NexthopAddress">resetPeerIpv4NexthopAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpv6NexthopAddress">resetPeerIpv6NexthopAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetRouterApplianceInstance">resetRouterApplianceInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetZeroAdvertisedRoutePriority">resetZeroAdvertisedRoutePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetZeroCustomLearnedRoutePriority">resetZeroCustomLearnedRoutePriority</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvertisedIpRanges` <a name="putAdvertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putAdvertisedIpRanges"></a>

```typescript
public putAdvertisedIpRanges(value: IResolvable | GoogleComputeRouterPeerAdvertisedIpRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putAdvertisedIpRanges.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>[]

---

##### `putBfd` <a name="putBfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putBfd"></a>

```typescript
public putBfd(value: GoogleComputeRouterPeerBfd): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putBfd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

---

##### `putCustomLearnedIpRanges` <a name="putCustomLearnedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putCustomLearnedIpRanges"></a>

```typescript
public putCustomLearnedIpRanges(value: IResolvable | GoogleComputeRouterPeerCustomLearnedIpRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putCustomLearnedIpRanges.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>[]

---

##### `putMd5AuthenticationKey` <a name="putMd5AuthenticationKey" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putMd5AuthenticationKey"></a>

```typescript
public putMd5AuthenticationKey(value: GoogleComputeRouterPeerMd5AuthenticationKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putMd5AuthenticationKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeRouterPeerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>

---

##### `resetAdvertisedGroups` <a name="resetAdvertisedGroups" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedGroups"></a>

```typescript
public resetAdvertisedGroups(): void
```

##### `resetAdvertisedIpRanges` <a name="resetAdvertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedIpRanges"></a>

```typescript
public resetAdvertisedIpRanges(): void
```

##### `resetAdvertisedRoutePriority` <a name="resetAdvertisedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedRoutePriority"></a>

```typescript
public resetAdvertisedRoutePriority(): void
```

##### `resetAdvertiseMode` <a name="resetAdvertiseMode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertiseMode"></a>

```typescript
public resetAdvertiseMode(): void
```

##### `resetBfd` <a name="resetBfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetBfd"></a>

```typescript
public resetBfd(): void
```

##### `resetCustomLearnedIpRanges` <a name="resetCustomLearnedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetCustomLearnedIpRanges"></a>

```typescript
public resetCustomLearnedIpRanges(): void
```

##### `resetCustomLearnedRoutePriority` <a name="resetCustomLearnedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetCustomLearnedRoutePriority"></a>

```typescript
public resetCustomLearnedRoutePriority(): void
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetEnableIpv4` <a name="resetEnableIpv4" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnableIpv4"></a>

```typescript
public resetEnableIpv4(): void
```

##### `resetEnableIpv6` <a name="resetEnableIpv6" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnableIpv6"></a>

```typescript
public resetEnableIpv6(): void
```

##### `resetExportPolicies` <a name="resetExportPolicies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetExportPolicies"></a>

```typescript
public resetExportPolicies(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImportPolicies` <a name="resetImportPolicies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetImportPolicies"></a>

```typescript
public resetImportPolicies(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetIpv4NexthopAddress` <a name="resetIpv4NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpv4NexthopAddress"></a>

```typescript
public resetIpv4NexthopAddress(): void
```

##### `resetIpv6NexthopAddress` <a name="resetIpv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpv6NexthopAddress"></a>

```typescript
public resetIpv6NexthopAddress(): void
```

##### `resetMd5AuthenticationKey` <a name="resetMd5AuthenticationKey" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetMd5AuthenticationKey"></a>

```typescript
public resetMd5AuthenticationKey(): void
```

##### `resetPeerIpAddress` <a name="resetPeerIpAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpAddress"></a>

```typescript
public resetPeerIpAddress(): void
```

##### `resetPeerIpv4NexthopAddress` <a name="resetPeerIpv4NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpv4NexthopAddress"></a>

```typescript
public resetPeerIpv4NexthopAddress(): void
```

##### `resetPeerIpv6NexthopAddress` <a name="resetPeerIpv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpv6NexthopAddress"></a>

```typescript
public resetPeerIpv6NexthopAddress(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRouterApplianceInstance` <a name="resetRouterApplianceInstance" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetRouterApplianceInstance"></a>

```typescript
public resetRouterApplianceInstance(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZeroAdvertisedRoutePriority` <a name="resetZeroAdvertisedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetZeroAdvertisedRoutePriority"></a>

```typescript
public resetZeroAdvertisedRoutePriority(): void
```

##### `resetZeroCustomLearnedRoutePriority` <a name="resetZeroCustomLearnedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetZeroCustomLearnedRoutePriority"></a>

```typescript
public resetZeroCustomLearnedRoutePriority(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRouterPeer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isConstruct"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

googleComputeRouterPeer.GoogleComputeRouterPeer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformElement"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformResource"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeRouterPeer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRouterPeer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRouterPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRouterPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedIpRanges">advertisedIpRanges</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList">GoogleComputeRouterPeerAdvertisedIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.bfd">bfd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference">GoogleComputeRouterPeerBfdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedIpRanges">customLearnedIpRanges</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList">GoogleComputeRouterPeerCustomLearnedIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.isAdvertisedRoutePrioritySet">isAdvertisedRoutePrioritySet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.isCustomLearnedPrioritySet">isCustomLearnedPrioritySet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.managementType">managementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.md5AuthenticationKey">md5AuthenticationKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference">GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference">GoogleComputeRouterPeerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedGroupsInput">advertisedGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedIpRangesInput">advertisedIpRangesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedRoutePriorityInput">advertisedRoutePriorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertiseModeInput">advertiseModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.bfdInput">bfdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedIpRangesInput">customLearnedIpRangesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedRoutePriorityInput">customLearnedRoutePriorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv4Input">enableIpv4Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv6Input">enableIpv6Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.exportPoliciesInput">exportPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.importPoliciesInput">importPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.interfaceInput">interfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv4NexthopAddressInput">ipv4NexthopAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv6NexthopAddressInput">ipv6NexthopAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.md5AuthenticationKeyInput">md5AuthenticationKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerAsnInput">peerAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpAddressInput">peerIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv4NexthopAddressInput">peerIpv4NexthopAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv6NexthopAddressInput">peerIpv6NexthopAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerApplianceInstanceInput">routerApplianceInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerInput">routerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.zeroAdvertisedRoutePriorityInput">zeroAdvertisedRoutePriorityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.zeroCustomLearnedRoutePriorityInput">zeroCustomLearnedRoutePriorityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedGroups">advertisedGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedRoutePriority">advertisedRoutePriority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertiseMode">advertiseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedRoutePriority">customLearnedRoutePriority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv4">enableIpv4</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv6">enableIpv6</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.exportPolicies">exportPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.importPolicies">importPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.interface">interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv4NexthopAddress">ipv4NexthopAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv6NexthopAddress">ipv6NexthopAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerAsn">peerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpAddress">peerIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv4NexthopAddress">peerIpv4NexthopAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv6NexthopAddress">peerIpv6NexthopAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.router">router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerApplianceInstance">routerApplianceInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.zeroAdvertisedRoutePriority">zeroAdvertisedRoutePriority</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.zeroCustomLearnedRoutePriority">zeroCustomLearnedRoutePriority</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advertisedIpRanges`<sup>Required</sup> <a name="advertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedIpRanges"></a>

```typescript
public readonly advertisedIpRanges: GoogleComputeRouterPeerAdvertisedIpRangesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList">GoogleComputeRouterPeerAdvertisedIpRangesList</a>

---

##### `bfd`<sup>Required</sup> <a name="bfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.bfd"></a>

```typescript
public readonly bfd: GoogleComputeRouterPeerBfdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference">GoogleComputeRouterPeerBfdOutputReference</a>

---

##### `customLearnedIpRanges`<sup>Required</sup> <a name="customLearnedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedIpRanges"></a>

```typescript
public readonly customLearnedIpRanges: GoogleComputeRouterPeerCustomLearnedIpRangesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList">GoogleComputeRouterPeerCustomLearnedIpRangesList</a>

---

##### `isAdvertisedRoutePrioritySet`<sup>Required</sup> <a name="isAdvertisedRoutePrioritySet" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.isAdvertisedRoutePrioritySet"></a>

```typescript
public readonly isAdvertisedRoutePrioritySet: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isCustomLearnedPrioritySet`<sup>Required</sup> <a name="isCustomLearnedPrioritySet" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.isCustomLearnedPrioritySet"></a>

```typescript
public readonly isCustomLearnedPrioritySet: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `managementType`<sup>Required</sup> <a name="managementType" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.managementType"></a>

```typescript
public readonly managementType: string;
```

- *Type:* string

---

##### `md5AuthenticationKey`<sup>Required</sup> <a name="md5AuthenticationKey" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.md5AuthenticationKey"></a>

```typescript
public readonly md5AuthenticationKey: GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference">GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRouterPeerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference">GoogleComputeRouterPeerTimeoutsOutputReference</a>

---

##### `advertisedGroupsInput`<sup>Optional</sup> <a name="advertisedGroupsInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedGroupsInput"></a>

```typescript
public readonly advertisedGroupsInput: string[];
```

- *Type:* string[]

---

##### `advertisedIpRangesInput`<sup>Optional</sup> <a name="advertisedIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedIpRangesInput"></a>

```typescript
public readonly advertisedIpRangesInput: IResolvable | GoogleComputeRouterPeerAdvertisedIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>[]

---

##### `advertisedRoutePriorityInput`<sup>Optional</sup> <a name="advertisedRoutePriorityInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedRoutePriorityInput"></a>

```typescript
public readonly advertisedRoutePriorityInput: number;
```

- *Type:* number

---

##### `advertiseModeInput`<sup>Optional</sup> <a name="advertiseModeInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertiseModeInput"></a>

```typescript
public readonly advertiseModeInput: string;
```

- *Type:* string

---

##### `bfdInput`<sup>Optional</sup> <a name="bfdInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.bfdInput"></a>

```typescript
public readonly bfdInput: GoogleComputeRouterPeerBfd;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

---

##### `customLearnedIpRangesInput`<sup>Optional</sup> <a name="customLearnedIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedIpRangesInput"></a>

```typescript
public readonly customLearnedIpRangesInput: IResolvable | GoogleComputeRouterPeerCustomLearnedIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>[]

---

##### `customLearnedRoutePriorityInput`<sup>Optional</sup> <a name="customLearnedRoutePriorityInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedRoutePriorityInput"></a>

```typescript
public readonly customLearnedRoutePriorityInput: number;
```

- *Type:* number

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIpv4Input`<sup>Optional</sup> <a name="enableIpv4Input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv4Input"></a>

```typescript
public readonly enableIpv4Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIpv6Input`<sup>Optional</sup> <a name="enableIpv6Input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv6Input"></a>

```typescript
public readonly enableIpv6Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exportPoliciesInput`<sup>Optional</sup> <a name="exportPoliciesInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.exportPoliciesInput"></a>

```typescript
public readonly exportPoliciesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importPoliciesInput`<sup>Optional</sup> <a name="importPoliciesInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.importPoliciesInput"></a>

```typescript
public readonly importPoliciesInput: string[];
```

- *Type:* string[]

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.interfaceInput"></a>

```typescript
public readonly interfaceInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `ipv4NexthopAddressInput`<sup>Optional</sup> <a name="ipv4NexthopAddressInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv4NexthopAddressInput"></a>

```typescript
public readonly ipv4NexthopAddressInput: string;
```

- *Type:* string

---

##### `ipv6NexthopAddressInput`<sup>Optional</sup> <a name="ipv6NexthopAddressInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv6NexthopAddressInput"></a>

```typescript
public readonly ipv6NexthopAddressInput: string;
```

- *Type:* string

---

##### `md5AuthenticationKeyInput`<sup>Optional</sup> <a name="md5AuthenticationKeyInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.md5AuthenticationKeyInput"></a>

```typescript
public readonly md5AuthenticationKeyInput: GoogleComputeRouterPeerMd5AuthenticationKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `peerAsnInput`<sup>Optional</sup> <a name="peerAsnInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerAsnInput"></a>

```typescript
public readonly peerAsnInput: number;
```

- *Type:* number

---

##### `peerIpAddressInput`<sup>Optional</sup> <a name="peerIpAddressInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpAddressInput"></a>

```typescript
public readonly peerIpAddressInput: string;
```

- *Type:* string

---

##### `peerIpv4NexthopAddressInput`<sup>Optional</sup> <a name="peerIpv4NexthopAddressInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv4NexthopAddressInput"></a>

```typescript
public readonly peerIpv4NexthopAddressInput: string;
```

- *Type:* string

---

##### `peerIpv6NexthopAddressInput`<sup>Optional</sup> <a name="peerIpv6NexthopAddressInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv6NexthopAddressInput"></a>

```typescript
public readonly peerIpv6NexthopAddressInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routerApplianceInstanceInput`<sup>Optional</sup> <a name="routerApplianceInstanceInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerApplianceInstanceInput"></a>

```typescript
public readonly routerApplianceInstanceInput: string;
```

- *Type:* string

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerInput"></a>

```typescript
public readonly routerInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeRouterPeerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>

---

##### `zeroAdvertisedRoutePriorityInput`<sup>Optional</sup> <a name="zeroAdvertisedRoutePriorityInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.zeroAdvertisedRoutePriorityInput"></a>

```typescript
public readonly zeroAdvertisedRoutePriorityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zeroCustomLearnedRoutePriorityInput`<sup>Optional</sup> <a name="zeroCustomLearnedRoutePriorityInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.zeroCustomLearnedRoutePriorityInput"></a>

```typescript
public readonly zeroCustomLearnedRoutePriorityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `advertisedGroups`<sup>Required</sup> <a name="advertisedGroups" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedGroups"></a>

```typescript
public readonly advertisedGroups: string[];
```

- *Type:* string[]

---

##### `advertisedRoutePriority`<sup>Required</sup> <a name="advertisedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedRoutePriority"></a>

```typescript
public readonly advertisedRoutePriority: number;
```

- *Type:* number

---

##### `advertiseMode`<sup>Required</sup> <a name="advertiseMode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertiseMode"></a>

```typescript
public readonly advertiseMode: string;
```

- *Type:* string

---

##### `customLearnedRoutePriority`<sup>Required</sup> <a name="customLearnedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedRoutePriority"></a>

```typescript
public readonly customLearnedRoutePriority: number;
```

- *Type:* number

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIpv4`<sup>Required</sup> <a name="enableIpv4" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv4"></a>

```typescript
public readonly enableIpv4: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIpv6`<sup>Required</sup> <a name="enableIpv6" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv6"></a>

```typescript
public readonly enableIpv6: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exportPolicies`<sup>Required</sup> <a name="exportPolicies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.exportPolicies"></a>

```typescript
public readonly exportPolicies: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importPolicies`<sup>Required</sup> <a name="importPolicies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.importPolicies"></a>

```typescript
public readonly importPolicies: string[];
```

- *Type:* string[]

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipv4NexthopAddress`<sup>Required</sup> <a name="ipv4NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv4NexthopAddress"></a>

```typescript
public readonly ipv4NexthopAddress: string;
```

- *Type:* string

---

##### `ipv6NexthopAddress`<sup>Required</sup> <a name="ipv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv6NexthopAddress"></a>

```typescript
public readonly ipv6NexthopAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

---

##### `peerIpAddress`<sup>Required</sup> <a name="peerIpAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpAddress"></a>

```typescript
public readonly peerIpAddress: string;
```

- *Type:* string

---

##### `peerIpv4NexthopAddress`<sup>Required</sup> <a name="peerIpv4NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv4NexthopAddress"></a>

```typescript
public readonly peerIpv4NexthopAddress: string;
```

- *Type:* string

---

##### `peerIpv6NexthopAddress`<sup>Required</sup> <a name="peerIpv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv6NexthopAddress"></a>

```typescript
public readonly peerIpv6NexthopAddress: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

---

##### `routerApplianceInstance`<sup>Required</sup> <a name="routerApplianceInstance" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerApplianceInstance"></a>

```typescript
public readonly routerApplianceInstance: string;
```

- *Type:* string

---

##### `zeroAdvertisedRoutePriority`<sup>Required</sup> <a name="zeroAdvertisedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.zeroAdvertisedRoutePriority"></a>

```typescript
public readonly zeroAdvertisedRoutePriority: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zeroCustomLearnedRoutePriority`<sup>Required</sup> <a name="zeroCustomLearnedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.zeroCustomLearnedRoutePriority"></a>

```typescript
public readonly zeroCustomLearnedRoutePriority: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRouterPeerAdvertisedIpRanges <a name="GoogleComputeRouterPeerAdvertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.Initializer"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

const googleComputeRouterPeerAdvertisedIpRanges: googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.property.range">range</a></code> | <code>string</code> | The IP range to advertise. The value must be a CIDR-formatted string. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.property.description">description</a></code> | <code>string</code> | User-specified description for the IP range. |

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.property.range"></a>

```typescript
public readonly range: string;
```

- *Type:* string

The IP range to advertise. The value must be a CIDR-formatted string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#range GoogleComputeRouterPeer#range}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-specified description for the IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#description GoogleComputeRouterPeer#description}

---

### GoogleComputeRouterPeerBfd <a name="GoogleComputeRouterPeerBfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.Initializer"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

const googleComputeRouterPeerBfd: googleComputeRouterPeer.GoogleComputeRouterPeerBfd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.sessionInitializationMode">sessionInitializationMode</a></code> | <code>string</code> | The BFD session initialization mode for this BGP peer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.minReceiveInterval">minReceiveInterval</a></code> | <code>number</code> | The minimum interval, in milliseconds, between BFD control packets received from the peer router. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.minTransmitInterval">minTransmitInterval</a></code> | <code>number</code> | The minimum interval, in milliseconds, between BFD control packets transmitted to the peer router. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.multiplier">multiplier</a></code> | <code>number</code> | The number of consecutive BFD packets that must be missed before BFD declares that a peer is unavailable. |

---

##### `sessionInitializationMode`<sup>Required</sup> <a name="sessionInitializationMode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.sessionInitializationMode"></a>

```typescript
public readonly sessionInitializationMode: string;
```

- *Type:* string

The BFD session initialization mode for this BGP peer.

If set to 'ACTIVE', the Cloud Router will initiate the BFD session
for this BGP peer. If set to 'PASSIVE', the Cloud Router will wait
for the peer router to initiate the BFD session for this BGP peer.
If set to 'DISABLED', BFD is disabled for this BGP peer. Possible values: ["ACTIVE", "DISABLED", "PASSIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#session_initialization_mode GoogleComputeRouterPeer#session_initialization_mode}

---

##### `minReceiveInterval`<sup>Optional</sup> <a name="minReceiveInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.minReceiveInterval"></a>

```typescript
public readonly minReceiveInterval: number;
```

- *Type:* number

The minimum interval, in milliseconds, between BFD control packets received from the peer router.

The actual value is negotiated
between the two routers and is equal to the greater of this value
and the transmit interval of the other router. If set, this value
must be between 1000 and 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#min_receive_interval GoogleComputeRouterPeer#min_receive_interval}

---

##### `minTransmitInterval`<sup>Optional</sup> <a name="minTransmitInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.minTransmitInterval"></a>

```typescript
public readonly minTransmitInterval: number;
```

- *Type:* number

The minimum interval, in milliseconds, between BFD control packets transmitted to the peer router.

The actual value is negotiated
between the two routers and is equal to the greater of this value
and the corresponding receive interval of the other router. If set,
this value must be between 1000 and 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#min_transmit_interval GoogleComputeRouterPeer#min_transmit_interval}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

The number of consecutive BFD packets that must be missed before BFD declares that a peer is unavailable.

If set, the value must
be a value between 5 and 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#multiplier GoogleComputeRouterPeer#multiplier}

---

### GoogleComputeRouterPeerConfig <a name="GoogleComputeRouterPeerConfig" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.Initializer"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

const googleComputeRouterPeerConfig: googleComputeRouterPeer.GoogleComputeRouterPeerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.interface">interface</a></code> | <code>string</code> | Name of the interface the BGP peer is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.name">name</a></code> | <code>string</code> | Name of this BGP peer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerAsn">peerAsn</a></code> | <code>number</code> | Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.router">router</a></code> | <code>string</code> | The name of the Cloud Router in which this BgpPeer will be configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedGroups">advertisedGroups</a></code> | <code>string[]</code> | User-specified list of prefix groups to advertise in custom mode, which currently supports the following option:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedIpRanges">advertisedIpRanges</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>[]</code> | advertised_ip_ranges block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedRoutePriority">advertisedRoutePriority</a></code> | <code>number</code> | The priority of routes advertised to this BGP peer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertiseMode">advertiseMode</a></code> | <code>string</code> | User-specified flag to indicate which mode to use for advertisement. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.bfd">bfd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a></code> | bfd block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.customLearnedIpRanges">customLearnedIpRanges</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>[]</code> | custom_learned_ip_ranges block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.customLearnedRoutePriority">customLearnedRoutePriority</a></code> | <code>number</code> | The user-defined custom learned route priority for a BGP session. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | The status of the BGP peer connection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enableIpv4">enableIpv4</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable IPv4 traffic over BGP Peer. It is enabled by default if the peerIpAddress is version 4. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enableIpv6">enableIpv6</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.exportPolicies">exportPolicies</a></code> | <code>string[]</code> | routers.list of export policies applied to this peer, in the order they must be evaluated.  The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_EXPORT type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#id GoogleComputeRouterPeer#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.importPolicies">importPolicies</a></code> | <code>string[]</code> | routers.list of import policies applied to this peer, in the order they must be evaluated.  The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_IMPORT type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipAddress">ipAddress</a></code> | <code>string</code> | IP address of the interface inside Google Cloud Platform. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipv4NexthopAddress">ipv4NexthopAddress</a></code> | <code>string</code> | IPv4 address of the interface inside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipv6NexthopAddress">ipv6NexthopAddress</a></code> | <code>string</code> | IPv6 address of the interface inside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.md5AuthenticationKey">md5AuthenticationKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a></code> | md5_authentication_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpAddress">peerIpAddress</a></code> | <code>string</code> | IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported. Required if 'ip_address' is set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpv4NexthopAddress">peerIpv4NexthopAddress</a></code> | <code>string</code> | IPv4 address of the BGP interface outside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpv6NexthopAddress">peerIpv6NexthopAddress</a></code> | <code>string</code> | IPv6 address of the BGP interface outside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#project GoogleComputeRouterPeer#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.region">region</a></code> | <code>string</code> | Region where the router and BgpPeer reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.routerApplianceInstance">routerApplianceInstance</a></code> | <code>string</code> | The URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.zeroAdvertisedRoutePriority">zeroAdvertisedRoutePriority</a></code> | <code>boolean \| cdktf.IResolvable</code> | Force the advertised_route_priority to be 0. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.zeroCustomLearnedRoutePriority">zeroCustomLearnedRoutePriority</a></code> | <code>boolean \| cdktf.IResolvable</code> | Force the custom_learned_route_priority to be 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

Name of the interface the BGP peer is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#interface GoogleComputeRouterPeer#interface}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of this BGP peer.

The name must be 1-63 characters long,
and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#name GoogleComputeRouterPeer#name}

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#peer_asn GoogleComputeRouterPeer#peer_asn}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

The name of the Cloud Router in which this BgpPeer will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#router GoogleComputeRouterPeer#router}

---

##### `advertisedGroups`<sup>Optional</sup> <a name="advertisedGroups" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedGroups"></a>

```typescript
public readonly advertisedGroups: string[];
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#advertised_groups GoogleComputeRouterPeer#advertised_groups}

---

##### `advertisedIpRanges`<sup>Optional</sup> <a name="advertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedIpRanges"></a>

```typescript
public readonly advertisedIpRanges: IResolvable | GoogleComputeRouterPeerAdvertisedIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>[]

advertised_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#advertised_ip_ranges GoogleComputeRouterPeer#advertised_ip_ranges}

---

##### `advertisedRoutePriority`<sup>Optional</sup> <a name="advertisedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedRoutePriority"></a>

```typescript
public readonly advertisedRoutePriority: number;
```

- *Type:* number

The priority of routes advertised to this BGP peer.

Where there is more than one matching route of maximum
length, the routes with the lowest priority value win.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#advertised_route_priority GoogleComputeRouterPeer#advertised_route_priority}

---

##### `advertiseMode`<sup>Optional</sup> <a name="advertiseMode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertiseMode"></a>

```typescript
public readonly advertiseMode: string;
```

- *Type:* string

User-specified flag to indicate which mode to use for advertisement.

Valid values of this enum field are: 'DEFAULT', 'CUSTOM' Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#advertise_mode GoogleComputeRouterPeer#advertise_mode}

---

##### `bfd`<sup>Optional</sup> <a name="bfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.bfd"></a>

```typescript
public readonly bfd: GoogleComputeRouterPeerBfd;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

bfd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#bfd GoogleComputeRouterPeer#bfd}

---

##### `customLearnedIpRanges`<sup>Optional</sup> <a name="customLearnedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.customLearnedIpRanges"></a>

```typescript
public readonly customLearnedIpRanges: IResolvable | GoogleComputeRouterPeerCustomLearnedIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>[]

custom_learned_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#custom_learned_ip_ranges GoogleComputeRouterPeer#custom_learned_ip_ranges}

---

##### `customLearnedRoutePriority`<sup>Optional</sup> <a name="customLearnedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.customLearnedRoutePriority"></a>

```typescript
public readonly customLearnedRoutePriority: number;
```

- *Type:* number

The user-defined custom learned route priority for a BGP session.

This value is applied to all custom learned route ranges for the session. You can choose a value
from 0 to 65335. If you don't provide a value, Google Cloud assigns a priority of 100 to the ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#custom_learned_route_priority GoogleComputeRouterPeer#custom_learned_route_priority}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The status of the BGP peer connection.

If set to false, any active session
with the peer is terminated and all associated routing information is removed.
If set to true, the peer connection can be established with routing information.
The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#enable GoogleComputeRouterPeer#enable}

---

##### `enableIpv4`<sup>Optional</sup> <a name="enableIpv4" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enableIpv4"></a>

```typescript
public readonly enableIpv4: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable IPv4 traffic over BGP Peer. It is enabled by default if the peerIpAddress is version 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#enable_ipv4 GoogleComputeRouterPeer#enable_ipv4}

---

##### `enableIpv6`<sup>Optional</sup> <a name="enableIpv6" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enableIpv6"></a>

```typescript
public readonly enableIpv6: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#enable_ipv6 GoogleComputeRouterPeer#enable_ipv6}

---

##### `exportPolicies`<sup>Optional</sup> <a name="exportPolicies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.exportPolicies"></a>

```typescript
public readonly exportPolicies: string[];
```

- *Type:* string[]

routers.list of export policies applied to this peer, in the order they must be evaluated.  The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_EXPORT type.

Note that Route Policies are currently available in preview. 
Please use Beta API to use Route Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#export_policies GoogleComputeRouterPeer#export_policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#id GoogleComputeRouterPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importPolicies`<sup>Optional</sup> <a name="importPolicies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.importPolicies"></a>

```typescript
public readonly importPolicies: string[];
```

- *Type:* string[]

routers.list of import policies applied to this peer, in the order they must be evaluated.  The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_IMPORT type.

Note that Route Policies are currently available in preview. 
Please use Beta API to use Route Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#import_policies GoogleComputeRouterPeer#import_policies}

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

IP address of the interface inside Google Cloud Platform. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#ip_address GoogleComputeRouterPeer#ip_address}

---

##### `ipv4NexthopAddress`<sup>Optional</sup> <a name="ipv4NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipv4NexthopAddress"></a>

```typescript
public readonly ipv4NexthopAddress: string;
```

- *Type:* string

IPv4 address of the interface inside Google Cloud Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#ipv4_nexthop_address GoogleComputeRouterPeer#ipv4_nexthop_address}

---

##### `ipv6NexthopAddress`<sup>Optional</sup> <a name="ipv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipv6NexthopAddress"></a>

```typescript
public readonly ipv6NexthopAddress: string;
```

- *Type:* string

IPv6 address of the interface inside Google Cloud Platform.

The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
If you do not specify the next hop addresses, Google Cloud automatically
assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#ipv6_nexthop_address GoogleComputeRouterPeer#ipv6_nexthop_address}

---

##### `md5AuthenticationKey`<sup>Optional</sup> <a name="md5AuthenticationKey" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.md5AuthenticationKey"></a>

```typescript
public readonly md5AuthenticationKey: GoogleComputeRouterPeerMd5AuthenticationKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a>

md5_authentication_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#md5_authentication_key GoogleComputeRouterPeer#md5_authentication_key}

---

##### `peerIpAddress`<sup>Optional</sup> <a name="peerIpAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpAddress"></a>

```typescript
public readonly peerIpAddress: string;
```

- *Type:* string

IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported. Required if 'ip_address' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#peer_ip_address GoogleComputeRouterPeer#peer_ip_address}

---

##### `peerIpv4NexthopAddress`<sup>Optional</sup> <a name="peerIpv4NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpv4NexthopAddress"></a>

```typescript
public readonly peerIpv4NexthopAddress: string;
```

- *Type:* string

IPv4 address of the BGP interface outside Google Cloud Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#peer_ipv4_nexthop_address GoogleComputeRouterPeer#peer_ipv4_nexthop_address}

---

##### `peerIpv6NexthopAddress`<sup>Optional</sup> <a name="peerIpv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpv6NexthopAddress"></a>

```typescript
public readonly peerIpv6NexthopAddress: string;
```

- *Type:* string

IPv6 address of the BGP interface outside Google Cloud Platform.

The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
If you do not specify the next hop addresses, Google Cloud automatically
assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#peer_ipv6_nexthop_address GoogleComputeRouterPeer#peer_ipv6_nexthop_address}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#project GoogleComputeRouterPeer#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the router and BgpPeer reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#region GoogleComputeRouterPeer#region}

---

##### `routerApplianceInstance`<sup>Optional</sup> <a name="routerApplianceInstance" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.routerApplianceInstance"></a>

```typescript
public readonly routerApplianceInstance: string;
```

- *Type:* string

The URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances.

The VM instance must be located in zones contained in the same region as
this Cloud Router. The VM instance is the peer side of the BGP session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#router_appliance_instance GoogleComputeRouterPeer#router_appliance_instance}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRouterPeerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#timeouts GoogleComputeRouterPeer#timeouts}

---

##### `zeroAdvertisedRoutePriority`<sup>Optional</sup> <a name="zeroAdvertisedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.zeroAdvertisedRoutePriority"></a>

```typescript
public readonly zeroAdvertisedRoutePriority: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Force the advertised_route_priority to be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#zero_advertised_route_priority GoogleComputeRouterPeer#zero_advertised_route_priority}

---

##### `zeroCustomLearnedRoutePriority`<sup>Optional</sup> <a name="zeroCustomLearnedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.zeroCustomLearnedRoutePriority"></a>

```typescript
public readonly zeroCustomLearnedRoutePriority: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Force the custom_learned_route_priority to be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#zero_custom_learned_route_priority GoogleComputeRouterPeer#zero_custom_learned_route_priority}

---

### GoogleComputeRouterPeerCustomLearnedIpRanges <a name="GoogleComputeRouterPeerCustomLearnedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges.Initializer"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

const googleComputeRouterPeerCustomLearnedIpRanges: googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges.property.range">range</a></code> | <code>string</code> | The IP range to learn. The value must be a CIDR-formatted string. |

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges.property.range"></a>

```typescript
public readonly range: string;
```

- *Type:* string

The IP range to learn. The value must be a CIDR-formatted string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#range GoogleComputeRouterPeer#range}

---

### GoogleComputeRouterPeerMd5AuthenticationKey <a name="GoogleComputeRouterPeerMd5AuthenticationKey" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey.Initializer"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

const googleComputeRouterPeerMd5AuthenticationKey: googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey.property.key">key</a></code> | <code>string</code> | Value of the key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey.property.name">name</a></code> | <code>string</code> | [REQUIRED] Name used to identify the key. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Value of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#key GoogleComputeRouterPeer#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

[REQUIRED] Name used to identify the key.

Must be unique within a router. Must be referenced by exactly one bgpPeer. Must comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#name GoogleComputeRouterPeer#name}

---

### GoogleComputeRouterPeerTimeouts <a name="GoogleComputeRouterPeerTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.Initializer"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

const googleComputeRouterPeerTimeouts: googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#create GoogleComputeRouterPeer#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#delete GoogleComputeRouterPeer#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#update GoogleComputeRouterPeer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#create GoogleComputeRouterPeer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#delete GoogleComputeRouterPeer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_router_peer#update GoogleComputeRouterPeer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRouterPeerAdvertisedIpRangesList <a name="GoogleComputeRouterPeerAdvertisedIpRangesList" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

new googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.get"></a>

```typescript
public get(index: number): GoogleComputeRouterPeerAdvertisedIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRouterPeerAdvertisedIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>[]

---


### GoogleComputeRouterPeerAdvertisedIpRangesOutputReference <a name="GoogleComputeRouterPeerAdvertisedIpRangesOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

new googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.rangeInput">rangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.range">range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.range"></a>

```typescript
public readonly range: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRouterPeerAdvertisedIpRanges;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>

---


### GoogleComputeRouterPeerBfdOutputReference <a name="GoogleComputeRouterPeerBfdOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

new googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMinReceiveInterval">resetMinReceiveInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMinTransmitInterval">resetMinTransmitInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMultiplier">resetMultiplier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinReceiveInterval` <a name="resetMinReceiveInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMinReceiveInterval"></a>

```typescript
public resetMinReceiveInterval(): void
```

##### `resetMinTransmitInterval` <a name="resetMinTransmitInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMinTransmitInterval"></a>

```typescript
public resetMinTransmitInterval(): void
```

##### `resetMultiplier` <a name="resetMultiplier" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMultiplier"></a>

```typescript
public resetMultiplier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minReceiveIntervalInput">minReceiveIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minTransmitIntervalInput">minTransmitIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.multiplierInput">multiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.sessionInitializationModeInput">sessionInitializationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minReceiveInterval">minReceiveInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minTransmitInterval">minTransmitInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.multiplier">multiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.sessionInitializationMode">sessionInitializationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minReceiveIntervalInput`<sup>Optional</sup> <a name="minReceiveIntervalInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minReceiveIntervalInput"></a>

```typescript
public readonly minReceiveIntervalInput: number;
```

- *Type:* number

---

##### `minTransmitIntervalInput`<sup>Optional</sup> <a name="minTransmitIntervalInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minTransmitIntervalInput"></a>

```typescript
public readonly minTransmitIntervalInput: number;
```

- *Type:* number

---

##### `multiplierInput`<sup>Optional</sup> <a name="multiplierInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.multiplierInput"></a>

```typescript
public readonly multiplierInput: number;
```

- *Type:* number

---

##### `sessionInitializationModeInput`<sup>Optional</sup> <a name="sessionInitializationModeInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.sessionInitializationModeInput"></a>

```typescript
public readonly sessionInitializationModeInput: string;
```

- *Type:* string

---

##### `minReceiveInterval`<sup>Required</sup> <a name="minReceiveInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minReceiveInterval"></a>

```typescript
public readonly minReceiveInterval: number;
```

- *Type:* number

---

##### `minTransmitInterval`<sup>Required</sup> <a name="minTransmitInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minTransmitInterval"></a>

```typescript
public readonly minTransmitInterval: number;
```

- *Type:* number

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.multiplier"></a>

```typescript
public readonly multiplier: number;
```

- *Type:* number

---

##### `sessionInitializationMode`<sup>Required</sup> <a name="sessionInitializationMode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.sessionInitializationMode"></a>

```typescript
public readonly sessionInitializationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRouterPeerBfd;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

---


### GoogleComputeRouterPeerCustomLearnedIpRangesList <a name="GoogleComputeRouterPeerCustomLearnedIpRangesList" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

new googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.get"></a>

```typescript
public get(index: number): GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRouterPeerCustomLearnedIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>[]

---


### GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference <a name="GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

new googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.rangeInput">rangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.range">range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.range"></a>

```typescript
public readonly range: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRouterPeerCustomLearnedIpRanges;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>

---


### GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference <a name="GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.Initializer"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

new googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRouterPeerMd5AuthenticationKey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a>

---


### GoogleComputeRouterPeerTimeoutsOutputReference <a name="GoogleComputeRouterPeerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeRouterPeer } from '@cdktf/provider-google-beta'

new googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRouterPeerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>

---



