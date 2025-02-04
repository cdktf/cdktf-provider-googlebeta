# `googleNetworkSecurityTlsInspectionPolicy` Submodule <a name="`googleNetworkSecurityTlsInspectionPolicy` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityTlsInspectionPolicy <a name="GoogleNetworkSecurityTlsInspectionPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy google_network_security_tls_inspection_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer"></a>

```typescript
import { googleNetworkSecurityTlsInspectionPolicy } from '@cdktf/provider-google-beta'

new googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy(scope: Construct, id: string, config: GoogleNetworkSecurityTlsInspectionPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig">GoogleNetworkSecurityTlsInspectionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig">GoogleNetworkSecurityTlsInspectionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetCustomTlsFeatures">resetCustomTlsFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetExcludePublicCaSet">resetExcludePublicCaSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTlsFeatureProfile">resetTlsFeatureProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTrustConfig">resetTrustConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkSecurityTlsInspectionPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts">GoogleNetworkSecurityTlsInspectionPolicyTimeouts</a>

---

##### `resetCustomTlsFeatures` <a name="resetCustomTlsFeatures" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetCustomTlsFeatures"></a>

```typescript
public resetCustomTlsFeatures(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExcludePublicCaSet` <a name="resetExcludePublicCaSet" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetExcludePublicCaSet"></a>

```typescript
public resetExcludePublicCaSet(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetMinTlsVersion"></a>

```typescript
public resetMinTlsVersion(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTlsFeatureProfile` <a name="resetTlsFeatureProfile" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTlsFeatureProfile"></a>

```typescript
public resetTlsFeatureProfile(): void
```

##### `resetTrustConfig` <a name="resetTrustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.resetTrustConfig"></a>

```typescript
public resetTrustConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityTlsInspectionPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isConstruct"></a>

```typescript
import { googleNetworkSecurityTlsInspectionPolicy } from '@cdktf/provider-google-beta'

googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformElement"></a>

```typescript
import { googleNetworkSecurityTlsInspectionPolicy } from '@cdktf/provider-google-beta'

googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformResource"></a>

```typescript
import { googleNetworkSecurityTlsInspectionPolicy } from '@cdktf/provider-google-beta'

googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport"></a>

```typescript
import { googleNetworkSecurityTlsInspectionPolicy } from '@cdktf/provider-google-beta'

googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetworkSecurityTlsInspectionPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityTlsInspectionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityTlsInspectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityTlsInspectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference">GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.caPoolInput">caPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.customTlsFeaturesInput">customTlsFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.excludePublicCaSetInput">excludePublicCaSetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts">GoogleNetworkSecurityTlsInspectionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfileInput">tlsFeatureProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.trustConfigInput">trustConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.caPool">caPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.customTlsFeatures">customTlsFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.excludePublicCaSet">excludePublicCaSet</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfile">tlsFeatureProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.trustConfig">trustConfig</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference">GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `caPoolInput`<sup>Optional</sup> <a name="caPoolInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.caPoolInput"></a>

```typescript
public readonly caPoolInput: string;
```

- *Type:* string

---

##### `customTlsFeaturesInput`<sup>Optional</sup> <a name="customTlsFeaturesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.customTlsFeaturesInput"></a>

```typescript
public readonly customTlsFeaturesInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `excludePublicCaSetInput`<sup>Optional</sup> <a name="excludePublicCaSetInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.excludePublicCaSetInput"></a>

```typescript
public readonly excludePublicCaSetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.minTlsVersionInput"></a>

```typescript
public readonly minTlsVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkSecurityTlsInspectionPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts">GoogleNetworkSecurityTlsInspectionPolicyTimeouts</a>

---

##### `tlsFeatureProfileInput`<sup>Optional</sup> <a name="tlsFeatureProfileInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfileInput"></a>

```typescript
public readonly tlsFeatureProfileInput: string;
```

- *Type:* string

---

##### `trustConfigInput`<sup>Optional</sup> <a name="trustConfigInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.trustConfigInput"></a>

```typescript
public readonly trustConfigInput: string;
```

- *Type:* string

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.caPool"></a>

```typescript
public readonly caPool: string;
```

- *Type:* string

---

##### `customTlsFeatures`<sup>Required</sup> <a name="customTlsFeatures" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.customTlsFeatures"></a>

```typescript
public readonly customTlsFeatures: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `excludePublicCaSet`<sup>Required</sup> <a name="excludePublicCaSet" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.excludePublicCaSet"></a>

```typescript
public readonly excludePublicCaSet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tlsFeatureProfile`<sup>Required</sup> <a name="tlsFeatureProfile" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tlsFeatureProfile"></a>

```typescript
public readonly tlsFeatureProfile: string;
```

- *Type:* string

---

##### `trustConfig`<sup>Required</sup> <a name="trustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.trustConfig"></a>

```typescript
public readonly trustConfig: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityTlsInspectionPolicyConfig <a name="GoogleNetworkSecurityTlsInspectionPolicyConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.Initializer"></a>

```typescript
import { googleNetworkSecurityTlsInspectionPolicy } from '@cdktf/provider-google-beta'

const googleNetworkSecurityTlsInspectionPolicyConfig: googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.caPool">caPool</a></code> | <code>string</code> | A CA pool resource used to issue interception certificates. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.name">name</a></code> | <code>string</code> | Short name of the TlsInspectionPolicy resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.customTlsFeatures">customTlsFeatures</a></code> | <code>string[]</code> | List of custom TLS cipher suites selected. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.description">description</a></code> | <code>string</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.excludePublicCaSet">excludePublicCaSet</a></code> | <code>boolean \| cdktf.IResolvable</code> | If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#id GoogleNetworkSecurityTlsInspectionPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.location">location</a></code> | <code>string</code> | The location of the tls inspection policy. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | Minimum TLS version that the firewall should use when negotiating connections with both clients and servers. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#project GoogleNetworkSecurityTlsInspectionPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts">GoogleNetworkSecurityTlsInspectionPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.tlsFeatureProfile">tlsFeatureProfile</a></code> | <code>string</code> | The selected Profile. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.trustConfig">trustConfig</a></code> | <code>string</code> | A TrustConfig resource used when making a connection to the TLS server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.caPool"></a>

```typescript
public readonly caPool: string;
```

- *Type:* string

A CA pool resource used to issue interception certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#ca_pool GoogleNetworkSecurityTlsInspectionPolicy#ca_pool}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Short name of the TlsInspectionPolicy resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#name GoogleNetworkSecurityTlsInspectionPolicy#name}

---

##### `customTlsFeatures`<sup>Optional</sup> <a name="customTlsFeatures" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.customTlsFeatures"></a>

```typescript
public readonly customTlsFeatures: string[];
```

- *Type:* string[]

List of custom TLS cipher suites selected.

This field is valid only if the selected tls_feature_profile is CUSTOM. The compute.SslPoliciesService.ListAvailableFeatures method returns the set of features that can be specified in this list. Note that Secure Web Proxy does not yet honor this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#custom_tls_features GoogleNetworkSecurityTlsInspectionPolicy#custom_tls_features}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#description GoogleNetworkSecurityTlsInspectionPolicy#description}

---

##### `excludePublicCaSet`<sup>Optional</sup> <a name="excludePublicCaSet" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.excludePublicCaSet"></a>

```typescript
public readonly excludePublicCaSet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig.

These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trustConfig will be accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#exclude_public_ca_set GoogleNetworkSecurityTlsInspectionPolicy#exclude_public_ca_set}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#id GoogleNetworkSecurityTlsInspectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the tls inspection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#location GoogleNetworkSecurityTlsInspectionPolicy#location}

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

Minimum TLS version that the firewall should use when negotiating connections with both clients and servers.

If this is not set, then the default value is to allow the broadest set of clients and servers (TLS 1.0 or higher). Setting this to more restrictive values may improve security, but may also prevent the firewall from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. Possible values: ["TLS_VERSION_UNSPECIFIED", "TLS_1_0", "TLS_1_1", "TLS_1_2", "TLS_1_3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#min_tls_version GoogleNetworkSecurityTlsInspectionPolicy#min_tls_version}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#project GoogleNetworkSecurityTlsInspectionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityTlsInspectionPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts">GoogleNetworkSecurityTlsInspectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#timeouts GoogleNetworkSecurityTlsInspectionPolicy#timeouts}

---

##### `tlsFeatureProfile`<sup>Optional</sup> <a name="tlsFeatureProfile" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.tlsFeatureProfile"></a>

```typescript
public readonly tlsFeatureProfile: string;
```

- *Type:* string

The selected Profile.

If this is not set, then the default value is to allow the broadest set of clients and servers (\"PROFILE_COMPATIBLE\"). Setting this to more restrictive values may improve security, but may also prevent the TLS inspection proxy from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. Possible values: ["PROFILE_UNSPECIFIED", "PROFILE_COMPATIBLE", "PROFILE_MODERN", "PROFILE_RESTRICTED", "PROFILE_CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#tls_feature_profile GoogleNetworkSecurityTlsInspectionPolicy#tls_feature_profile}

---

##### `trustConfig`<sup>Optional</sup> <a name="trustConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyConfig.property.trustConfig"></a>

```typescript
public readonly trustConfig: string;
```

- *Type:* string

A TrustConfig resource used when making a connection to the TLS server.

This is a relative resource path following the form \"projects/{project}/locations/{location}/trustConfigs/{trust_config}\". This is necessary to intercept TLS connections to servers with certificates signed by a private CA or self-signed certificates. Trust config and the TLS inspection policy must be in the same region. Note that Secure Web Proxy does not yet honor this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#trust_config GoogleNetworkSecurityTlsInspectionPolicy#trust_config}

---

### GoogleNetworkSecurityTlsInspectionPolicyTimeouts <a name="GoogleNetworkSecurityTlsInspectionPolicyTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.Initializer"></a>

```typescript
import { googleNetworkSecurityTlsInspectionPolicy } from '@cdktf/provider-google-beta'

const googleNetworkSecurityTlsInspectionPolicyTimeouts: googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#create GoogleNetworkSecurityTlsInspectionPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#delete GoogleNetworkSecurityTlsInspectionPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#update GoogleNetworkSecurityTlsInspectionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#create GoogleNetworkSecurityTlsInspectionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#delete GoogleNetworkSecurityTlsInspectionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_tls_inspection_policy#update GoogleNetworkSecurityTlsInspectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference <a name="GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityTlsInspectionPolicy } from '@cdktf/provider-google-beta'

new googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts">GoogleNetworkSecurityTlsInspectionPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecurityTlsInspectionPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkSecurityTlsInspectionPolicy.GoogleNetworkSecurityTlsInspectionPolicyTimeouts">GoogleNetworkSecurityTlsInspectionPolicyTimeouts</a>

---



