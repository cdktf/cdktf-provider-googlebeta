# `googleContainerAwsCluster` Submodule <a name="`googleContainerAwsCluster` Submodule" id="@cdktf/provider-google-beta.googleContainerAwsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAwsCluster <a name="GoogleContainerAwsCluster" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster google_container_aws_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsCluster(scope: Construct, id: string, config: GoogleContainerAwsClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig">GoogleContainerAwsClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig">GoogleContainerAwsClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putBinaryAuthorization">putBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane">putControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putFleet">putFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putNetworking">putNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetBinaryAuthorization">resetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putAuthorization"></a>

```typescript
public putAuthorization(value: GoogleContainerAwsClusterAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization">GoogleContainerAwsClusterAuthorization</a>

---

##### `putBinaryAuthorization` <a name="putBinaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putBinaryAuthorization"></a>

```typescript
public putBinaryAuthorization(value: GoogleContainerAwsClusterBinaryAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization">GoogleContainerAwsClusterBinaryAuthorization</a>

---

##### `putControlPlane` <a name="putControlPlane" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane"></a>

```typescript
public putControlPlane(value: GoogleContainerAwsClusterControlPlane): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putControlPlane.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane">GoogleContainerAwsClusterControlPlane</a>

---

##### `putFleet` <a name="putFleet" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putFleet"></a>

```typescript
public putFleet(value: GoogleContainerAwsClusterFleet): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet">GoogleContainerAwsClusterFleet</a>

---

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putLoggingConfig"></a>

```typescript
public putLoggingConfig(value: GoogleContainerAwsClusterLoggingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig">GoogleContainerAwsClusterLoggingConfig</a>

---

##### `putNetworking` <a name="putNetworking" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putNetworking"></a>

```typescript
public putNetworking(value: GoogleContainerAwsClusterNetworking): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putNetworking.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking">GoogleContainerAwsClusterNetworking</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleContainerAwsClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts">GoogleContainerAwsClusterTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetBinaryAuthorization` <a name="resetBinaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetBinaryAuthorization"></a>

```typescript
public resetBinaryAuthorization(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetLoggingConfig"></a>

```typescript
public resetLoggingConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContainerAwsCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isConstruct"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

googleContainerAwsCluster.GoogleContainerAwsCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isTerraformElement"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

googleContainerAwsCluster.GoogleContainerAwsCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isTerraformResource"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

googleContainerAwsCluster.GoogleContainerAwsCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.generateConfigForImport"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

googleContainerAwsCluster.GoogleContainerAwsCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleContainerAwsCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContainerAwsCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContainerAwsCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAwsCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference">GoogleContainerAwsClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference">GoogleContainerAwsClusterBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference">GoogleContainerAwsClusterControlPlaneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference">GoogleContainerAwsClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference">GoogleContainerAwsClusterLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference">GoogleContainerAwsClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference">GoogleContainerAwsClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.workloadIdentityConfig">workloadIdentityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList">GoogleContainerAwsClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.authorizationInput">authorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization">GoogleContainerAwsClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.binaryAuthorizationInput">binaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization">GoogleContainerAwsClusterBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.controlPlaneInput">controlPlaneInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane">GoogleContainerAwsClusterControlPlane</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.fleetInput">fleetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet">GoogleContainerAwsClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig">GoogleContainerAwsClusterLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.networkingInput">networkingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking">GoogleContainerAwsClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts">GoogleContainerAwsClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.authorization"></a>

```typescript
public readonly authorization: GoogleContainerAwsClusterAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference">GoogleContainerAwsClusterAuthorizationOutputReference</a>

---

##### `binaryAuthorization`<sup>Required</sup> <a name="binaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.binaryAuthorization"></a>

```typescript
public readonly binaryAuthorization: GoogleContainerAwsClusterBinaryAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference">GoogleContainerAwsClusterBinaryAuthorizationOutputReference</a>

---

##### `controlPlane`<sup>Required</sup> <a name="controlPlane" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.controlPlane"></a>

```typescript
public readonly controlPlane: GoogleContainerAwsClusterControlPlaneOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference">GoogleContainerAwsClusterControlPlaneOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.fleet"></a>

```typescript
public readonly fleet: GoogleContainerAwsClusterFleetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference">GoogleContainerAwsClusterFleetOutputReference</a>

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: GoogleContainerAwsClusterLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference">GoogleContainerAwsClusterLoggingConfigOutputReference</a>

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.networking"></a>

```typescript
public readonly networking: GoogleContainerAwsClusterNetworkingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference">GoogleContainerAwsClusterNetworkingOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContainerAwsClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference">GoogleContainerAwsClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `workloadIdentityConfig`<sup>Required</sup> <a name="workloadIdentityConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.workloadIdentityConfig"></a>

```typescript
public readonly workloadIdentityConfig: GoogleContainerAwsClusterWorkloadIdentityConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList">GoogleContainerAwsClusterWorkloadIdentityConfigList</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: GoogleContainerAwsClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization">GoogleContainerAwsClusterAuthorization</a>

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `binaryAuthorizationInput`<sup>Optional</sup> <a name="binaryAuthorizationInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.binaryAuthorizationInput"></a>

```typescript
public readonly binaryAuthorizationInput: GoogleContainerAwsClusterBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization">GoogleContainerAwsClusterBinaryAuthorization</a>

---

##### `controlPlaneInput`<sup>Optional</sup> <a name="controlPlaneInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.controlPlaneInput"></a>

```typescript
public readonly controlPlaneInput: GoogleContainerAwsClusterControlPlane;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane">GoogleContainerAwsClusterControlPlane</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fleetInput`<sup>Optional</sup> <a name="fleetInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.fleetInput"></a>

```typescript
public readonly fleetInput: GoogleContainerAwsClusterFleet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet">GoogleContainerAwsClusterFleet</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.loggingConfigInput"></a>

```typescript
public readonly loggingConfigInput: GoogleContainerAwsClusterLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig">GoogleContainerAwsClusterLoggingConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkingInput`<sup>Optional</sup> <a name="networkingInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.networkingInput"></a>

```typescript
public readonly networkingInput: GoogleContainerAwsClusterNetworking;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking">GoogleContainerAwsClusterNetworking</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleContainerAwsClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts">GoogleContainerAwsClusterTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAwsClusterAuthorization <a name="GoogleContainerAwsClusterAuthorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterAuthorization: googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization.property.adminUsers">adminUsers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>[]</code> | admin_users block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization.property.adminGroups">adminGroups</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>[]</code> | admin_groups block. |

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization.property.adminUsers"></a>

```typescript
public readonly adminUsers: IResolvable | GoogleContainerAwsClusterAuthorizationAdminUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>[]

admin_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#admin_users GoogleContainerAwsCluster#admin_users}

---

##### `adminGroups`<sup>Optional</sup> <a name="adminGroups" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization.property.adminGroups"></a>

```typescript
public readonly adminGroups: IResolvable | GoogleContainerAwsClusterAuthorizationAdminGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>[]

admin_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#admin_groups GoogleContainerAwsCluster#admin_groups}

---

### GoogleContainerAwsClusterAuthorizationAdminGroups <a name="GoogleContainerAwsClusterAuthorizationAdminGroups" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterAuthorizationAdminGroups: googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups.property.group">group</a></code> | <code>string</code> | The name of the group, e.g. `my-group@domain.com`. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The name of the group, e.g. `my-group@domain.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#group GoogleContainerAwsCluster#group}

---

### GoogleContainerAwsClusterAuthorizationAdminUsers <a name="GoogleContainerAwsClusterAuthorizationAdminUsers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterAuthorizationAdminUsers: googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers.property.username">username</a></code> | <code>string</code> | The name of the user, e.g. `my-gcp-id@gmail.com`. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The name of the user, e.g. `my-gcp-id@gmail.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#username GoogleContainerAwsCluster#username}

---

### GoogleContainerAwsClusterBinaryAuthorization <a name="GoogleContainerAwsClusterBinaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterBinaryAuthorization: googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | Mode of operation for Binary Authorization policy evaluation. Possible values: DISABLED, PROJECT_SINGLETON_POLICY_ENFORCE. |

---

##### `evaluationMode`<sup>Optional</sup> <a name="evaluationMode" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

Mode of operation for Binary Authorization policy evaluation. Possible values: DISABLED, PROJECT_SINGLETON_POLICY_ENFORCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#evaluation_mode GoogleContainerAwsCluster#evaluation_mode}

---

### GoogleContainerAwsClusterConfig <a name="GoogleContainerAwsClusterConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterConfig: googleContainerAwsCluster.GoogleContainerAwsClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization">GoogleContainerAwsClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.awsRegion">awsRegion</a></code> | <code>string</code> | The AWS region where the cluster runs. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.controlPlane">controlPlane</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane">GoogleContainerAwsClusterControlPlane</a></code> | control_plane block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet">GoogleContainerAwsClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.name">name</a></code> | <code>string</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.networking">networking</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking">GoogleContainerAwsClusterNetworking</a></code> | networking block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization">GoogleContainerAwsClusterBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.description">description</a></code> | <code>string</code> | Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#id GoogleContainerAwsCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig">GoogleContainerAwsClusterLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts">GoogleContainerAwsClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.authorization"></a>

```typescript
public readonly authorization: GoogleContainerAwsClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization">GoogleContainerAwsClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#authorization GoogleContainerAwsCluster#authorization}

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

The AWS region where the cluster runs.

Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#aws_region GoogleContainerAwsCluster#aws_region}

---

##### `controlPlane`<sup>Required</sup> <a name="controlPlane" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.controlPlane"></a>

```typescript
public readonly controlPlane: GoogleContainerAwsClusterControlPlane;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane">GoogleContainerAwsClusterControlPlane</a>

control_plane block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#control_plane GoogleContainerAwsCluster#control_plane}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.fleet"></a>

```typescript
public readonly fleet: GoogleContainerAwsClusterFleet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet">GoogleContainerAwsClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#fleet GoogleContainerAwsCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#location GoogleContainerAwsCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#name GoogleContainerAwsCluster#name}

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.networking"></a>

```typescript
public readonly networking: GoogleContainerAwsClusterNetworking;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking">GoogleContainerAwsClusterNetworking</a>

networking block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#networking GoogleContainerAwsCluster#networking}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#annotations GoogleContainerAwsCluster#annotations}

---

##### `binaryAuthorization`<sup>Optional</sup> <a name="binaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.binaryAuthorization"></a>

```typescript
public readonly binaryAuthorization: GoogleContainerAwsClusterBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization">GoogleContainerAwsClusterBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#binary_authorization GoogleContainerAwsCluster#binary_authorization}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#description GoogleContainerAwsCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#id GoogleContainerAwsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: GoogleContainerAwsClusterLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig">GoogleContainerAwsClusterLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#logging_config GoogleContainerAwsCluster#logging_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#project GoogleContainerAwsCluster#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContainerAwsClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts">GoogleContainerAwsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#timeouts GoogleContainerAwsCluster#timeouts}

---

### GoogleContainerAwsClusterControlPlane <a name="GoogleContainerAwsClusterControlPlane" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterControlPlane: googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.awsServicesAuthentication">awsServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication">GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | aws_services_authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.configEncryption">configEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption">GoogleContainerAwsClusterControlPlaneConfigEncryption</a></code> | config_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.databaseEncryption">databaseEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption">GoogleContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | database_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | The name of the AWS IAM instance pofile to assign to each control plane replica. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The list of subnets where control plane replicas will run. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.version">version</a></code> | <code>string</code> | The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling . |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.instancePlacement">instancePlacement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement">GoogleContainerAwsClusterControlPlaneInstancePlacement</a></code> | instance_placement block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.instanceType">instanceType</a></code> | <code>string</code> | Optional. The AWS instance type. When unspecified, it defaults to `m5.large`. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.mainVolume">mainVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume">GoogleContainerAwsClusterControlPlaneMainVolume</a></code> | main_volume block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig">GoogleContainerAwsClusterControlPlaneProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume">GoogleContainerAwsClusterControlPlaneRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig">GoogleContainerAwsClusterControlPlaneSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Optional. |

---

##### `awsServicesAuthentication`<sup>Required</sup> <a name="awsServicesAuthentication" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.awsServicesAuthentication"></a>

```typescript
public readonly awsServicesAuthentication: GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication">GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

aws_services_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#aws_services_authentication GoogleContainerAwsCluster#aws_services_authentication}

---

##### `configEncryption`<sup>Required</sup> <a name="configEncryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.configEncryption"></a>

```typescript
public readonly configEncryption: GoogleContainerAwsClusterControlPlaneConfigEncryption;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption">GoogleContainerAwsClusterControlPlaneConfigEncryption</a>

config_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#config_encryption GoogleContainerAwsCluster#config_encryption}

---

##### `databaseEncryption`<sup>Required</sup> <a name="databaseEncryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.databaseEncryption"></a>

```typescript
public readonly databaseEncryption: GoogleContainerAwsClusterControlPlaneDatabaseEncryption;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption">GoogleContainerAwsClusterControlPlaneDatabaseEncryption</a>

database_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#database_encryption GoogleContainerAwsCluster#database_encryption}

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

The name of the AWS IAM instance pofile to assign to each control plane replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#iam_instance_profile GoogleContainerAwsCluster#iam_instance_profile}

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The list of subnets where control plane replicas will run.

A replica will be provisioned on each subnet and up to three values can be provided. Each subnet must be in a different AWS Availability Zone (AZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#subnet_ids GoogleContainerAwsCluster#subnet_ids}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#version GoogleContainerAwsCluster#version}

---

##### `instancePlacement`<sup>Optional</sup> <a name="instancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.instancePlacement"></a>

```typescript
public readonly instancePlacement: GoogleContainerAwsClusterControlPlaneInstancePlacement;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement">GoogleContainerAwsClusterControlPlaneInstancePlacement</a>

instance_placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#instance_placement GoogleContainerAwsCluster#instance_placement}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#instance_type GoogleContainerAwsCluster#instance_type}

---

##### `mainVolume`<sup>Optional</sup> <a name="mainVolume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.mainVolume"></a>

```typescript
public readonly mainVolume: GoogleContainerAwsClusterControlPlaneMainVolume;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume">GoogleContainerAwsClusterControlPlaneMainVolume</a>

main_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#main_volume GoogleContainerAwsCluster#main_volume}

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.proxyConfig"></a>

```typescript
public readonly proxyConfig: GoogleContainerAwsClusterControlPlaneProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig">GoogleContainerAwsClusterControlPlaneProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#proxy_config GoogleContainerAwsCluster#proxy_config}

---

##### `rootVolume`<sup>Optional</sup> <a name="rootVolume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.rootVolume"></a>

```typescript
public readonly rootVolume: GoogleContainerAwsClusterControlPlaneRootVolume;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume">GoogleContainerAwsClusterControlPlaneRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#root_volume GoogleContainerAwsCluster#root_volume}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Optional.

The IDs of additional security groups to add to control plane replicas. The Anthos Multi-Cloud API will automatically create and manage security groups with the minimum rules needed for a functioning cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#security_group_ids GoogleContainerAwsCluster#security_group_ids}

---

##### `sshConfig`<sup>Optional</sup> <a name="sshConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.sshConfig"></a>

```typescript
public readonly sshConfig: GoogleContainerAwsClusterControlPlaneSshConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig">GoogleContainerAwsClusterControlPlaneSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#ssh_config GoogleContainerAwsCluster#ssh_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

A set of AWS resource tags to propagate to all underlying managed AWS resources. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#tags GoogleContainerAwsCluster#tags}

---

### GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication <a name="GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterControlPlaneAwsServicesAuthentication: googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleSessionName">roleSessionName</a></code> | <code>string</code> | Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#role_arn GoogleContainerAwsCluster#role_arn}

---

##### `roleSessionName`<sup>Optional</sup> <a name="roleSessionName" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication.property.roleSessionName"></a>

```typescript
public readonly roleSessionName: string;
```

- *Type:* string

Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#role_session_name GoogleContainerAwsCluster#role_session_name}

---

### GoogleContainerAwsClusterControlPlaneConfigEncryption <a name="GoogleContainerAwsClusterControlPlaneConfigEncryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterControlPlaneConfigEncryption: googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN of the AWS KMS key used to encrypt cluster configuration. |

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN of the AWS KMS key used to encrypt cluster configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#kms_key_arn GoogleContainerAwsCluster#kms_key_arn}

---

### GoogleContainerAwsClusterControlPlaneDatabaseEncryption <a name="GoogleContainerAwsClusterControlPlaneDatabaseEncryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterControlPlaneDatabaseEncryption: googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN of the AWS KMS key used to encrypt cluster secrets. |

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN of the AWS KMS key used to encrypt cluster secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#kms_key_arn GoogleContainerAwsCluster#kms_key_arn}

---

### GoogleContainerAwsClusterControlPlaneInstancePlacement <a name="GoogleContainerAwsClusterControlPlaneInstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterControlPlaneInstancePlacement: googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement.property.tenancy">tenancy</a></code> | <code>string</code> | The tenancy for the instance. Possible values: TENANCY_UNSPECIFIED, DEFAULT, DEDICATED, HOST. |

---

##### `tenancy`<sup>Optional</sup> <a name="tenancy" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

The tenancy for the instance. Possible values: TENANCY_UNSPECIFIED, DEFAULT, DEDICATED, HOST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#tenancy GoogleContainerAwsCluster#tenancy}

---

### GoogleContainerAwsClusterControlPlaneMainVolume <a name="GoogleContainerAwsClusterControlPlaneMainVolume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterControlPlaneMainVolume: googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.iops">iops</a></code> | <code>number</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.sizeGib">sizeGib</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.throughput">throughput</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.volumeType">volumeType</a></code> | <code>string</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#iops GoogleContainerAwsCluster#iops}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#kms_key_arn GoogleContainerAwsCluster#kms_key_arn}

---

##### `sizeGib`<sup>Optional</sup> <a name="sizeGib" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.sizeGib"></a>

```typescript
public readonly sizeGib: number;
```

- *Type:* number

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#size_gib GoogleContainerAwsCluster#size_gib}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Optional.

The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. If volume type is gp3 and throughput is not specified, the throughput will defaults to 125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#throughput GoogleContainerAwsCluster#throughput}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#volume_type GoogleContainerAwsCluster#volume_type}

---

### GoogleContainerAwsClusterControlPlaneProxyConfig <a name="GoogleContainerAwsClusterControlPlaneProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterControlPlaneProxyConfig: googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig.property.secretArn">secretArn</a></code> | <code>string</code> | The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig.property.secretVersion">secretVersion</a></code> | <code>string</code> | The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#secret_arn GoogleContainerAwsCluster#secret_arn}

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#secret_version GoogleContainerAwsCluster#secret_version}

---

### GoogleContainerAwsClusterControlPlaneRootVolume <a name="GoogleContainerAwsClusterControlPlaneRootVolume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterControlPlaneRootVolume: googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.iops">iops</a></code> | <code>number</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.sizeGib">sizeGib</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.throughput">throughput</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.volumeType">volumeType</a></code> | <code>string</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#iops GoogleContainerAwsCluster#iops}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#kms_key_arn GoogleContainerAwsCluster#kms_key_arn}

---

##### `sizeGib`<sup>Optional</sup> <a name="sizeGib" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.sizeGib"></a>

```typescript
public readonly sizeGib: number;
```

- *Type:* number

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#size_gib GoogleContainerAwsCluster#size_gib}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Optional.

The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. If volume type is gp3 and throughput is not specified, the throughput will defaults to 125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#throughput GoogleContainerAwsCluster#throughput}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#volume_type GoogleContainerAwsCluster#volume_type}

---

### GoogleContainerAwsClusterControlPlaneSshConfig <a name="GoogleContainerAwsClusterControlPlaneSshConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterControlPlaneSshConfig: googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig.property.ec2KeyPair">ec2KeyPair</a></code> | <code>string</code> | The name of the EC2 key pair used to login into cluster machines. |

---

##### `ec2KeyPair`<sup>Required</sup> <a name="ec2KeyPair" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig.property.ec2KeyPair"></a>

```typescript
public readonly ec2KeyPair: string;
```

- *Type:* string

The name of the EC2 key pair used to login into cluster machines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#ec2_key_pair GoogleContainerAwsCluster#ec2_key_pair}

---

### GoogleContainerAwsClusterFleet <a name="GoogleContainerAwsClusterFleet" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterFleet: googleContainerAwsCluster.GoogleContainerAwsClusterFleet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet.property.project">project</a></code> | <code>string</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#project GoogleContainerAwsCluster#project}

---

### GoogleContainerAwsClusterLoggingConfig <a name="GoogleContainerAwsClusterLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterLoggingConfig: googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig.property.componentConfig">componentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig">GoogleContainerAwsClusterLoggingConfigComponentConfig</a></code> | component_config block. |

---

##### `componentConfig`<sup>Optional</sup> <a name="componentConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig.property.componentConfig"></a>

```typescript
public readonly componentConfig: GoogleContainerAwsClusterLoggingConfigComponentConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig">GoogleContainerAwsClusterLoggingConfigComponentConfig</a>

component_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#component_config GoogleContainerAwsCluster#component_config}

---

### GoogleContainerAwsClusterLoggingConfigComponentConfig <a name="GoogleContainerAwsClusterLoggingConfigComponentConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterLoggingConfigComponentConfig: googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig.property.enableComponents">enableComponents</a></code> | <code>string[]</code> | Components of the logging configuration to be enabled. |

---

##### `enableComponents`<sup>Optional</sup> <a name="enableComponents" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig.property.enableComponents"></a>

```typescript
public readonly enableComponents: string[];
```

- *Type:* string[]

Components of the logging configuration to be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#enable_components GoogleContainerAwsCluster#enable_components}

---

### GoogleContainerAwsClusterNetworking <a name="GoogleContainerAwsClusterNetworking" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterNetworking: googleContainerAwsCluster.GoogleContainerAwsClusterNetworking = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>string[]</code> | All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>string[]</code> | All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.property.vpcId">vpcId</a></code> | <code>string</code> | The VPC associated with the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.property.perNodePoolSgRulesDisabled">perNodePoolSgRulesDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable the per node pool subnet security group rules on the control plane security group. |

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.property.podAddressCidrBlocks"></a>

```typescript
public readonly podAddressCidrBlocks: string[];
```

- *Type:* string[]

All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#pod_address_cidr_blocks GoogleContainerAwsCluster#pod_address_cidr_blocks}

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.property.serviceAddressCidrBlocks"></a>

```typescript
public readonly serviceAddressCidrBlocks: string[];
```

- *Type:* string[]

All services in the cluster are assigned an RFC1918 IPv4 address from these ranges.

Only a single range is supported. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#service_address_cidr_blocks GoogleContainerAwsCluster#service_address_cidr_blocks}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The VPC associated with the cluster.

All component clusters (i.e. control plane and node pools) run on a single VPC. This field cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#vpc_id GoogleContainerAwsCluster#vpc_id}

---

##### `perNodePoolSgRulesDisabled`<sup>Optional</sup> <a name="perNodePoolSgRulesDisabled" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking.property.perNodePoolSgRulesDisabled"></a>

```typescript
public readonly perNodePoolSgRulesDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable the per node pool subnet security group rules on the control plane security group.

When set to true, you must also provide one or more security groups that ensure node pools are able to send requests to the control plane on TCP/443 and TCP/8132. Failure to do so may result in unavailable node pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#per_node_pool_sg_rules_disabled GoogleContainerAwsCluster#per_node_pool_sg_rules_disabled}

---

### GoogleContainerAwsClusterTimeouts <a name="GoogleContainerAwsClusterTimeouts" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterTimeouts: googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#create GoogleContainerAwsCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#delete GoogleContainerAwsCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#update GoogleContainerAwsCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#create GoogleContainerAwsCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#delete GoogleContainerAwsCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_container_aws_cluster#update GoogleContainerAwsCluster#update}.

---

### GoogleContainerAwsClusterWorkloadIdentityConfig <a name="GoogleContainerAwsClusterWorkloadIdentityConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfig.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

const googleContainerAwsClusterWorkloadIdentityConfig: googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAwsClusterAuthorizationAdminGroupsList <a name="GoogleContainerAwsClusterAuthorizationAdminGroupsList" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.get"></a>

```typescript
public get(index: number): GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContainerAwsClusterAuthorizationAdminGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>[]

---


### GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference <a name="GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContainerAwsClusterAuthorizationAdminGroups;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>

---


### GoogleContainerAwsClusterAuthorizationAdminUsersList <a name="GoogleContainerAwsClusterAuthorizationAdminUsersList" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.get"></a>

```typescript
public get(index: number): GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContainerAwsClusterAuthorizationAdminUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>[]

---


### GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference <a name="GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContainerAwsClusterAuthorizationAdminUsers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>

---


### GoogleContainerAwsClusterAuthorizationOutputReference <a name="GoogleContainerAwsClusterAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.putAdminGroups">putAdminGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.putAdminUsers">putAdminUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.resetAdminGroups">resetAdminGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminGroups` <a name="putAdminGroups" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.putAdminGroups"></a>

```typescript
public putAdminGroups(value: IResolvable | GoogleContainerAwsClusterAuthorizationAdminGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.putAdminGroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>[]

---

##### `putAdminUsers` <a name="putAdminUsers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.putAdminUsers"></a>

```typescript
public putAdminUsers(value: IResolvable | GoogleContainerAwsClusterAuthorizationAdminUsers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.putAdminUsers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>[]

---

##### `resetAdminGroups` <a name="resetAdminGroups" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.resetAdminGroups"></a>

```typescript
public resetAdminGroups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.adminGroups">adminGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList">GoogleContainerAwsClusterAuthorizationAdminGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.adminUsers">adminUsers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList">GoogleContainerAwsClusterAuthorizationAdminUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.adminGroupsInput">adminGroupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.adminUsersInput">adminUsersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization">GoogleContainerAwsClusterAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminGroups`<sup>Required</sup> <a name="adminGroups" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.adminGroups"></a>

```typescript
public readonly adminGroups: GoogleContainerAwsClusterAuthorizationAdminGroupsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroupsList">GoogleContainerAwsClusterAuthorizationAdminGroupsList</a>

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.adminUsers"></a>

```typescript
public readonly adminUsers: GoogleContainerAwsClusterAuthorizationAdminUsersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsersList">GoogleContainerAwsClusterAuthorizationAdminUsersList</a>

---

##### `adminGroupsInput`<sup>Optional</sup> <a name="adminGroupsInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.adminGroupsInput"></a>

```typescript
public readonly adminGroupsInput: IResolvable | GoogleContainerAwsClusterAuthorizationAdminGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminGroups">GoogleContainerAwsClusterAuthorizationAdminGroups</a>[]

---

##### `adminUsersInput`<sup>Optional</sup> <a name="adminUsersInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```typescript
public readonly adminUsersInput: IResolvable | GoogleContainerAwsClusterAuthorizationAdminUsers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationAdminUsers">GoogleContainerAwsClusterAuthorizationAdminUsers</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsClusterAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterAuthorization">GoogleContainerAwsClusterAuthorization</a>

---


### GoogleContainerAwsClusterBinaryAuthorizationOutputReference <a name="GoogleContainerAwsClusterBinaryAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.resetEvaluationMode">resetEvaluationMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluationMode` <a name="resetEvaluationMode" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.resetEvaluationMode"></a>

```typescript
public resetEvaluationMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.evaluationModeInput">evaluationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.evaluationMode">evaluationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization">GoogleContainerAwsClusterBinaryAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluationModeInput`<sup>Optional</sup> <a name="evaluationModeInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.evaluationModeInput"></a>

```typescript
public readonly evaluationModeInput: string;
```

- *Type:* string

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.evaluationMode"></a>

```typescript
public readonly evaluationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsClusterBinaryAuthorization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterBinaryAuthorization">GoogleContainerAwsClusterBinaryAuthorization</a>

---


### GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference <a name="GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resetRoleSessionName">resetRoleSessionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleSessionName` <a name="resetRoleSessionName" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.resetRoleSessionName"></a>

```typescript
public resetRoleSessionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionNameInput">roleSessionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionName">roleSessionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication">GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleSessionNameInput`<sup>Optional</sup> <a name="roleSessionNameInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionNameInput"></a>

```typescript
public readonly roleSessionNameInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `roleSessionName`<sup>Required</sup> <a name="roleSessionName" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.roleSessionName"></a>

```typescript
public readonly roleSessionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication">GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

---


### GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference <a name="GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption">GoogleContainerAwsClusterControlPlaneConfigEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsClusterControlPlaneConfigEncryption;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption">GoogleContainerAwsClusterControlPlaneConfigEncryption</a>

---


### GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference <a name="GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption">GoogleContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsClusterControlPlaneDatabaseEncryption;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption">GoogleContainerAwsClusterControlPlaneDatabaseEncryption</a>

---


### GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference <a name="GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.resetTenancy">resetTenancy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTenancy` <a name="resetTenancy" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.resetTenancy"></a>

```typescript
public resetTenancy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.tenancyInput">tenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement">GoogleContainerAwsClusterControlPlaneInstancePlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tenancyInput`<sup>Optional</sup> <a name="tenancyInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.tenancyInput"></a>

```typescript
public readonly tenancyInput: string;
```

- *Type:* string

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsClusterControlPlaneInstancePlacement;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement">GoogleContainerAwsClusterControlPlaneInstancePlacement</a>

---


### GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference <a name="GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetSizeGib">resetSizeGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetSizeGib` <a name="resetSizeGib" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetSizeGib"></a>

```typescript
public resetSizeGib(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput">sizeGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGib">sizeGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume">GoogleContainerAwsClusterControlPlaneMainVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `sizeGibInput`<sup>Optional</sup> <a name="sizeGibInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGibInput"></a>

```typescript
public readonly sizeGibInput: number;
```

- *Type:* number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `sizeGib`<sup>Required</sup> <a name="sizeGib" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.sizeGib"></a>

```typescript
public readonly sizeGib: number;
```

- *Type:* number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsClusterControlPlaneMainVolume;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume">GoogleContainerAwsClusterControlPlaneMainVolume</a>

---


### GoogleContainerAwsClusterControlPlaneOutputReference <a name="GoogleContainerAwsClusterControlPlaneOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication">putAwsServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putConfigEncryption">putConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption">putDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putInstancePlacement">putInstancePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putMainVolume">putMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putProxyConfig">putProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putRootVolume">putRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putSshConfig">putSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetInstancePlacement">resetInstancePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetMainVolume">resetMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetProxyConfig">resetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetRootVolume">resetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetSshConfig">resetSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsServicesAuthentication` <a name="putAwsServicesAuthentication" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication"></a>

```typescript
public putAwsServicesAuthentication(value: GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putAwsServicesAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication">GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

---

##### `putConfigEncryption` <a name="putConfigEncryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putConfigEncryption"></a>

```typescript
public putConfigEncryption(value: GoogleContainerAwsClusterControlPlaneConfigEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putConfigEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption">GoogleContainerAwsClusterControlPlaneConfigEncryption</a>

---

##### `putDatabaseEncryption` <a name="putDatabaseEncryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption"></a>

```typescript
public putDatabaseEncryption(value: GoogleContainerAwsClusterControlPlaneDatabaseEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putDatabaseEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption">GoogleContainerAwsClusterControlPlaneDatabaseEncryption</a>

---

##### `putInstancePlacement` <a name="putInstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putInstancePlacement"></a>

```typescript
public putInstancePlacement(value: GoogleContainerAwsClusterControlPlaneInstancePlacement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putInstancePlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement">GoogleContainerAwsClusterControlPlaneInstancePlacement</a>

---

##### `putMainVolume` <a name="putMainVolume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putMainVolume"></a>

```typescript
public putMainVolume(value: GoogleContainerAwsClusterControlPlaneMainVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putMainVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume">GoogleContainerAwsClusterControlPlaneMainVolume</a>

---

##### `putProxyConfig` <a name="putProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putProxyConfig"></a>

```typescript
public putProxyConfig(value: GoogleContainerAwsClusterControlPlaneProxyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig">GoogleContainerAwsClusterControlPlaneProxyConfig</a>

---

##### `putRootVolume` <a name="putRootVolume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putRootVolume"></a>

```typescript
public putRootVolume(value: GoogleContainerAwsClusterControlPlaneRootVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume">GoogleContainerAwsClusterControlPlaneRootVolume</a>

---

##### `putSshConfig` <a name="putSshConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putSshConfig"></a>

```typescript
public putSshConfig(value: GoogleContainerAwsClusterControlPlaneSshConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig">GoogleContainerAwsClusterControlPlaneSshConfig</a>

---

##### `resetInstancePlacement` <a name="resetInstancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetInstancePlacement"></a>

```typescript
public resetInstancePlacement(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetMainVolume` <a name="resetMainVolume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetMainVolume"></a>

```typescript
public resetMainVolume(): void
```

##### `resetProxyConfig` <a name="resetProxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetProxyConfig"></a>

```typescript
public resetProxyConfig(): void
```

##### `resetRootVolume` <a name="resetRootVolume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetRootVolume"></a>

```typescript
public resetRootVolume(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSshConfig` <a name="resetSshConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetSshConfig"></a>

```typescript
public resetSshConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthentication">awsServicesAuthentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference">GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.configEncryption">configEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference">GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.databaseEncryption">databaseEncryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference">GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.instancePlacement">instancePlacement</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference">GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.mainVolume">mainVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference">GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference">GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference">GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference">GoogleContainerAwsClusterControlPlaneSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthenticationInput">awsServicesAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication">GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.configEncryptionInput">configEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption">GoogleContainerAwsClusterControlPlaneConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.databaseEncryptionInput">databaseEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption">GoogleContainerAwsClusterControlPlaneDatabaseEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.instancePlacementInput">instancePlacementInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement">GoogleContainerAwsClusterControlPlaneInstancePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.mainVolumeInput">mainVolumeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume">GoogleContainerAwsClusterControlPlaneMainVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.proxyConfigInput">proxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig">GoogleContainerAwsClusterControlPlaneProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.rootVolumeInput">rootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume">GoogleContainerAwsClusterControlPlaneRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.sshConfigInput">sshConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig">GoogleContainerAwsClusterControlPlaneSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane">GoogleContainerAwsClusterControlPlane</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsServicesAuthentication`<sup>Required</sup> <a name="awsServicesAuthentication" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthentication"></a>

```typescript
public readonly awsServicesAuthentication: GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference">GoogleContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference</a>

---

##### `configEncryption`<sup>Required</sup> <a name="configEncryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.configEncryption"></a>

```typescript
public readonly configEncryption: GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference">GoogleContainerAwsClusterControlPlaneConfigEncryptionOutputReference</a>

---

##### `databaseEncryption`<sup>Required</sup> <a name="databaseEncryption" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.databaseEncryption"></a>

```typescript
public readonly databaseEncryption: GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference">GoogleContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference</a>

---

##### `instancePlacement`<sup>Required</sup> <a name="instancePlacement" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.instancePlacement"></a>

```typescript
public readonly instancePlacement: GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference">GoogleContainerAwsClusterControlPlaneInstancePlacementOutputReference</a>

---

##### `mainVolume`<sup>Required</sup> <a name="mainVolume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.mainVolume"></a>

```typescript
public readonly mainVolume: GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference">GoogleContainerAwsClusterControlPlaneMainVolumeOutputReference</a>

---

##### `proxyConfig`<sup>Required</sup> <a name="proxyConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.proxyConfig"></a>

```typescript
public readonly proxyConfig: GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference">GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference</a>

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.rootVolume"></a>

```typescript
public readonly rootVolume: GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference">GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference</a>

---

##### `sshConfig`<sup>Required</sup> <a name="sshConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.sshConfig"></a>

```typescript
public readonly sshConfig: GoogleContainerAwsClusterControlPlaneSshConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference">GoogleContainerAwsClusterControlPlaneSshConfigOutputReference</a>

---

##### `awsServicesAuthenticationInput`<sup>Optional</sup> <a name="awsServicesAuthenticationInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.awsServicesAuthenticationInput"></a>

```typescript
public readonly awsServicesAuthenticationInput: GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication">GoogleContainerAwsClusterControlPlaneAwsServicesAuthentication</a>

---

##### `configEncryptionInput`<sup>Optional</sup> <a name="configEncryptionInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.configEncryptionInput"></a>

```typescript
public readonly configEncryptionInput: GoogleContainerAwsClusterControlPlaneConfigEncryption;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneConfigEncryption">GoogleContainerAwsClusterControlPlaneConfigEncryption</a>

---

##### `databaseEncryptionInput`<sup>Optional</sup> <a name="databaseEncryptionInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.databaseEncryptionInput"></a>

```typescript
public readonly databaseEncryptionInput: GoogleContainerAwsClusterControlPlaneDatabaseEncryption;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneDatabaseEncryption">GoogleContainerAwsClusterControlPlaneDatabaseEncryption</a>

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfileInput"></a>

```typescript
public readonly iamInstanceProfileInput: string;
```

- *Type:* string

---

##### `instancePlacementInput`<sup>Optional</sup> <a name="instancePlacementInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.instancePlacementInput"></a>

```typescript
public readonly instancePlacementInput: GoogleContainerAwsClusterControlPlaneInstancePlacement;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneInstancePlacement">GoogleContainerAwsClusterControlPlaneInstancePlacement</a>

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `mainVolumeInput`<sup>Optional</sup> <a name="mainVolumeInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.mainVolumeInput"></a>

```typescript
public readonly mainVolumeInput: GoogleContainerAwsClusterControlPlaneMainVolume;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneMainVolume">GoogleContainerAwsClusterControlPlaneMainVolume</a>

---

##### `proxyConfigInput`<sup>Optional</sup> <a name="proxyConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.proxyConfigInput"></a>

```typescript
public readonly proxyConfigInput: GoogleContainerAwsClusterControlPlaneProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig">GoogleContainerAwsClusterControlPlaneProxyConfig</a>

---

##### `rootVolumeInput`<sup>Optional</sup> <a name="rootVolumeInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.rootVolumeInput"></a>

```typescript
public readonly rootVolumeInput: GoogleContainerAwsClusterControlPlaneRootVolume;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume">GoogleContainerAwsClusterControlPlaneRootVolume</a>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `sshConfigInput`<sup>Optional</sup> <a name="sshConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.sshConfigInput"></a>

```typescript
public readonly sshConfigInput: GoogleContainerAwsClusterControlPlaneSshConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig">GoogleContainerAwsClusterControlPlaneSshConfig</a>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsClusterControlPlane;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlane">GoogleContainerAwsClusterControlPlane</a>

---


### GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference <a name="GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersion">secretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig">GoogleContainerAwsClusterControlPlaneProxyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersionInput"></a>

```typescript
public readonly secretVersionInput: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsClusterControlPlaneProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneProxyConfig">GoogleContainerAwsClusterControlPlaneProxyConfig</a>

---


### GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference <a name="GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetSizeGib">resetSizeGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetSizeGib` <a name="resetSizeGib" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetSizeGib"></a>

```typescript
public resetSizeGib(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput">sizeGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGib">sizeGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume">GoogleContainerAwsClusterControlPlaneRootVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `sizeGibInput`<sup>Optional</sup> <a name="sizeGibInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGibInput"></a>

```typescript
public readonly sizeGibInput: number;
```

- *Type:* number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `sizeGib`<sup>Required</sup> <a name="sizeGib" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.sizeGib"></a>

```typescript
public readonly sizeGib: number;
```

- *Type:* number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsClusterControlPlaneRootVolume;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneRootVolume">GoogleContainerAwsClusterControlPlaneRootVolume</a>

---


### GoogleContainerAwsClusterControlPlaneSshConfigOutputReference <a name="GoogleContainerAwsClusterControlPlaneSshConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPairInput">ec2KeyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPair">ec2KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig">GoogleContainerAwsClusterControlPlaneSshConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ec2KeyPairInput`<sup>Optional</sup> <a name="ec2KeyPairInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPairInput"></a>

```typescript
public readonly ec2KeyPairInput: string;
```

- *Type:* string

---

##### `ec2KeyPair`<sup>Required</sup> <a name="ec2KeyPair" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.ec2KeyPair"></a>

```typescript
public readonly ec2KeyPair: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsClusterControlPlaneSshConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterControlPlaneSshConfig">GoogleContainerAwsClusterControlPlaneSshConfig</a>

---


### GoogleContainerAwsClusterFleetOutputReference <a name="GoogleContainerAwsClusterFleetOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.resetProject">resetProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.resetProject"></a>

```typescript
public resetProject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.membership">membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet">GoogleContainerAwsClusterFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsClusterFleet;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterFleet">GoogleContainerAwsClusterFleet</a>

---


### GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference <a name="GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents">resetEnableComponents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableComponents` <a name="resetEnableComponents" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents"></a>

```typescript
public resetEnableComponents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput">enableComponentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.enableComponents">enableComponents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig">GoogleContainerAwsClusterLoggingConfigComponentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableComponentsInput`<sup>Optional</sup> <a name="enableComponentsInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput"></a>

```typescript
public readonly enableComponentsInput: string[];
```

- *Type:* string[]

---

##### `enableComponents`<sup>Required</sup> <a name="enableComponents" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.enableComponents"></a>

```typescript
public readonly enableComponents: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsClusterLoggingConfigComponentConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig">GoogleContainerAwsClusterLoggingConfigComponentConfig</a>

---


### GoogleContainerAwsClusterLoggingConfigOutputReference <a name="GoogleContainerAwsClusterLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.putComponentConfig">putComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.resetComponentConfig">resetComponentConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComponentConfig` <a name="putComponentConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.putComponentConfig"></a>

```typescript
public putComponentConfig(value: GoogleContainerAwsClusterLoggingConfigComponentConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.putComponentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig">GoogleContainerAwsClusterLoggingConfigComponentConfig</a>

---

##### `resetComponentConfig` <a name="resetComponentConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.resetComponentConfig"></a>

```typescript
public resetComponentConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.componentConfig">componentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference">GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.componentConfigInput">componentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig">GoogleContainerAwsClusterLoggingConfigComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig">GoogleContainerAwsClusterLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `componentConfig`<sup>Required</sup> <a name="componentConfig" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.componentConfig"></a>

```typescript
public readonly componentConfig: GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference">GoogleContainerAwsClusterLoggingConfigComponentConfigOutputReference</a>

---

##### `componentConfigInput`<sup>Optional</sup> <a name="componentConfigInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.componentConfigInput"></a>

```typescript
public readonly componentConfigInput: GoogleContainerAwsClusterLoggingConfigComponentConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigComponentConfig">GoogleContainerAwsClusterLoggingConfigComponentConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsClusterLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterLoggingConfig">GoogleContainerAwsClusterLoggingConfig</a>

---


### GoogleContainerAwsClusterNetworkingOutputReference <a name="GoogleContainerAwsClusterNetworkingOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.resetPerNodePoolSgRulesDisabled">resetPerNodePoolSgRulesDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPerNodePoolSgRulesDisabled` <a name="resetPerNodePoolSgRulesDisabled" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.resetPerNodePoolSgRulesDisabled"></a>

```typescript
public resetPerNodePoolSgRulesDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabledInput">perNodePoolSgRulesDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocksInput">podAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput">serviceAddressCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabled">perNodePoolSgRulesDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocks">podAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocks">serviceAddressCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking">GoogleContainerAwsClusterNetworking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `perNodePoolSgRulesDisabledInput`<sup>Optional</sup> <a name="perNodePoolSgRulesDisabledInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabledInput"></a>

```typescript
public readonly perNodePoolSgRulesDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `podAddressCidrBlocksInput`<sup>Optional</sup> <a name="podAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocksInput"></a>

```typescript
public readonly podAddressCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `serviceAddressCidrBlocksInput`<sup>Optional</sup> <a name="serviceAddressCidrBlocksInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocksInput"></a>

```typescript
public readonly serviceAddressCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `perNodePoolSgRulesDisabled`<sup>Required</sup> <a name="perNodePoolSgRulesDisabled" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.perNodePoolSgRulesDisabled"></a>

```typescript
public readonly perNodePoolSgRulesDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `podAddressCidrBlocks`<sup>Required</sup> <a name="podAddressCidrBlocks" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.podAddressCidrBlocks"></a>

```typescript
public readonly podAddressCidrBlocks: string[];
```

- *Type:* string[]

---

##### `serviceAddressCidrBlocks`<sup>Required</sup> <a name="serviceAddressCidrBlocks" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.serviceAddressCidrBlocks"></a>

```typescript
public readonly serviceAddressCidrBlocks: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworkingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsClusterNetworking;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterNetworking">GoogleContainerAwsClusterNetworking</a>

---


### GoogleContainerAwsClusterTimeoutsOutputReference <a name="GoogleContainerAwsClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts">GoogleContainerAwsClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContainerAwsClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterTimeouts">GoogleContainerAwsClusterTimeouts</a>

---


### GoogleContainerAwsClusterWorkloadIdentityConfigList <a name="GoogleContainerAwsClusterWorkloadIdentityConfigList" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.get"></a>

```typescript
public get(index: number): GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference <a name="GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```typescript
import { googleContainerAwsCluster } from '@cdktf/provider-google-beta'

new googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.identityProvider">identityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.issuerUri">issuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.workloadPool">workloadPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfig">GoogleContainerAwsClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityProvider`<sup>Required</sup> <a name="identityProvider" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```typescript
public readonly identityProvider: string;
```

- *Type:* string

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

---

##### `workloadPool`<sup>Required</sup> <a name="workloadPool" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```typescript
public readonly workloadPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAwsClusterWorkloadIdentityConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAwsCluster.GoogleContainerAwsClusterWorkloadIdentityConfig">GoogleContainerAwsClusterWorkloadIdentityConfig</a>

---



