# `googleNetworkServicesEdgeCacheService` Submodule <a name="`googleNetworkServicesEdgeCacheService` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesEdgeCacheService <a name="GoogleNetworkServicesEdgeCacheService" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service google_network_services_edge_cache_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService(scope: Construct, id: string, config: GoogleNetworkServicesEdgeCacheServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig">GoogleNetworkServicesEdgeCacheServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig">GoogleNetworkServicesEdgeCacheServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.putRouting">putRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetDisableHttp2">resetDisableHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetDisableQuic">resetDisableQuic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetEdgeSecurityPolicy">resetEdgeSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetEdgeSslCertificates">resetEdgeSslCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetRequireTls">resetRequireTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetSslPolicy">resetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.putLogConfig"></a>

```typescript
public putLogConfig(value: GoogleNetworkServicesEdgeCacheServiceLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfig">GoogleNetworkServicesEdgeCacheServiceLogConfig</a>

---

##### `putRouting` <a name="putRouting" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.putRouting"></a>

```typescript
public putRouting(value: GoogleNetworkServicesEdgeCacheServiceRouting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRouting">GoogleNetworkServicesEdgeCacheServiceRouting</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkServicesEdgeCacheServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeouts">GoogleNetworkServicesEdgeCacheServiceTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableHttp2` <a name="resetDisableHttp2" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetDisableHttp2"></a>

```typescript
public resetDisableHttp2(): void
```

##### `resetDisableQuic` <a name="resetDisableQuic" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetDisableQuic"></a>

```typescript
public resetDisableQuic(): void
```

##### `resetEdgeSecurityPolicy` <a name="resetEdgeSecurityPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetEdgeSecurityPolicy"></a>

```typescript
public resetEdgeSecurityPolicy(): void
```

##### `resetEdgeSslCertificates` <a name="resetEdgeSslCertificates" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetEdgeSslCertificates"></a>

```typescript
public resetEdgeSslCertificates(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetLogConfig"></a>

```typescript
public resetLogConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRequireTls` <a name="resetRequireTls" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetRequireTls"></a>

```typescript
public resetRequireTls(): void
```

##### `resetSslPolicy` <a name="resetSslPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetSslPolicy"></a>

```typescript
public resetSslPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesEdgeCacheService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.isConstruct"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.isTerraformElement"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.isTerraformResource"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.generateConfigForImport"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetworkServicesEdgeCacheService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesEdgeCacheService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesEdgeCacheService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesEdgeCacheService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.ipv4Addresses">ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.ipv6Addresses">ipv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference">GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference">GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.disableHttp2Input">disableHttp2Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.disableQuicInput">disableQuicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.edgeSecurityPolicyInput">edgeSecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.edgeSslCertificatesInput">edgeSslCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfig">GoogleNetworkServicesEdgeCacheServiceLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.requireTlsInput">requireTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.routingInput">routingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRouting">GoogleNetworkServicesEdgeCacheServiceRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.sslPolicyInput">sslPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeouts">GoogleNetworkServicesEdgeCacheServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.disableHttp2">disableHttp2</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.disableQuic">disableQuic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.edgeSslCertificates">edgeSslCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.requireTls">requireTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.sslPolicy">sslPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.ipv4Addresses"></a>

```typescript
public readonly ipv4Addresses: string[];
```

- *Type:* string[]

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: string[];
```

- *Type:* string[]

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.logConfig"></a>

```typescript
public readonly logConfig: GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference">GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference</a>

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.routing"></a>

```typescript
public readonly routing: GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference">GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableHttp2Input`<sup>Optional</sup> <a name="disableHttp2Input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.disableHttp2Input"></a>

```typescript
public readonly disableHttp2Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableQuicInput`<sup>Optional</sup> <a name="disableQuicInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.disableQuicInput"></a>

```typescript
public readonly disableQuicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `edgeSecurityPolicyInput`<sup>Optional</sup> <a name="edgeSecurityPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.edgeSecurityPolicyInput"></a>

```typescript
public readonly edgeSecurityPolicyInput: string;
```

- *Type:* string

---

##### `edgeSslCertificatesInput`<sup>Optional</sup> <a name="edgeSslCertificatesInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.edgeSslCertificatesInput"></a>

```typescript
public readonly edgeSslCertificatesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.logConfigInput"></a>

```typescript
public readonly logConfigInput: GoogleNetworkServicesEdgeCacheServiceLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfig">GoogleNetworkServicesEdgeCacheServiceLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `requireTlsInput`<sup>Optional</sup> <a name="requireTlsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.requireTlsInput"></a>

```typescript
public readonly requireTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `routingInput`<sup>Optional</sup> <a name="routingInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.routingInput"></a>

```typescript
public readonly routingInput: GoogleNetworkServicesEdgeCacheServiceRouting;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRouting">GoogleNetworkServicesEdgeCacheServiceRouting</a>

---

##### `sslPolicyInput`<sup>Optional</sup> <a name="sslPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.sslPolicyInput"></a>

```typescript
public readonly sslPolicyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkServicesEdgeCacheServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeouts">GoogleNetworkServicesEdgeCacheServiceTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableHttp2`<sup>Required</sup> <a name="disableHttp2" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.disableHttp2"></a>

```typescript
public readonly disableHttp2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableQuic`<sup>Required</sup> <a name="disableQuic" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.disableQuic"></a>

```typescript
public readonly disableQuic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `edgeSecurityPolicy`<sup>Required</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.edgeSecurityPolicy"></a>

```typescript
public readonly edgeSecurityPolicy: string;
```

- *Type:* string

---

##### `edgeSslCertificates`<sup>Required</sup> <a name="edgeSslCertificates" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.edgeSslCertificates"></a>

```typescript
public readonly edgeSslCertificates: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `requireTls`<sup>Required</sup> <a name="requireTls" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.requireTls"></a>

```typescript
public readonly requireTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslPolicy`<sup>Required</sup> <a name="sslPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesEdgeCacheServiceConfig <a name="GoogleNetworkServicesEdgeCacheServiceConfig" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceConfig: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRouting">GoogleNetworkServicesEdgeCacheServiceRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.disableHttp2">disableHttp2</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disables HTTP/2. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.disableQuic">disableQuic</a></code> | <code>boolean \| cdktf.IResolvable</code> | HTTP/3 (IETF QUIC) and Google QUIC are enabled by default. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>string</code> | Resource URL that points at the Cloud Armor edge security policy that is applied on each request against the EdgeCacheService. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.edgeSslCertificates">edgeSslCertificates</a></code> | <code>string[]</code> | URLs to sslCertificate resources that are used to authenticate connections between users and the EdgeCacheService. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#id GoogleNetworkServicesEdgeCacheService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the EdgeCache resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfig">GoogleNetworkServicesEdgeCacheServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#project GoogleNetworkServicesEdgeCacheService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.requireTls">requireTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Require TLS (HTTPS) for all clients connecting to this service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.sslPolicy">sslPolicy</a></code> | <code>string</code> | URL of the SslPolicy resource that will be associated with the EdgeCacheService. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeouts">GoogleNetworkServicesEdgeCacheServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#name GoogleNetworkServicesEdgeCacheService#name}

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.routing"></a>

```typescript
public readonly routing: GoogleNetworkServicesEdgeCacheServiceRouting;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRouting">GoogleNetworkServicesEdgeCacheServiceRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#routing GoogleNetworkServicesEdgeCacheService#routing}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#description GoogleNetworkServicesEdgeCacheService#description}

---

##### `disableHttp2`<sup>Optional</sup> <a name="disableHttp2" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.disableHttp2"></a>

```typescript
public readonly disableHttp2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disables HTTP/2.

HTTP/2 (h2) is enabled by default and recommended for performance. HTTP/2 improves connection re-use and reduces connection setup overhead by sending multiple streams over the same connection.

Some legacy HTTP clients may have issues with HTTP/2 connections due to broken HTTP/2 implementations. Setting this to true will prevent HTTP/2 from being advertised and negotiated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#disable_http2 GoogleNetworkServicesEdgeCacheService#disable_http2}

---

##### `disableQuic`<sup>Optional</sup> <a name="disableQuic" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.disableQuic"></a>

```typescript
public readonly disableQuic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

HTTP/3 (IETF QUIC) and Google QUIC are enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#disable_quic GoogleNetworkServicesEdgeCacheService#disable_quic}

---

##### `edgeSecurityPolicy`<sup>Optional</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.edgeSecurityPolicy"></a>

```typescript
public readonly edgeSecurityPolicy: string;
```

- *Type:* string

Resource URL that points at the Cloud Armor edge security policy that is applied on each request against the EdgeCacheService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#edge_security_policy GoogleNetworkServicesEdgeCacheService#edge_security_policy}

---

##### `edgeSslCertificates`<sup>Optional</sup> <a name="edgeSslCertificates" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.edgeSslCertificates"></a>

```typescript
public readonly edgeSslCertificates: string[];
```

- *Type:* string[]

URLs to sslCertificate resources that are used to authenticate connections between users and the EdgeCacheService.

Note that only "global" certificates with a "scope" of "EDGE_CACHE" can be attached to an EdgeCacheService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#edge_ssl_certificates GoogleNetworkServicesEdgeCacheService#edge_ssl_certificates}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#id GoogleNetworkServicesEdgeCacheService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the EdgeCache resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#labels GoogleNetworkServicesEdgeCacheService#labels}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.logConfig"></a>

```typescript
public readonly logConfig: GoogleNetworkServicesEdgeCacheServiceLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfig">GoogleNetworkServicesEdgeCacheServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#log_config GoogleNetworkServicesEdgeCacheService#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#project GoogleNetworkServicesEdgeCacheService#project}.

---

##### `requireTls`<sup>Optional</sup> <a name="requireTls" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.requireTls"></a>

```typescript
public readonly requireTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Require TLS (HTTPS) for all clients connecting to this service.

Clients who connect over HTTP (port 80) will receive a HTTP 301 to the same URL over HTTPS (port 443).
You must have at least one (1) edgeSslCertificate specified to enable this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#require_tls GoogleNetworkServicesEdgeCacheService#require_tls}

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: string;
```

- *Type:* string

URL of the SslPolicy resource that will be associated with the EdgeCacheService.

If not set, the EdgeCacheService has no SSL policy configured, and will default to the "COMPATIBLE" policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#ssl_policy GoogleNetworkServicesEdgeCacheService#ssl_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesEdgeCacheServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeouts">GoogleNetworkServicesEdgeCacheServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#timeouts GoogleNetworkServicesEdgeCacheService#timeouts}

---

### GoogleNetworkServicesEdgeCacheServiceLogConfig <a name="GoogleNetworkServicesEdgeCacheServiceLogConfig" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfig.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceLogConfig: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfig.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to enable logging for traffic served by this service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfig.property.sampleRate">sampleRate</a></code> | <code>number</code> | Configures the sampling rate of requests, where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported. The default value is 1.0, and the value of the field must be in [0, 1]. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfig.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to enable logging for traffic served by this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#enable GoogleNetworkServicesEdgeCacheService#enable}

---

##### `sampleRate`<sup>Optional</sup> <a name="sampleRate" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfig.property.sampleRate"></a>

```typescript
public readonly sampleRate: number;
```

- *Type:* number

Configures the sampling rate of requests, where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported. The default value is 1.0, and the value of the field must be in [0, 1].

This field can only be specified if logging is enabled for this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#sample_rate GoogleNetworkServicesEdgeCacheService#sample_rate}

---

### GoogleNetworkServicesEdgeCacheServiceRouting <a name="GoogleNetworkServicesEdgeCacheServiceRouting" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRouting.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRouting: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRouting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRouting.property.hostRule">hostRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule">GoogleNetworkServicesEdgeCacheServiceRoutingHostRule</a>[]</code> | host_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRouting.property.pathMatcher">pathMatcher</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher</a>[]</code> | path_matcher block. |

---

##### `hostRule`<sup>Required</sup> <a name="hostRule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRouting.property.hostRule"></a>

```typescript
public readonly hostRule: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingHostRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule">GoogleNetworkServicesEdgeCacheServiceRoutingHostRule</a>[]

host_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#host_rule GoogleNetworkServicesEdgeCacheService#host_rule}

---

##### `pathMatcher`<sup>Required</sup> <a name="pathMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRouting.property.pathMatcher"></a>

```typescript
public readonly pathMatcher: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher</a>[]

path_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#path_matcher GoogleNetworkServicesEdgeCacheService#path_matcher}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingHostRule <a name="GoogleNetworkServicesEdgeCacheServiceRoutingHostRule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingHostRule: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule.property.hosts">hosts</a></code> | <code>string[]</code> | The list of host patterns to match. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule.property.pathMatcher">pathMatcher</a></code> | <code>string</code> | The name of the pathMatcher associated with this hostRule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule.property.description">description</a></code> | <code>string</code> | A human-readable description of the hostRule. |

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

The list of host patterns to match.

Host patterns must be valid hostnames. Ports are not allowed. Wildcard hosts are supported in the suffix or prefix form. * matches any string of ([a-z0-9-.]*). It does not match the empty string.

When multiple hosts are specified, hosts are matched in the following priority:

  1. Exact domain names: ''www.foo.com''.
  2. Suffix domain wildcards: ''*.foo.com'' or ''*-bar.foo.com''.
  3. Prefix domain wildcards: ''foo.*'' or ''foo-*''.
  4. Special wildcard ''*'' matching any domain.

  Notes:

    The wildcard will not match the empty string. e.g. ''*-bar.foo.com'' will match ''baz-bar.foo.com'' but not ''-bar.foo.com''. The longest wildcards match first. Only a single host in the entire service can match on ''*''. A domain must be unique across all configured hosts within a service.

    Hosts are matched against the HTTP Host header, or for HTTP/2 and HTTP/3, the ":authority" header, from the incoming request.

    You may specify up to 10 hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#hosts GoogleNetworkServicesEdgeCacheService#hosts}

---

##### `pathMatcher`<sup>Required</sup> <a name="pathMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule.property.pathMatcher"></a>

```typescript
public readonly pathMatcher: string;
```

- *Type:* string

The name of the pathMatcher associated with this hostRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#path_matcher GoogleNetworkServicesEdgeCacheService#path_matcher}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the hostRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#description GoogleNetworkServicesEdgeCacheService#description}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcher: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher.property.name">name</a></code> | <code>string</code> | The name to which this PathMatcher is referred by the HostRule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher.property.routeRule">routeRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a>[]</code> | route_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher.property.description">description</a></code> | <code>string</code> | A human-readable description of the resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name to which this PathMatcher is referred by the HostRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#name GoogleNetworkServicesEdgeCacheService#name}

---

##### `routeRule`<sup>Required</sup> <a name="routeRule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher.property.routeRule"></a>

```typescript
public readonly routeRule: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a>[]

route_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#route_rule GoogleNetworkServicesEdgeCacheService#route_rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#description GoogleNetworkServicesEdgeCacheService#description}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.matchRule">matchRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a>[]</code> | match_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.priority">priority</a></code> | <code>string</code> | The priority of this route rule, where 1 is the highest priority. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.description">description</a></code> | <code>string</code> | A human-readable description of the routeRule. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.headerAction">headerAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a></code> | header_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.origin">origin</a></code> | <code>string</code> | The Origin resource that requests to this route should fetch from when a matching response is not in cache. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.routeAction">routeAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a></code> | route_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.routeMethods">routeMethods</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods</a></code> | route_methods block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.urlRedirect">urlRedirect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a></code> | url_redirect block. |

---

##### `matchRule`<sup>Required</sup> <a name="matchRule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.matchRule"></a>

```typescript
public readonly matchRule: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a>[]

match_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#match_rule GoogleNetworkServicesEdgeCacheService#match_rule}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

The priority of this route rule, where 1 is the highest priority.

You cannot configure two or more routeRules with the same priority. Priority for each rule must be set to a number between 1 and 999 inclusive.

Priority numbers can have gaps, which enable you to add or remove rules in the future without affecting the rest of the rules. For example, 1, 2, 3, 4, 5, 9, 12, 16 is a valid series of priority numbers
to which you could add rules numbered from 6 to 8, 10 to 11, and 13 to 15 in the future without any impact on existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#priority GoogleNetworkServicesEdgeCacheService#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the routeRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#description GoogleNetworkServicesEdgeCacheService#description}

---

##### `headerAction`<sup>Optional</sup> <a name="headerAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.headerAction"></a>

```typescript
public readonly headerAction: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#header_action GoogleNetworkServicesEdgeCacheService#header_action}

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

The Origin resource that requests to this route should fetch from when a matching response is not in cache.

Origins can be defined as short names ("my-origin") or fully-qualified resource URLs - e.g. "networkservices.googleapis.com/projects/my-project/global/edgecacheorigins/my-origin"

Only one of origin or urlRedirect can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#origin GoogleNetworkServicesEdgeCacheService#origin}

---

##### `routeAction`<sup>Optional</sup> <a name="routeAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.routeAction"></a>

```typescript
public readonly routeAction: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a>

route_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#route_action GoogleNetworkServicesEdgeCacheService#route_action}

---

##### `routeMethods`<sup>Optional</sup> <a name="routeMethods" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.routeMethods"></a>

```typescript
public readonly routeMethods: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods</a>

route_methods block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#route_methods GoogleNetworkServicesEdgeCacheService#route_methods}

---

##### `urlRedirect`<sup>Optional</sup> <a name="urlRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.urlRedirect"></a>

```typescript
public readonly urlRedirect: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a>

url_redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#url_redirect GoogleNetworkServicesEdgeCacheService#url_redirect}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.requestHeaderToAdd">requestHeaderToAdd</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a>[]</code> | request_header_to_add block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.requestHeaderToRemove">requestHeaderToRemove</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a>[]</code> | request_header_to_remove block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.responseHeaderToAdd">responseHeaderToAdd</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a>[]</code> | response_header_to_add block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.responseHeaderToRemove">responseHeaderToRemove</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a>[]</code> | response_header_to_remove block. |

---

##### `requestHeaderToAdd`<sup>Optional</sup> <a name="requestHeaderToAdd" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.requestHeaderToAdd"></a>

```typescript
public readonly requestHeaderToAdd: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a>[]

request_header_to_add block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#request_header_to_add GoogleNetworkServicesEdgeCacheService#request_header_to_add}

---

##### `requestHeaderToRemove`<sup>Optional</sup> <a name="requestHeaderToRemove" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.requestHeaderToRemove"></a>

```typescript
public readonly requestHeaderToRemove: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a>[]

request_header_to_remove block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#request_header_to_remove GoogleNetworkServicesEdgeCacheService#request_header_to_remove}

---

##### `responseHeaderToAdd`<sup>Optional</sup> <a name="responseHeaderToAdd" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.responseHeaderToAdd"></a>

```typescript
public readonly responseHeaderToAdd: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a>[]

response_header_to_add block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#response_header_to_add GoogleNetworkServicesEdgeCacheService#response_header_to_add}

---

##### `responseHeaderToRemove`<sup>Optional</sup> <a name="responseHeaderToRemove" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.responseHeaderToRemove"></a>

```typescript
public readonly responseHeaderToRemove: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a>[]

response_header_to_remove block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#response_header_to_remove GoogleNetworkServicesEdgeCacheService#response_header_to_remove}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.headerName">headerName</a></code> | <code>string</code> | The name of the header to add. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.headerValue">headerValue</a></code> | <code>string</code> | The value of the header to add. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.replace">replace</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to replace all existing headers with the same name. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

The name of the header to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#header_name GoogleNetworkServicesEdgeCacheService#header_name}

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

The value of the header to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#header_value GoogleNetworkServicesEdgeCacheService#header_value}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.replace"></a>

```typescript
public readonly replace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to replace all existing headers with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#replace GoogleNetworkServicesEdgeCacheService#replace}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove.property.headerName">headerName</a></code> | <code>string</code> | The name of the header to remove. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

The name of the header to remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#header_name GoogleNetworkServicesEdgeCacheService#header_name}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.headerName">headerName</a></code> | <code>string</code> | The name of the header to add. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.headerValue">headerValue</a></code> | <code>string</code> | The value of the header to add. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.replace">replace</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to replace all existing headers with the same name. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

The name of the header to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#header_name GoogleNetworkServicesEdgeCacheService#header_name}

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

The value of the header to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#header_value GoogleNetworkServicesEdgeCacheService#header_value}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.replace"></a>

```typescript
public readonly replace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to replace all existing headers with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#replace GoogleNetworkServicesEdgeCacheService#replace}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove.property.headerName">headerName</a></code> | <code>string</code> | Headers to remove from the response prior to sending it back to the client. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

Headers to remove from the response prior to sending it back to the client.

Response headers are only sent to the client, and do not have an effect on the cache serving the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#header_name GoogleNetworkServicesEdgeCacheService#header_name}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.fullPathMatch">fullPathMatch</a></code> | <code>string</code> | For satisfying the matchRule condition, the path of the request must exactly match the value specified in fullPathMatch after removing any query parameters and anchor that may be part of the original URL. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.headerMatch">headerMatch</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a>[]</code> | header_match block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies that prefixMatch and fullPathMatch matches are case sensitive. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.pathTemplateMatch">pathTemplateMatch</a></code> | <code>string</code> | For satisfying the matchRule condition, the path of the request must match the wildcard pattern specified in pathTemplateMatch after removing any query parameters and anchor that may be part of the original URL. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.prefixMatch">prefixMatch</a></code> | <code>string</code> | For satisfying the matchRule condition, the request's path must begin with the specified prefixMatch. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.queryParameterMatch">queryParameterMatch</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a>[]</code> | query_parameter_match block. |

---

##### `fullPathMatch`<sup>Optional</sup> <a name="fullPathMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.fullPathMatch"></a>

```typescript
public readonly fullPathMatch: string;
```

- *Type:* string

For satisfying the matchRule condition, the path of the request must exactly match the value specified in fullPathMatch after removing any query parameters and anchor that may be part of the original URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#full_path_match GoogleNetworkServicesEdgeCacheService#full_path_match}

---

##### `headerMatch`<sup>Optional</sup> <a name="headerMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.headerMatch"></a>

```typescript
public readonly headerMatch: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a>[]

header_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#header_match GoogleNetworkServicesEdgeCacheService#header_match}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies that prefixMatch and fullPathMatch matches are case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#ignore_case GoogleNetworkServicesEdgeCacheService#ignore_case}

---

##### `pathTemplateMatch`<sup>Optional</sup> <a name="pathTemplateMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.pathTemplateMatch"></a>

```typescript
public readonly pathTemplateMatch: string;
```

- *Type:* string

For satisfying the matchRule condition, the path of the request must match the wildcard pattern specified in pathTemplateMatch after removing any query parameters and anchor that may be part of the original URL.

pathTemplateMatch must be between 1 and 255 characters
(inclusive).  The pattern specified by pathTemplateMatch may
have at most 5 wildcard operators and at most 5 variable
captures in total.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#path_template_match GoogleNetworkServicesEdgeCacheService#path_template_match}

---

##### `prefixMatch`<sup>Optional</sup> <a name="prefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.prefixMatch"></a>

```typescript
public readonly prefixMatch: string;
```

- *Type:* string

For satisfying the matchRule condition, the request's path must begin with the specified prefixMatch.

prefixMatch must begin with a /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#prefix_match GoogleNetworkServicesEdgeCacheService#prefix_match}

---

##### `queryParameterMatch`<sup>Optional</sup> <a name="queryParameterMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.queryParameterMatch"></a>

```typescript
public readonly queryParameterMatch: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a>[]

query_parameter_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#query_parameter_match GoogleNetworkServicesEdgeCacheService#query_parameter_match}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.headerName">headerName</a></code> | <code>string</code> | The header name to match on. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.exactMatch">exactMatch</a></code> | <code>string</code> | The value of the header should exactly match contents of exactMatch. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.invertMatch">invertMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to false (default), the headerMatch is considered a match if the match criteria above are met. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.prefixMatch">prefixMatch</a></code> | <code>string</code> | The value of the header must start with the contents of prefixMatch. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.presentMatch">presentMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | A header with the contents of headerName must exist. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.suffixMatch">suffixMatch</a></code> | <code>string</code> | The value of the header must end with the contents of suffixMatch. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

The header name to match on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#header_name GoogleNetworkServicesEdgeCacheService#header_name}

---

##### `exactMatch`<sup>Optional</sup> <a name="exactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.exactMatch"></a>

```typescript
public readonly exactMatch: string;
```

- *Type:* string

The value of the header should exactly match contents of exactMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#exact_match GoogleNetworkServicesEdgeCacheService#exact_match}

---

##### `invertMatch`<sup>Optional</sup> <a name="invertMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.invertMatch"></a>

```typescript
public readonly invertMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to false (default), the headerMatch is considered a match if the match criteria above are met.

If set to true, the headerMatch is considered a match if the match criteria above are NOT met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#invert_match GoogleNetworkServicesEdgeCacheService#invert_match}

---

##### `prefixMatch`<sup>Optional</sup> <a name="prefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.prefixMatch"></a>

```typescript
public readonly prefixMatch: string;
```

- *Type:* string

The value of the header must start with the contents of prefixMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#prefix_match GoogleNetworkServicesEdgeCacheService#prefix_match}

---

##### `presentMatch`<sup>Optional</sup> <a name="presentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.presentMatch"></a>

```typescript
public readonly presentMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A header with the contents of headerName must exist.

The match takes place whether or not the request's header has a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#present_match GoogleNetworkServicesEdgeCacheService#present_match}

---

##### `suffixMatch`<sup>Optional</sup> <a name="suffixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.suffixMatch"></a>

```typescript
public readonly suffixMatch: string;
```

- *Type:* string

The value of the header must end with the contents of suffixMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#suffix_match GoogleNetworkServicesEdgeCacheService#suffix_match}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.name">name</a></code> | <code>string</code> | The name of the query parameter to match. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.exactMatch">exactMatch</a></code> | <code>string</code> | The queryParameterMatch matches if the value of the parameter exactly matches the contents of exactMatch. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.presentMatch">presentMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies that the queryParameterMatch matches if the request contains the query parameter, irrespective of whether the parameter has a value or not. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the query parameter to match.

The query parameter must exist in the request, in the absence of which the request match fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#name GoogleNetworkServicesEdgeCacheService#name}

---

##### `exactMatch`<sup>Optional</sup> <a name="exactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.exactMatch"></a>

```typescript
public readonly exactMatch: string;
```

- *Type:* string

The queryParameterMatch matches if the value of the parameter exactly matches the contents of exactMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#exact_match GoogleNetworkServicesEdgeCacheService#exact_match}

---

##### `presentMatch`<sup>Optional</sup> <a name="presentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.presentMatch"></a>

```typescript
public readonly presentMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies that the queryParameterMatch matches if the request contains the query parameter, irrespective of whether the parameter has a value or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#present_match GoogleNetworkServicesEdgeCacheService#present_match}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.compressionMode">compressionMode</a></code> | <code>string</code> | Setting the compression mode to automatic enables dynamic compression for every eligible response. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.corsPolicy">corsPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a></code> | cors_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.urlRewrite">urlRewrite</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a></code> | url_rewrite block. |

---

##### `cdnPolicy`<sup>Optional</sup> <a name="cdnPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.cdnPolicy"></a>

```typescript
public readonly cdnPolicy: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#cdn_policy GoogleNetworkServicesEdgeCacheService#cdn_policy}

---

##### `compressionMode`<sup>Optional</sup> <a name="compressionMode" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.compressionMode"></a>

```typescript
public readonly compressionMode: string;
```

- *Type:* string

Setting the compression mode to automatic enables dynamic compression for every eligible response.

When dynamic compression is enabled, it is recommended to also set a cache policy to maximize efficiency. Possible values: ["DISABLED", "AUTOMATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#compression_mode GoogleNetworkServicesEdgeCacheService#compression_mode}

---

##### `corsPolicy`<sup>Optional</sup> <a name="corsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.corsPolicy"></a>

```typescript
public readonly corsPolicy: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a>

cors_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#cors_policy GoogleNetworkServicesEdgeCacheService#cors_policy}

---

##### `urlRewrite`<sup>Optional</sup> <a name="urlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.urlRewrite"></a>

```typescript
public readonly urlRewrite: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#url_rewrite GoogleNetworkServicesEdgeCacheService#url_rewrite}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.addSignatures">addSignatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a></code> | add_signatures block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.cacheMode">cacheMode</a></code> | <code>string</code> | Cache modes allow users to control the behaviour of the cache, what content it should cache automatically, whether to respect origin headers, or whether to unconditionally cache all responses. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.clientTtl">clientTtl</a></code> | <code>string</code> | Specifies a separate client (e.g. browser client) TTL, separate from the TTL used by the edge caches. Leaving this empty will use the same cache TTL for both the CDN and the client-facing response. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.defaultTtl">defaultTtl</a></code> | <code>string</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.maxTtl">maxTtl</a></code> | <code>string</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.negativeCaching">negativeCaching</a></code> | <code>boolean \| cdktf.IResolvable</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code>{[ key: string ]: string}</code> | Sets a cache TTL for the specified HTTP status code. negativeCaching must be enabled to configure negativeCachingPolicy. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestKeyset">signedRequestKeyset</a></code> | <code>string</code> | The EdgeCacheKeyset containing the set of public keys used to validate signed requests at the edge. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestMaximumExpirationTtl">signedRequestMaximumExpirationTtl</a></code> | <code>string</code> | Limit how far into the future the expiration time of a signed request may be. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestMode">signedRequestMode</a></code> | <code>string</code> | Whether to enforce signed requests. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedTokenOptions">signedTokenOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a></code> | signed_token_options block. |

---

##### `addSignatures`<sup>Optional</sup> <a name="addSignatures" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.addSignatures"></a>

```typescript
public readonly addSignatures: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a>

add_signatures block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#add_signatures GoogleNetworkServicesEdgeCacheService#add_signatures}

---

##### `cacheKeyPolicy`<sup>Optional</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.cacheKeyPolicy"></a>

```typescript
public readonly cacheKeyPolicy: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#cache_key_policy GoogleNetworkServicesEdgeCacheService#cache_key_policy}

---

##### `cacheMode`<sup>Optional</sup> <a name="cacheMode" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.cacheMode"></a>

```typescript
public readonly cacheMode: string;
```

- *Type:* string

Cache modes allow users to control the behaviour of the cache, what content it should cache automatically, whether to respect origin headers, or whether to unconditionally cache all responses.

For all cache modes, Cache-Control headers will be passed to the client. Use clientTtl to override what is sent to the client. Possible values: ["CACHE_ALL_STATIC", "USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "BYPASS_CACHE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#cache_mode GoogleNetworkServicesEdgeCacheService#cache_mode}

---

##### `clientTtl`<sup>Optional</sup> <a name="clientTtl" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.clientTtl"></a>

```typescript
public readonly clientTtl: string;
```

- *Type:* string

Specifies a separate client (e.g. browser client) TTL, separate from the TTL used by the edge caches. Leaving this empty will use the same cache TTL for both the CDN and the client-facing response.

The TTL must be > 0 and <= 86400s (1 day)
- The clientTtl cannot be larger than the defaultTtl (if set)
- Fractions of a second are not allowed.

Omit this field to use the defaultTtl, or the max-age set by the origin, as the client-facing TTL.

When the cache mode is set to "USE_ORIGIN_HEADERS" or "BYPASS_CACHE", you must omit this field.
A duration in seconds terminated by 's'. Example: "3s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#client_ttl GoogleNetworkServicesEdgeCacheService#client_ttl}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: string;
```

- *Type:* string

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Defaults to 3600s (1 hour).

- The TTL must be >= 0 and <= 31,536,000 seconds (1 year)
- Setting a TTL of "0" means "always revalidate" (equivalent to must-revalidate)
- The value of defaultTTL cannot be set to a value greater than that of maxTTL.
- Fractions of a second are not allowed.
- When the cacheMode is set to FORCE_CACHE_ALL, the defaultTTL will overwrite the TTL set in all responses.

Note that infrequently accessed objects may be evicted from the cache before the defined TTL. Objects that expire will be revalidated with the origin.

When the cache mode is set to "USE_ORIGIN_HEADERS" or "BYPASS_CACHE", you must omit this field.

A duration in seconds terminated by 's'. Example: "3s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#default_ttl GoogleNetworkServicesEdgeCacheService#default_ttl}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.maxTtl"></a>

```typescript
public readonly maxTtl: string;
```

- *Type:* string

Specifies the maximum allowed TTL for cached content served by this origin.

Defaults to 86400s (1 day).

Cache directives that attempt to set a max-age or s-maxage higher than this, or an Expires header more than maxTtl seconds in the future will be capped at the value of maxTTL, as if it were the value of an s-maxage Cache-Control directive.

- The TTL must be >= 0 and <= 31,536,000 seconds (1 year)
- Setting a TTL of "0" means "always revalidate"
- The value of maxTtl must be equal to or greater than defaultTtl.
- Fractions of a second are not allowed.

When the cache mode is set to "USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", or "BYPASS_CACHE", you must omit this field.

A duration in seconds terminated by 's'. Example: "3s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#max_ttl GoogleNetworkServicesEdgeCacheService#max_ttl}

---

##### `negativeCaching`<sup>Optional</sup> <a name="negativeCaching" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.negativeCaching"></a>

```typescript
public readonly negativeCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

This can reduce the load on your origin and improve end-user experience by reducing response latency.

By default, the CDNPolicy will apply the following default TTLs to these status codes:

- HTTP 300 (Multiple Choice), 301, 308 (Permanent Redirects): 10m
- HTTP 404 (Not Found), 410 (Gone), 451 (Unavailable For Legal Reasons): 120s
- HTTP 405 (Method Not Found), 414 (URI Too Long), 501 (Not Implemented): 60s

These defaults can be overridden in negativeCachingPolicy

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#negative_caching GoogleNetworkServicesEdgeCacheService#negative_caching}

---

##### `negativeCachingPolicy`<sup>Optional</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.negativeCachingPolicy"></a>

```typescript
public readonly negativeCachingPolicy: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets a cache TTL for the specified HTTP status code. negativeCaching must be enabled to configure negativeCachingPolicy.

Omitting the policy and leaving negativeCaching enabled will use the default TTLs for each status code, defined in negativeCaching.
- TTLs must be >= 0 (where 0 is "always revalidate") and <= 86400s (1 day)

Note that when specifying an explicit negativeCachingPolicy, you should take care to specify a cache TTL for all response codes that you wish to cache. The CDNPolicy will not apply any default negative caching when a policy exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#negative_caching_policy GoogleNetworkServicesEdgeCacheService#negative_caching_policy}

---

##### `signedRequestKeyset`<sup>Optional</sup> <a name="signedRequestKeyset" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestKeyset"></a>

```typescript
public readonly signedRequestKeyset: string;
```

- *Type:* string

The EdgeCacheKeyset containing the set of public keys used to validate signed requests at the edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#signed_request_keyset GoogleNetworkServicesEdgeCacheService#signed_request_keyset}

---

##### `signedRequestMaximumExpirationTtl`<sup>Optional</sup> <a name="signedRequestMaximumExpirationTtl" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestMaximumExpirationTtl"></a>

```typescript
public readonly signedRequestMaximumExpirationTtl: string;
```

- *Type:* string

Limit how far into the future the expiration time of a signed request may be.

When set, a signed request is rejected if its expiration time is later than now + signedRequestMaximumExpirationTtl, where now is the time at which the signed request is first handled by the CDN.

- The TTL must be > 0.
- Fractions of a second are not allowed.

By default, signedRequestMaximumExpirationTtl is not set and the expiration time of a signed request may be arbitrarily far into future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#signed_request_maximum_expiration_ttl GoogleNetworkServicesEdgeCacheService#signed_request_maximum_expiration_ttl}

---

##### `signedRequestMode`<sup>Optional</sup> <a name="signedRequestMode" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestMode"></a>

```typescript
public readonly signedRequestMode: string;
```

- *Type:* string

Whether to enforce signed requests.

The default value is DISABLED, which means all content is public, and does not authorize access.

You must also set a signedRequestKeyset to enable signed requests.

When set to REQUIRE_SIGNATURES, all matching requests will have their signature validated. Requests that were not signed with the corresponding private key, or that are otherwise invalid (expired, do not match the signature, IP address, or header) will be rejected with a HTTP 403 and (if enabled) logged. Possible values: ["DISABLED", "REQUIRE_SIGNATURES", "REQUIRE_TOKENS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#signed_request_mode GoogleNetworkServicesEdgeCacheService#signed_request_mode}

---

##### `signedTokenOptions`<sup>Optional</sup> <a name="signedTokenOptions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedTokenOptions"></a>

```typescript
public readonly signedTokenOptions: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a>

signed_token_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#signed_token_options GoogleNetworkServicesEdgeCacheService#signed_token_options}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.actions">actions</a></code> | <code>string[]</code> | The actions to take to add signatures to responses. Possible values: ["GENERATE_COOKIE", "GENERATE_TOKEN_HLS_COOKIELESS", "PROPAGATE_TOKEN_HLS_COOKIELESS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.copiedParameters">copiedParameters</a></code> | <code>string[]</code> | The parameters to copy from the verified token to the generated token. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.keyset">keyset</a></code> | <code>string</code> | The keyset to use for signature generation. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.tokenQueryParameter">tokenQueryParameter</a></code> | <code>string</code> | The query parameter in which to put the generated token. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.tokenTtl">tokenTtl</a></code> | <code>string</code> | The duration the token is valid starting from the moment the token is first generated. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

The actions to take to add signatures to responses. Possible values: ["GENERATE_COOKIE", "GENERATE_TOKEN_HLS_COOKIELESS", "PROPAGATE_TOKEN_HLS_COOKIELESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#actions GoogleNetworkServicesEdgeCacheService#actions}

---

##### `copiedParameters`<sup>Optional</sup> <a name="copiedParameters" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.copiedParameters"></a>

```typescript
public readonly copiedParameters: string[];
```

- *Type:* string[]

The parameters to copy from the verified token to the generated token.

Only the following parameters may be copied:

  * 'PathGlobs'
  * 'paths'
  * 'acl'
  * 'URLPrefix'
  * 'IPRanges'
  * 'SessionID'
  * 'id'
  * 'Data'
  * 'data'
  * 'payload'
  * 'Headers'

You may specify up to 6 parameters to copy.  A given parameter is be copied only if the parameter exists in the verified token.  Parameter names are matched exactly as specified.  The order of the parameters does not matter.  Duplicates are not allowed.

This field may only be specified when the GENERATE_COOKIE or GENERATE_TOKEN_HLS_COOKIELESS actions are specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#copied_parameters GoogleNetworkServicesEdgeCacheService#copied_parameters}

---

##### `keyset`<sup>Optional</sup> <a name="keyset" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.keyset"></a>

```typescript
public readonly keyset: string;
```

- *Type:* string

The keyset to use for signature generation.

The following are both valid paths to an EdgeCacheKeyset resource:

  * 'projects/project/locations/global/edgeCacheKeysets/yourKeyset'
  * 'yourKeyset'

This must be specified when the GENERATE_COOKIE or GENERATE_TOKEN_HLS_COOKIELESS actions are specified.  This field may not be specified otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#keyset GoogleNetworkServicesEdgeCacheService#keyset}

---

##### `tokenQueryParameter`<sup>Optional</sup> <a name="tokenQueryParameter" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.tokenQueryParameter"></a>

```typescript
public readonly tokenQueryParameter: string;
```

- *Type:* string

The query parameter in which to put the generated token.

If not specified, defaults to 'edge-cache-token'.

If specified, the name must be 1-64 characters long and match the regular expression '[a-zA-Z]([a-zA-Z0-9_-])*' which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.

This field may only be set when the GENERATE_TOKEN_HLS_COOKIELESS or PROPAGATE_TOKEN_HLS_COOKIELESS actions are specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#token_query_parameter GoogleNetworkServicesEdgeCacheService#token_query_parameter}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: string;
```

- *Type:* string

The duration the token is valid starting from the moment the token is first generated.

Defaults to '86400s' (1 day).

The TTL must be >= 0 and <= 604,800 seconds (1 week).

This field may only be specified when the GENERATE_COOKIE or GENERATE_TOKEN_HLS_COOKIELESS actions are specified.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#token_ttl GoogleNetworkServicesEdgeCacheService#token_ttl}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludedQueryParameters">excludedQueryParameters</a></code> | <code>string[]</code> | Names of query string parameters to exclude from cache keys. All other parameters will be included. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludeHost">excludeHost</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, requests to different hosts will be cached separately. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludeQueryString">excludeQueryString</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, exclude query string parameters from the cache key. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedCookieNames">includedCookieNames</a></code> | <code>string[]</code> | Names of Cookies to include in cache keys. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedHeaderNames">includedHeaderNames</a></code> | <code>string[]</code> | Names of HTTP request headers to include in cache keys. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedQueryParameters">includedQueryParameters</a></code> | <code>string[]</code> | Names of query string parameters to include in cache keys. All other parameters will be excluded. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includeProtocol">includeProtocol</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, http and https requests will be cached separately. |

---

##### `excludedQueryParameters`<sup>Optional</sup> <a name="excludedQueryParameters" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludedQueryParameters"></a>

```typescript
public readonly excludedQueryParameters: string[];
```

- *Type:* string[]

Names of query string parameters to exclude from cache keys. All other parameters will be included.

Either specify includedQueryParameters or excludedQueryParameters, not both. '&' and '=' will be percent encoded and not treated as delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#excluded_query_parameters GoogleNetworkServicesEdgeCacheService#excluded_query_parameters}

---

##### `excludeHost`<sup>Optional</sup> <a name="excludeHost" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludeHost"></a>

```typescript
public readonly excludeHost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, requests to different hosts will be cached separately.

Note: this should only be enabled if hosts share the same origin and content. Removing the host from the cache key may inadvertently result in different objects being cached than intended, depending on which route the first user matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#exclude_host GoogleNetworkServicesEdgeCacheService#exclude_host}

---

##### `excludeQueryString`<sup>Optional</sup> <a name="excludeQueryString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludeQueryString"></a>

```typescript
public readonly excludeQueryString: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, exclude query string parameters from the cache key.

If false (the default), include the query string parameters in
the cache key according to includeQueryParameters and
excludeQueryParameters. If neither includeQueryParameters nor
excludeQueryParameters is set, the entire query string will be
included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#exclude_query_string GoogleNetworkServicesEdgeCacheService#exclude_query_string}

---

##### `includedCookieNames`<sup>Optional</sup> <a name="includedCookieNames" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedCookieNames"></a>

```typescript
public readonly includedCookieNames: string[];
```

- *Type:* string[]

Names of Cookies to include in cache keys.

The cookie name and cookie value of each cookie named will be used as part of the cache key.

Cookie names:
  - must be valid RFC 6265 "cookie-name" tokens
  - are case sensitive
  - cannot start with "Edge-Cache-" (case insensitive)

  Note that specifying several cookies, and/or cookies that have a large range of values (e.g., per-user) will dramatically impact the cache hit rate, and may result in a higher eviction rate and reduced performance.

  You may specify up to three cookie names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#included_cookie_names GoogleNetworkServicesEdgeCacheService#included_cookie_names}

---

##### `includedHeaderNames`<sup>Optional</sup> <a name="includedHeaderNames" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedHeaderNames"></a>

```typescript
public readonly includedHeaderNames: string[];
```

- *Type:* string[]

Names of HTTP request headers to include in cache keys.

The value of the header field will be used as part of the cache key.

- Header names must be valid HTTP RFC 7230 header field values.
- Header field names are case insensitive
- To include the HTTP method, use ":method"

Note that specifying several headers, and/or headers that have a large range of values (e.g. per-user) will dramatically impact the cache hit rate, and may result in a higher eviction rate and reduced performance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#included_header_names GoogleNetworkServicesEdgeCacheService#included_header_names}

---

##### `includedQueryParameters`<sup>Optional</sup> <a name="includedQueryParameters" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedQueryParameters"></a>

```typescript
public readonly includedQueryParameters: string[];
```

- *Type:* string[]

Names of query string parameters to include in cache keys. All other parameters will be excluded.

Either specify includedQueryParameters or excludedQueryParameters, not both. '&' and '=' will be percent encoded and not treated as delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#included_query_parameters GoogleNetworkServicesEdgeCacheService#included_query_parameters}

---

##### `includeProtocol`<sup>Optional</sup> <a name="includeProtocol" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includeProtocol"></a>

```typescript
public readonly includeProtocol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, http and https requests will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#include_protocol GoogleNetworkServicesEdgeCacheService#include_protocol}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions.property.allowedSignatureAlgorithms">allowedSignatureAlgorithms</a></code> | <code>string[]</code> | The allowed signature algorithms to use. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions.property.tokenQueryParameter">tokenQueryParameter</a></code> | <code>string</code> | The query parameter in which to find the token. |

---

##### `allowedSignatureAlgorithms`<sup>Optional</sup> <a name="allowedSignatureAlgorithms" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions.property.allowedSignatureAlgorithms"></a>

```typescript
public readonly allowedSignatureAlgorithms: string[];
```

- *Type:* string[]

The allowed signature algorithms to use.

Defaults to using only ED25519.

You may specify up to 3 signature algorithms to use. Possible values: ["ED25519", "HMAC_SHA_256", "HMAC_SHA1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#allowed_signature_algorithms GoogleNetworkServicesEdgeCacheService#allowed_signature_algorithms}

---

##### `tokenQueryParameter`<sup>Optional</sup> <a name="tokenQueryParameter" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions.property.tokenQueryParameter"></a>

```typescript
public readonly tokenQueryParameter: string;
```

- *Type:* string

The query parameter in which to find the token.

The name must be 1-64 characters long and match the regular expression '[a-zA-Z]([a-zA-Z0-9_-])*' which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.

Defaults to 'edge-cache-token'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#token_query_parameter GoogleNetworkServicesEdgeCacheService#token_query_parameter}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.maxAge">maxAge</a></code> | <code>string</code> | Specifies how long results of a preflight request can be cached by a client in seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowCredentials">allowCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | In response to a preflight request, setting this to true indicates that the actual request can include user credentials. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowHeaders">allowHeaders</a></code> | <code>string[]</code> | Specifies the content for the Access-Control-Allow-Headers response header. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowMethods">allowMethods</a></code> | <code>string[]</code> | Specifies the content for the Access-Control-Allow-Methods response header. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowOrigins">allowOrigins</a></code> | <code>string[]</code> | Specifies the list of origins that will be allowed to do CORS requests. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, specifies the CORS policy is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | Specifies the content for the Access-Control-Allow-Headers response header. |

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.maxAge"></a>

```typescript
public readonly maxAge: string;
```

- *Type:* string

Specifies how long results of a preflight request can be cached by a client in seconds.

Note that many browser clients enforce a maximum TTL of 600s (10 minutes).

- Setting the value to -1 forces a pre-flight check for all requests (not recommended)
- A maximum TTL of 86400s can be set, but note that (as above) some clients may force pre-flight checks at a more regular interval.
- This translates to the Access-Control-Max-Age header.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#max_age GoogleNetworkServicesEdgeCacheService#max_age}

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

In response to a preflight request, setting this to true indicates that the actual request can include user credentials.

This translates to the Access-Control-Allow-Credentials response header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#allow_credentials GoogleNetworkServicesEdgeCacheService#allow_credentials}

---

##### `allowHeaders`<sup>Optional</sup> <a name="allowHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowHeaders"></a>

```typescript
public readonly allowHeaders: string[];
```

- *Type:* string[]

Specifies the content for the Access-Control-Allow-Headers response header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#allow_headers GoogleNetworkServicesEdgeCacheService#allow_headers}

---

##### `allowMethods`<sup>Optional</sup> <a name="allowMethods" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowMethods"></a>

```typescript
public readonly allowMethods: string[];
```

- *Type:* string[]

Specifies the content for the Access-Control-Allow-Methods response header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#allow_methods GoogleNetworkServicesEdgeCacheService#allow_methods}

---

##### `allowOrigins`<sup>Optional</sup> <a name="allowOrigins" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowOrigins"></a>

```typescript
public readonly allowOrigins: string[];
```

- *Type:* string[]

Specifies the list of origins that will be allowed to do CORS requests.

This translates to the Access-Control-Allow-Origin response header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#allow_origins GoogleNetworkServicesEdgeCacheService#allow_origins}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, specifies the CORS policy is disabled.

The default value is false, which indicates that the CORS policy is in effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#disabled GoogleNetworkServicesEdgeCacheService#disabled}

---

##### `exposeHeaders`<sup>Optional</sup> <a name="exposeHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

Specifies the content for the Access-Control-Allow-Headers response header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#expose_headers GoogleNetworkServicesEdgeCacheService#expose_headers}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.hostRewrite">hostRewrite</a></code> | <code>string</code> | Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of hostRewrite. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.pathPrefixRewrite">pathPrefixRewrite</a></code> | <code>string</code> | Prior to forwarding the request to the selected origin, the matching portion of the request's path is replaced by pathPrefixRewrite. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.pathTemplateRewrite">pathTemplateRewrite</a></code> | <code>string</code> | Prior to forwarding the request to the selected origin, if the request matched a pathTemplateMatch, the matching portion of the request's path is replaced re-written using the pattern specified by pathTemplateRewrite. |

---

##### `hostRewrite`<sup>Optional</sup> <a name="hostRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.hostRewrite"></a>

```typescript
public readonly hostRewrite: string;
```

- *Type:* string

Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of hostRewrite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#host_rewrite GoogleNetworkServicesEdgeCacheService#host_rewrite}

---

##### `pathPrefixRewrite`<sup>Optional</sup> <a name="pathPrefixRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.pathPrefixRewrite"></a>

```typescript
public readonly pathPrefixRewrite: string;
```

- *Type:* string

Prior to forwarding the request to the selected origin, the matching portion of the request's path is replaced by pathPrefixRewrite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#path_prefix_rewrite GoogleNetworkServicesEdgeCacheService#path_prefix_rewrite}

---

##### `pathTemplateRewrite`<sup>Optional</sup> <a name="pathTemplateRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.pathTemplateRewrite"></a>

```typescript
public readonly pathTemplateRewrite: string;
```

- *Type:* string

Prior to forwarding the request to the selected origin, if the request matched a pathTemplateMatch, the matching portion of the request's path is replaced re-written using the pattern specified by pathTemplateRewrite.

pathTemplateRewrite must be between 1 and 255 characters
(inclusive), must start with a '/', and must only use variables
captured by the route's pathTemplate matchers.

pathTemplateRewrite may only be used when all of a route's
MatchRules specify pathTemplate.

Only one of pathPrefixRewrite and pathTemplateRewrite may be
specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#path_template_rewrite GoogleNetworkServicesEdgeCacheService#path_template_rewrite}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | The non-empty set of HTTP methods that are allowed for this route. |

---

##### `allowedMethods`<sup>Optional</sup> <a name="allowedMethods" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

The non-empty set of HTTP methods that are allowed for this route.

Any combination of "GET", "HEAD", "OPTIONS", "PUT", "POST", "DELETE", and "PATCH".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#allowed_methods GoogleNetworkServicesEdgeCacheService#allowed_methods}

---

### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.hostRedirect">hostRedirect</a></code> | <code>string</code> | The host that will be used in the redirect response instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.httpsRedirect">httpsRedirect</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the URL scheme in the redirected request is set to https. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.pathRedirect">pathRedirect</a></code> | <code>string</code> | The path that will be used in the redirect response instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.prefixRedirect">prefixRedirect</a></code> | <code>string</code> | The prefix that replaces the prefixMatch specified in the routeRule, retaining the remaining portion of the URL before redirecting the request. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.redirectResponseCode">redirectResponseCode</a></code> | <code>string</code> | The HTTP Status code to use for this RedirectAction. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.stripQuery">stripQuery</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. |

---

##### `hostRedirect`<sup>Optional</sup> <a name="hostRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.hostRedirect"></a>

```typescript
public readonly hostRedirect: string;
```

- *Type:* string

The host that will be used in the redirect response instead of the one that was supplied in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#host_redirect GoogleNetworkServicesEdgeCacheService#host_redirect}

---

##### `httpsRedirect`<sup>Optional</sup> <a name="httpsRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.httpsRedirect"></a>

```typescript
public readonly httpsRedirect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the URL scheme in the redirected request is set to https.

If set to false, the URL scheme of the redirected request will remain the same as that of the request.

This can only be set if there is at least one (1) edgeSslCertificate set on the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#https_redirect GoogleNetworkServicesEdgeCacheService#https_redirect}

---

##### `pathRedirect`<sup>Optional</sup> <a name="pathRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.pathRedirect"></a>

```typescript
public readonly pathRedirect: string;
```

- *Type:* string

The path that will be used in the redirect response instead of the one that was supplied in the request.

pathRedirect cannot be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.

The path value must be between 1 and 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#path_redirect GoogleNetworkServicesEdgeCacheService#path_redirect}

---

##### `prefixRedirect`<sup>Optional</sup> <a name="prefixRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.prefixRedirect"></a>

```typescript
public readonly prefixRedirect: string;
```

- *Type:* string

The prefix that replaces the prefixMatch specified in the routeRule, retaining the remaining portion of the URL before redirecting the request.

prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#prefix_redirect GoogleNetworkServicesEdgeCacheService#prefix_redirect}

---

##### `redirectResponseCode`<sup>Optional</sup> <a name="redirectResponseCode" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.redirectResponseCode"></a>

```typescript
public readonly redirectResponseCode: string;
```

- *Type:* string

The HTTP Status code to use for this RedirectAction.

The supported values are:

- 'MOVED_PERMANENTLY_DEFAULT', which is the default value and corresponds to 301.
- 'FOUND', which corresponds to 302.
- 'SEE_OTHER' which corresponds to 303.
- 'TEMPORARY_REDIRECT', which corresponds to 307. in this case, the request method will be retained.
- 'PERMANENT_REDIRECT', which corresponds to 308. in this case, the request method will be retained. Possible values: ["MOVED_PERMANENTLY_DEFAULT", "FOUND", "SEE_OTHER", "TEMPORARY_REDIRECT", "PERMANENT_REDIRECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#redirect_response_code GoogleNetworkServicesEdgeCacheService#redirect_response_code}

---

##### `stripQuery`<sup>Optional</sup> <a name="stripQuery" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.stripQuery"></a>

```typescript
public readonly stripQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request.

If set to false, the query portion of the original URL is retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#strip_query GoogleNetworkServicesEdgeCacheService#strip_query}

---

### GoogleNetworkServicesEdgeCacheServiceTimeouts <a name="GoogleNetworkServicesEdgeCacheServiceTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeouts.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

const googleNetworkServicesEdgeCacheServiceTimeouts: googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#create GoogleNetworkServicesEdgeCacheService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#delete GoogleNetworkServicesEdgeCacheService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#update GoogleNetworkServicesEdgeCacheService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#create GoogleNetworkServicesEdgeCacheService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#delete GoogleNetworkServicesEdgeCacheService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_network_services_edge_cache_service#update GoogleNetworkServicesEdgeCacheService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.resetSampleRate">resetSampleRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetSampleRate` <a name="resetSampleRate" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.resetSampleRate"></a>

```typescript
public resetSampleRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.property.sampleRateInput">sampleRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.property.sampleRate">sampleRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfig">GoogleNetworkServicesEdgeCacheServiceLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sampleRateInput`<sup>Optional</sup> <a name="sampleRateInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.property.sampleRateInput"></a>

```typescript
public readonly sampleRateInput: number;
```

- *Type:* number

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.property.sampleRate"></a>

```typescript
public readonly sampleRate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesEdgeCacheServiceLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceLogConfig">GoogleNetworkServicesEdgeCacheServiceLogConfig</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList <a name="GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule">GoogleNetworkServicesEdgeCacheServiceRoutingHostRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingHostRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule">GoogleNetworkServicesEdgeCacheServiceRoutingHostRule</a>[]

---


### GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.hostsInput">hostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.pathMatcherInput">pathMatcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.pathMatcher">pathMatcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule">GoogleNetworkServicesEdgeCacheServiceRoutingHostRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.hostsInput"></a>

```typescript
public readonly hostsInput: string[];
```

- *Type:* string[]

---

##### `pathMatcherInput`<sup>Optional</sup> <a name="pathMatcherInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.pathMatcherInput"></a>

```typescript
public readonly pathMatcherInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `pathMatcher`<sup>Required</sup> <a name="pathMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.pathMatcher"></a>

```typescript
public readonly pathMatcher: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingHostRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule">GoogleNetworkServicesEdgeCacheServiceRoutingHostRule</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.putHostRule">putHostRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.putPathMatcher">putPathMatcher</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostRule` <a name="putHostRule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.putHostRule"></a>

```typescript
public putHostRule(value: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingHostRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.putHostRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule">GoogleNetworkServicesEdgeCacheServiceRoutingHostRule</a>[]

---

##### `putPathMatcher` <a name="putPathMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.putPathMatcher"></a>

```typescript
public putPathMatcher(value: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.putPathMatcher.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.property.hostRule">hostRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList">GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.property.pathMatcher">pathMatcher</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.property.hostRuleInput">hostRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule">GoogleNetworkServicesEdgeCacheServiceRoutingHostRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.property.pathMatcherInput">pathMatcherInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRouting">GoogleNetworkServicesEdgeCacheServiceRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostRule`<sup>Required</sup> <a name="hostRule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.property.hostRule"></a>

```typescript
public readonly hostRule: GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList">GoogleNetworkServicesEdgeCacheServiceRoutingHostRuleList</a>

---

##### `pathMatcher`<sup>Required</sup> <a name="pathMatcher" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.property.pathMatcher"></a>

```typescript
public readonly pathMatcher: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList</a>

---

##### `hostRuleInput`<sup>Optional</sup> <a name="hostRuleInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.property.hostRuleInput"></a>

```typescript
public readonly hostRuleInput: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingHostRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingHostRule">GoogleNetworkServicesEdgeCacheServiceRoutingHostRule</a>[]

---

##### `pathMatcherInput`<sup>Optional</sup> <a name="pathMatcherInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.property.pathMatcherInput"></a>

```typescript
public readonly pathMatcherInput: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesEdgeCacheServiceRouting;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRouting">GoogleNetworkServicesEdgeCacheServiceRouting</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher</a>[]

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.putRouteRule">putRouteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRouteRule` <a name="putRouteRule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.putRouteRule"></a>

```typescript
public putRouteRule(value: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.putRouteRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.routeRule">routeRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.routeRuleInput">routeRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `routeRule`<sup>Required</sup> <a name="routeRule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.routeRule"></a>

```typescript
public readonly routeRule: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `routeRuleInput`<sup>Optional</sup> <a name="routeRuleInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.routeRuleInput"></a>

```typescript
public readonly routeRuleInput: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcher</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToAdd">putRequestHeaderToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToRemove">putRequestHeaderToRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToAdd">putResponseHeaderToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToRemove">putResponseHeaderToRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetRequestHeaderToAdd">resetRequestHeaderToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetRequestHeaderToRemove">resetRequestHeaderToRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetResponseHeaderToAdd">resetResponseHeaderToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetResponseHeaderToRemove">resetResponseHeaderToRemove</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestHeaderToAdd` <a name="putRequestHeaderToAdd" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToAdd"></a>

```typescript
public putRequestHeaderToAdd(value: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToAdd.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a>[]

---

##### `putRequestHeaderToRemove` <a name="putRequestHeaderToRemove" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToRemove"></a>

```typescript
public putRequestHeaderToRemove(value: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToRemove.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a>[]

---

##### `putResponseHeaderToAdd` <a name="putResponseHeaderToAdd" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToAdd"></a>

```typescript
public putResponseHeaderToAdd(value: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToAdd.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a>[]

---

##### `putResponseHeaderToRemove` <a name="putResponseHeaderToRemove" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToRemove"></a>

```typescript
public putResponseHeaderToRemove(value: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToRemove.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a>[]

---

##### `resetRequestHeaderToAdd` <a name="resetRequestHeaderToAdd" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetRequestHeaderToAdd"></a>

```typescript
public resetRequestHeaderToAdd(): void
```

##### `resetRequestHeaderToRemove` <a name="resetRequestHeaderToRemove" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetRequestHeaderToRemove"></a>

```typescript
public resetRequestHeaderToRemove(): void
```

##### `resetResponseHeaderToAdd` <a name="resetResponseHeaderToAdd" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetResponseHeaderToAdd"></a>

```typescript
public resetResponseHeaderToAdd(): void
```

##### `resetResponseHeaderToRemove` <a name="resetResponseHeaderToRemove" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetResponseHeaderToRemove"></a>

```typescript
public resetResponseHeaderToRemove(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToAdd">requestHeaderToAdd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToRemove">requestHeaderToRemove</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToAdd">responseHeaderToAdd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToRemove">responseHeaderToRemove</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToAddInput">requestHeaderToAddInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToRemoveInput">requestHeaderToRemoveInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToAddInput">responseHeaderToAddInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToRemoveInput">responseHeaderToRemoveInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestHeaderToAdd`<sup>Required</sup> <a name="requestHeaderToAdd" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToAdd"></a>

```typescript
public readonly requestHeaderToAdd: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList</a>

---

##### `requestHeaderToRemove`<sup>Required</sup> <a name="requestHeaderToRemove" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToRemove"></a>

```typescript
public readonly requestHeaderToRemove: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList</a>

---

##### `responseHeaderToAdd`<sup>Required</sup> <a name="responseHeaderToAdd" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToAdd"></a>

```typescript
public readonly responseHeaderToAdd: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList</a>

---

##### `responseHeaderToRemove`<sup>Required</sup> <a name="responseHeaderToRemove" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToRemove"></a>

```typescript
public readonly responseHeaderToRemove: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList</a>

---

##### `requestHeaderToAddInput`<sup>Optional</sup> <a name="requestHeaderToAddInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToAddInput"></a>

```typescript
public readonly requestHeaderToAddInput: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a>[]

---

##### `requestHeaderToRemoveInput`<sup>Optional</sup> <a name="requestHeaderToRemoveInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToRemoveInput"></a>

```typescript
public readonly requestHeaderToRemoveInput: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a>[]

---

##### `responseHeaderToAddInput`<sup>Optional</sup> <a name="responseHeaderToAddInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToAddInput"></a>

```typescript
public readonly responseHeaderToAddInput: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a>[]

---

##### `responseHeaderToRemoveInput`<sup>Optional</sup> <a name="responseHeaderToRemoveInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToRemoveInput"></a>

```typescript
public readonly responseHeaderToRemoveInput: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a>[]

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.resetReplace">resetReplace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReplace` <a name="resetReplace" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.resetReplace"></a>

```typescript
public resetReplace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.replaceInput">replaceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerValue">headerValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.replace">replace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerValueInput"></a>

```typescript
public readonly headerValueInput: string;
```

- *Type:* string

---

##### `replaceInput`<sup>Optional</sup> <a name="replaceInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.replaceInput"></a>

```typescript
public readonly replaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.replace"></a>

```typescript
public readonly replace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a>[]

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a>[]

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.resetReplace">resetReplace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReplace` <a name="resetReplace" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.resetReplace"></a>

```typescript
public resetReplace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.replaceInput">replaceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerValue">headerValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.replace">replace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerValueInput"></a>

```typescript
public readonly headerValueInput: string;
```

- *Type:* string

---

##### `replaceInput`<sup>Optional</sup> <a name="replaceInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.replaceInput"></a>

```typescript
public readonly replaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.replace"></a>

```typescript
public readonly replace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a>[]

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a>[]

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a>[]

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetExactMatch">resetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetInvertMatch">resetInvertMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetPrefixMatch">resetPrefixMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetPresentMatch">resetPresentMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetSuffixMatch">resetSuffixMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExactMatch` <a name="resetExactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetExactMatch"></a>

```typescript
public resetExactMatch(): void
```

##### `resetInvertMatch` <a name="resetInvertMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetInvertMatch"></a>

```typescript
public resetInvertMatch(): void
```

##### `resetPrefixMatch` <a name="resetPrefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetPrefixMatch"></a>

```typescript
public resetPrefixMatch(): void
```

##### `resetPresentMatch` <a name="resetPresentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetPresentMatch"></a>

```typescript
public resetPresentMatch(): void
```

##### `resetSuffixMatch` <a name="resetSuffixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetSuffixMatch"></a>

```typescript
public resetSuffixMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.exactMatchInput">exactMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.invertMatchInput">invertMatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.prefixMatchInput">prefixMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.presentMatchInput">presentMatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.suffixMatchInput">suffixMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.exactMatch">exactMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.invertMatch">invertMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.prefixMatch">prefixMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.presentMatch">presentMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.suffixMatch">suffixMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exactMatchInput`<sup>Optional</sup> <a name="exactMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.exactMatchInput"></a>

```typescript
public readonly exactMatchInput: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `invertMatchInput`<sup>Optional</sup> <a name="invertMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.invertMatchInput"></a>

```typescript
public readonly invertMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prefixMatchInput`<sup>Optional</sup> <a name="prefixMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.prefixMatchInput"></a>

```typescript
public readonly prefixMatchInput: string;
```

- *Type:* string

---

##### `presentMatchInput`<sup>Optional</sup> <a name="presentMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.presentMatchInput"></a>

```typescript
public readonly presentMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `suffixMatchInput`<sup>Optional</sup> <a name="suffixMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.suffixMatchInput"></a>

```typescript
public readonly suffixMatchInput: string;
```

- *Type:* string

---

##### `exactMatch`<sup>Required</sup> <a name="exactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.exactMatch"></a>

```typescript
public readonly exactMatch: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `invertMatch`<sup>Required</sup> <a name="invertMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.invertMatch"></a>

```typescript
public readonly invertMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prefixMatch`<sup>Required</sup> <a name="prefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.prefixMatch"></a>

```typescript
public readonly prefixMatch: string;
```

- *Type:* string

---

##### `presentMatch`<sup>Required</sup> <a name="presentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.presentMatch"></a>

```typescript
public readonly presentMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `suffixMatch`<sup>Required</sup> <a name="suffixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.suffixMatch"></a>

```typescript
public readonly suffixMatch: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a>[]

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putHeaderMatch">putHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putQueryParameterMatch">putQueryParameterMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetFullPathMatch">resetFullPathMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetHeaderMatch">resetHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetPathTemplateMatch">resetPathTemplateMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetPrefixMatch">resetPrefixMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetQueryParameterMatch">resetQueryParameterMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaderMatch` <a name="putHeaderMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putHeaderMatch"></a>

```typescript
public putHeaderMatch(value: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putHeaderMatch.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a>[]

---

##### `putQueryParameterMatch` <a name="putQueryParameterMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putQueryParameterMatch"></a>

```typescript
public putQueryParameterMatch(value: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putQueryParameterMatch.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a>[]

---

##### `resetFullPathMatch` <a name="resetFullPathMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetFullPathMatch"></a>

```typescript
public resetFullPathMatch(): void
```

##### `resetHeaderMatch` <a name="resetHeaderMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetHeaderMatch"></a>

```typescript
public resetHeaderMatch(): void
```

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetIgnoreCase"></a>

```typescript
public resetIgnoreCase(): void
```

##### `resetPathTemplateMatch` <a name="resetPathTemplateMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetPathTemplateMatch"></a>

```typescript
public resetPathTemplateMatch(): void
```

##### `resetPrefixMatch` <a name="resetPrefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetPrefixMatch"></a>

```typescript
public resetPrefixMatch(): void
```

##### `resetQueryParameterMatch` <a name="resetQueryParameterMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetQueryParameterMatch"></a>

```typescript
public resetQueryParameterMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.headerMatch">headerMatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.queryParameterMatch">queryParameterMatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fullPathMatchInput">fullPathMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.headerMatchInput">headerMatchInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.pathTemplateMatchInput">pathTemplateMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.prefixMatchInput">prefixMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.queryParameterMatchInput">queryParameterMatchInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fullPathMatch">fullPathMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.pathTemplateMatch">pathTemplateMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.prefixMatch">prefixMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerMatch`<sup>Required</sup> <a name="headerMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.headerMatch"></a>

```typescript
public readonly headerMatch: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList</a>

---

##### `queryParameterMatch`<sup>Required</sup> <a name="queryParameterMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.queryParameterMatch"></a>

```typescript
public readonly queryParameterMatch: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList</a>

---

##### `fullPathMatchInput`<sup>Optional</sup> <a name="fullPathMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fullPathMatchInput"></a>

```typescript
public readonly fullPathMatchInput: string;
```

- *Type:* string

---

##### `headerMatchInput`<sup>Optional</sup> <a name="headerMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.headerMatchInput"></a>

```typescript
public readonly headerMatchInput: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a>[]

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.ignoreCaseInput"></a>

```typescript
public readonly ignoreCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathTemplateMatchInput`<sup>Optional</sup> <a name="pathTemplateMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.pathTemplateMatchInput"></a>

```typescript
public readonly pathTemplateMatchInput: string;
```

- *Type:* string

---

##### `prefixMatchInput`<sup>Optional</sup> <a name="prefixMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.prefixMatchInput"></a>

```typescript
public readonly prefixMatchInput: string;
```

- *Type:* string

---

##### `queryParameterMatchInput`<sup>Optional</sup> <a name="queryParameterMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.queryParameterMatchInput"></a>

```typescript
public readonly queryParameterMatchInput: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a>[]

---

##### `fullPathMatch`<sup>Required</sup> <a name="fullPathMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fullPathMatch"></a>

```typescript
public readonly fullPathMatch: string;
```

- *Type:* string

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathTemplateMatch`<sup>Required</sup> <a name="pathTemplateMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.pathTemplateMatch"></a>

```typescript
public readonly pathTemplateMatch: string;
```

- *Type:* string

---

##### `prefixMatch`<sup>Required</sup> <a name="prefixMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.prefixMatch"></a>

```typescript
public readonly prefixMatch: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a>[]

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resetExactMatch">resetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resetPresentMatch">resetPresentMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExactMatch` <a name="resetExactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resetExactMatch"></a>

```typescript
public resetExactMatch(): void
```

##### `resetPresentMatch` <a name="resetPresentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resetPresentMatch"></a>

```typescript
public resetPresentMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.exactMatchInput">exactMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.presentMatchInput">presentMatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.exactMatch">exactMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.presentMatch">presentMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exactMatchInput`<sup>Optional</sup> <a name="exactMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.exactMatchInput"></a>

```typescript
public readonly exactMatchInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `presentMatchInput`<sup>Optional</sup> <a name="presentMatchInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.presentMatchInput"></a>

```typescript
public readonly presentMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exactMatch`<sup>Required</sup> <a name="exactMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.exactMatch"></a>

```typescript
public readonly exactMatch: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `presentMatch`<sup>Required</sup> <a name="presentMatch" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.presentMatch"></a>

```typescript
public readonly presentMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putHeaderAction">putHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putMatchRule">putMatchRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putRouteAction">putRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putRouteMethods">putRouteMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putUrlRedirect">putUrlRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetHeaderAction">resetHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetRouteAction">resetRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetRouteMethods">resetRouteMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetUrlRedirect">resetUrlRedirect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaderAction` <a name="putHeaderAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putHeaderAction"></a>

```typescript
public putHeaderAction(value: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putHeaderAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a>

---

##### `putMatchRule` <a name="putMatchRule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putMatchRule"></a>

```typescript
public putMatchRule(value: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putMatchRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a>[]

---

##### `putRouteAction` <a name="putRouteAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putRouteAction"></a>

```typescript
public putRouteAction(value: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putRouteAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a>

---

##### `putRouteMethods` <a name="putRouteMethods" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putRouteMethods"></a>

```typescript
public putRouteMethods(value: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putRouteMethods.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods</a>

---

##### `putUrlRedirect` <a name="putUrlRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putUrlRedirect"></a>

```typescript
public putUrlRedirect(value: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putUrlRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHeaderAction` <a name="resetHeaderAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetHeaderAction"></a>

```typescript
public resetHeaderAction(): void
```

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetOrigin"></a>

```typescript
public resetOrigin(): void
```

##### `resetRouteAction` <a name="resetRouteAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetRouteAction"></a>

```typescript
public resetRouteAction(): void
```

##### `resetRouteMethods` <a name="resetRouteMethods" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetRouteMethods"></a>

```typescript
public resetRouteMethods(): void
```

##### `resetUrlRedirect` <a name="resetUrlRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetUrlRedirect"></a>

```typescript
public resetUrlRedirect(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.headerAction">headerAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.matchRule">matchRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeAction">routeAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeMethods">routeMethods</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.urlRedirect">urlRedirect</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.headerActionInput">headerActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.matchRuleInput">matchRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.originInput">originInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeActionInput">routeActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeMethodsInput">routeMethodsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.urlRedirectInput">urlRedirectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.priority">priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerAction`<sup>Required</sup> <a name="headerAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.headerAction"></a>

```typescript
public readonly headerAction: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference</a>

---

##### `matchRule`<sup>Required</sup> <a name="matchRule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.matchRule"></a>

```typescript
public readonly matchRule: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList</a>

---

##### `routeAction`<sup>Required</sup> <a name="routeAction" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeAction"></a>

```typescript
public readonly routeAction: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference</a>

---

##### `routeMethods`<sup>Required</sup> <a name="routeMethods" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeMethods"></a>

```typescript
public readonly routeMethods: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference</a>

---

##### `urlRedirect`<sup>Required</sup> <a name="urlRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.urlRedirect"></a>

```typescript
public readonly urlRedirect: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `headerActionInput`<sup>Optional</sup> <a name="headerActionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.headerActionInput"></a>

```typescript
public readonly headerActionInput: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a>

---

##### `matchRuleInput`<sup>Optional</sup> <a name="matchRuleInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.matchRuleInput"></a>

```typescript
public readonly matchRuleInput: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a>[]

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.originInput"></a>

```typescript
public readonly originInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: string;
```

- *Type:* string

---

##### `routeActionInput`<sup>Optional</sup> <a name="routeActionInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeActionInput"></a>

```typescript
public readonly routeActionInput: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a>

---

##### `routeMethodsInput`<sup>Optional</sup> <a name="routeMethodsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeMethodsInput"></a>

```typescript
public readonly routeMethodsInput: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods</a>

---

##### `urlRedirectInput`<sup>Optional</sup> <a name="urlRedirectInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.urlRedirectInput"></a>

```typescript
public readonly urlRedirectInput: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetCopiedParameters">resetCopiedParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetKeyset">resetKeyset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetTokenQueryParameter">resetTokenQueryParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCopiedParameters` <a name="resetCopiedParameters" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetCopiedParameters"></a>

```typescript
public resetCopiedParameters(): void
```

##### `resetKeyset` <a name="resetKeyset" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetKeyset"></a>

```typescript
public resetKeyset(): void
```

##### `resetTokenQueryParameter` <a name="resetTokenQueryParameter" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetTokenQueryParameter"></a>

```typescript
public resetTokenQueryParameter(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.copiedParametersInput">copiedParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.keysetInput">keysetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenQueryParameterInput">tokenQueryParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenTtlInput">tokenTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.copiedParameters">copiedParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.keyset">keyset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenQueryParameter">tokenQueryParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenTtl">tokenTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `copiedParametersInput`<sup>Optional</sup> <a name="copiedParametersInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.copiedParametersInput"></a>

```typescript
public readonly copiedParametersInput: string[];
```

- *Type:* string[]

---

##### `keysetInput`<sup>Optional</sup> <a name="keysetInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.keysetInput"></a>

```typescript
public readonly keysetInput: string;
```

- *Type:* string

---

##### `tokenQueryParameterInput`<sup>Optional</sup> <a name="tokenQueryParameterInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenQueryParameterInput"></a>

```typescript
public readonly tokenQueryParameterInput: string;
```

- *Type:* string

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `copiedParameters`<sup>Required</sup> <a name="copiedParameters" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.copiedParameters"></a>

```typescript
public readonly copiedParameters: string[];
```

- *Type:* string[]

---

##### `keyset`<sup>Required</sup> <a name="keyset" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.keyset"></a>

```typescript
public readonly keyset: string;
```

- *Type:* string

---

##### `tokenQueryParameter`<sup>Required</sup> <a name="tokenQueryParameter" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenQueryParameter"></a>

```typescript
public readonly tokenQueryParameter: string;
```

- *Type:* string

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludedQueryParameters">resetExcludedQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludeHost">resetExcludeHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludeQueryString">resetExcludeQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedCookieNames">resetIncludedCookieNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedHeaderNames">resetIncludedHeaderNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedQueryParameters">resetIncludedQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol">resetIncludeProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedQueryParameters` <a name="resetExcludedQueryParameters" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludedQueryParameters"></a>

```typescript
public resetExcludedQueryParameters(): void
```

##### `resetExcludeHost` <a name="resetExcludeHost" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludeHost"></a>

```typescript
public resetExcludeHost(): void
```

##### `resetExcludeQueryString` <a name="resetExcludeQueryString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludeQueryString"></a>

```typescript
public resetExcludeQueryString(): void
```

##### `resetIncludedCookieNames` <a name="resetIncludedCookieNames" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedCookieNames"></a>

```typescript
public resetIncludedCookieNames(): void
```

##### `resetIncludedHeaderNames` <a name="resetIncludedHeaderNames" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedHeaderNames"></a>

```typescript
public resetIncludedHeaderNames(): void
```

##### `resetIncludedQueryParameters` <a name="resetIncludedQueryParameters" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedQueryParameters"></a>

```typescript
public resetIncludedQueryParameters(): void
```

##### `resetIncludeProtocol` <a name="resetIncludeProtocol" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol"></a>

```typescript
public resetIncludeProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludedQueryParametersInput">excludedQueryParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeHostInput">excludeHostInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeQueryStringInput">excludeQueryStringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedCookieNamesInput">includedCookieNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedHeaderNamesInput">includedHeaderNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedQueryParametersInput">includedQueryParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput">includeProtocolInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludedQueryParameters">excludedQueryParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeHost">excludeHost</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeQueryString">excludeQueryString</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedCookieNames">includedCookieNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedHeaderNames">includedHeaderNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedQueryParameters">includedQueryParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">includeProtocol</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludedQueryParametersInput`<sup>Optional</sup> <a name="excludedQueryParametersInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludedQueryParametersInput"></a>

```typescript
public readonly excludedQueryParametersInput: string[];
```

- *Type:* string[]

---

##### `excludeHostInput`<sup>Optional</sup> <a name="excludeHostInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeHostInput"></a>

```typescript
public readonly excludeHostInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeQueryStringInput`<sup>Optional</sup> <a name="excludeQueryStringInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeQueryStringInput"></a>

```typescript
public readonly excludeQueryStringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includedCookieNamesInput`<sup>Optional</sup> <a name="includedCookieNamesInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedCookieNamesInput"></a>

```typescript
public readonly includedCookieNamesInput: string[];
```

- *Type:* string[]

---

##### `includedHeaderNamesInput`<sup>Optional</sup> <a name="includedHeaderNamesInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedHeaderNamesInput"></a>

```typescript
public readonly includedHeaderNamesInput: string[];
```

- *Type:* string[]

---

##### `includedQueryParametersInput`<sup>Optional</sup> <a name="includedQueryParametersInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedQueryParametersInput"></a>

```typescript
public readonly includedQueryParametersInput: string[];
```

- *Type:* string[]

---

##### `includeProtocolInput`<sup>Optional</sup> <a name="includeProtocolInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput"></a>

```typescript
public readonly includeProtocolInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludedQueryParameters`<sup>Required</sup> <a name="excludedQueryParameters" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludedQueryParameters"></a>

```typescript
public readonly excludedQueryParameters: string[];
```

- *Type:* string[]

---

##### `excludeHost`<sup>Required</sup> <a name="excludeHost" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeHost"></a>

```typescript
public readonly excludeHost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeQueryString`<sup>Required</sup> <a name="excludeQueryString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeQueryString"></a>

```typescript
public readonly excludeQueryString: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includedCookieNames`<sup>Required</sup> <a name="includedCookieNames" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedCookieNames"></a>

```typescript
public readonly includedCookieNames: string[];
```

- *Type:* string[]

---

##### `includedHeaderNames`<sup>Required</sup> <a name="includedHeaderNames" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedHeaderNames"></a>

```typescript
public readonly includedHeaderNames: string[];
```

- *Type:* string[]

---

##### `includedQueryParameters`<sup>Required</sup> <a name="includedQueryParameters" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedQueryParameters"></a>

```typescript
public readonly includedQueryParameters: string[];
```

- *Type:* string[]

---

##### `includeProtocol`<sup>Required</sup> <a name="includeProtocol" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```typescript
public readonly includeProtocol: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putAddSignatures">putAddSignatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putCacheKeyPolicy">putCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putSignedTokenOptions">putSignedTokenOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetAddSignatures">resetAddSignatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetCacheKeyPolicy">resetCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetCacheMode">resetCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetClientTtl">resetClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetNegativeCaching">resetNegativeCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetNegativeCachingPolicy">resetNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestKeyset">resetSignedRequestKeyset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestMaximumExpirationTtl">resetSignedRequestMaximumExpirationTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestMode">resetSignedRequestMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedTokenOptions">resetSignedTokenOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAddSignatures` <a name="putAddSignatures" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putAddSignatures"></a>

```typescript
public putAddSignatures(value: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putAddSignatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a>

---

##### `putCacheKeyPolicy` <a name="putCacheKeyPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```typescript
public putCacheKeyPolicy(value: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putCacheKeyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a>

---

##### `putSignedTokenOptions` <a name="putSignedTokenOptions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putSignedTokenOptions"></a>

```typescript
public putSignedTokenOptions(value: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putSignedTokenOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a>

---

##### `resetAddSignatures` <a name="resetAddSignatures" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetAddSignatures"></a>

```typescript
public resetAddSignatures(): void
```

##### `resetCacheKeyPolicy` <a name="resetCacheKeyPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```typescript
public resetCacheKeyPolicy(): void
```

##### `resetCacheMode` <a name="resetCacheMode" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetCacheMode"></a>

```typescript
public resetCacheMode(): void
```

##### `resetClientTtl` <a name="resetClientTtl" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetClientTtl"></a>

```typescript
public resetClientTtl(): void
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetDefaultTtl"></a>

```typescript
public resetDefaultTtl(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetNegativeCaching` <a name="resetNegativeCaching" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetNegativeCaching"></a>

```typescript
public resetNegativeCaching(): void
```

##### `resetNegativeCachingPolicy` <a name="resetNegativeCachingPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```typescript
public resetNegativeCachingPolicy(): void
```

##### `resetSignedRequestKeyset` <a name="resetSignedRequestKeyset" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestKeyset"></a>

```typescript
public resetSignedRequestKeyset(): void
```

##### `resetSignedRequestMaximumExpirationTtl` <a name="resetSignedRequestMaximumExpirationTtl" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestMaximumExpirationTtl"></a>

```typescript
public resetSignedRequestMaximumExpirationTtl(): void
```

##### `resetSignedRequestMode` <a name="resetSignedRequestMode" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestMode"></a>

```typescript
public resetSignedRequestMode(): void
```

##### `resetSignedTokenOptions` <a name="resetSignedTokenOptions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedTokenOptions"></a>

```typescript
public resetSignedTokenOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.addSignatures">addSignatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedTokenOptions">signedTokenOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.addSignaturesInput">addSignaturesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheKeyPolicyInput">cacheKeyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheModeInput">cacheModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.clientTtlInput">clientTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.maxTtlInput">maxTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingInput">negativeCachingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingPolicyInput">negativeCachingPolicyInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestKeysetInput">signedRequestKeysetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMaximumExpirationTtlInput">signedRequestMaximumExpirationTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestModeInput">signedRequestModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedTokenOptionsInput">signedTokenOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheMode">cacheMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.clientTtl">clientTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.maxTtl">maxTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCaching">negativeCaching</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestKeyset">signedRequestKeyset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMaximumExpirationTtl">signedRequestMaximumExpirationTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMode">signedRequestMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addSignatures`<sup>Required</sup> <a name="addSignatures" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.addSignatures"></a>

```typescript
public readonly addSignatures: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference</a>

---

##### `cacheKeyPolicy`<sup>Required</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```typescript
public readonly cacheKeyPolicy: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `signedTokenOptions`<sup>Required</sup> <a name="signedTokenOptions" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedTokenOptions"></a>

```typescript
public readonly signedTokenOptions: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference</a>

---

##### `addSignaturesInput`<sup>Optional</sup> <a name="addSignaturesInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.addSignaturesInput"></a>

```typescript
public readonly addSignaturesInput: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a>

---

##### `cacheKeyPolicyInput`<sup>Optional</sup> <a name="cacheKeyPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```typescript
public readonly cacheKeyPolicyInput: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a>

---

##### `cacheModeInput`<sup>Optional</sup> <a name="cacheModeInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheModeInput"></a>

```typescript
public readonly cacheModeInput: string;
```

- *Type:* string

---

##### `clientTtlInput`<sup>Optional</sup> <a name="clientTtlInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.clientTtlInput"></a>

```typescript
public readonly clientTtlInput: string;
```

- *Type:* string

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.defaultTtlInput"></a>

```typescript
public readonly defaultTtlInput: string;
```

- *Type:* string

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: string;
```

- *Type:* string

---

##### `negativeCachingInput`<sup>Optional</sup> <a name="negativeCachingInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingInput"></a>

```typescript
public readonly negativeCachingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `negativeCachingPolicyInput`<sup>Optional</sup> <a name="negativeCachingPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```typescript
public readonly negativeCachingPolicyInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `signedRequestKeysetInput`<sup>Optional</sup> <a name="signedRequestKeysetInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestKeysetInput"></a>

```typescript
public readonly signedRequestKeysetInput: string;
```

- *Type:* string

---

##### `signedRequestMaximumExpirationTtlInput`<sup>Optional</sup> <a name="signedRequestMaximumExpirationTtlInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMaximumExpirationTtlInput"></a>

```typescript
public readonly signedRequestMaximumExpirationTtlInput: string;
```

- *Type:* string

---

##### `signedRequestModeInput`<sup>Optional</sup> <a name="signedRequestModeInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestModeInput"></a>

```typescript
public readonly signedRequestModeInput: string;
```

- *Type:* string

---

##### `signedTokenOptionsInput`<sup>Optional</sup> <a name="signedTokenOptionsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedTokenOptionsInput"></a>

```typescript
public readonly signedTokenOptionsInput: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a>

---

##### `cacheMode`<sup>Required</sup> <a name="cacheMode" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheMode"></a>

```typescript
public readonly cacheMode: string;
```

- *Type:* string

---

##### `clientTtl`<sup>Required</sup> <a name="clientTtl" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.clientTtl"></a>

```typescript
public readonly clientTtl: string;
```

- *Type:* string

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: string;
```

- *Type:* string

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.maxTtl"></a>

```typescript
public readonly maxTtl: string;
```

- *Type:* string

---

##### `negativeCaching`<sup>Required</sup> <a name="negativeCaching" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCaching"></a>

```typescript
public readonly negativeCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `negativeCachingPolicy`<sup>Required</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```typescript
public readonly negativeCachingPolicy: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `signedRequestKeyset`<sup>Required</sup> <a name="signedRequestKeyset" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestKeyset"></a>

```typescript
public readonly signedRequestKeyset: string;
```

- *Type:* string

---

##### `signedRequestMaximumExpirationTtl`<sup>Required</sup> <a name="signedRequestMaximumExpirationTtl" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMaximumExpirationTtl"></a>

```typescript
public readonly signedRequestMaximumExpirationTtl: string;
```

- *Type:* string

---

##### `signedRequestMode`<sup>Required</sup> <a name="signedRequestMode" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMode"></a>

```typescript
public readonly signedRequestMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resetAllowedSignatureAlgorithms">resetAllowedSignatureAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resetTokenQueryParameter">resetTokenQueryParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedSignatureAlgorithms` <a name="resetAllowedSignatureAlgorithms" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resetAllowedSignatureAlgorithms"></a>

```typescript
public resetAllowedSignatureAlgorithms(): void
```

##### `resetTokenQueryParameter` <a name="resetTokenQueryParameter" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resetTokenQueryParameter"></a>

```typescript
public resetTokenQueryParameter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.allowedSignatureAlgorithmsInput">allowedSignatureAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.tokenQueryParameterInput">tokenQueryParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.allowedSignatureAlgorithms">allowedSignatureAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.tokenQueryParameter">tokenQueryParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedSignatureAlgorithmsInput`<sup>Optional</sup> <a name="allowedSignatureAlgorithmsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.allowedSignatureAlgorithmsInput"></a>

```typescript
public readonly allowedSignatureAlgorithmsInput: string[];
```

- *Type:* string[]

---

##### `tokenQueryParameterInput`<sup>Optional</sup> <a name="tokenQueryParameterInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.tokenQueryParameterInput"></a>

```typescript
public readonly tokenQueryParameterInput: string;
```

- *Type:* string

---

##### `allowedSignatureAlgorithms`<sup>Required</sup> <a name="allowedSignatureAlgorithms" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.allowedSignatureAlgorithms"></a>

```typescript
public readonly allowedSignatureAlgorithms: string[];
```

- *Type:* string[]

---

##### `tokenQueryParameter`<sup>Required</sup> <a name="tokenQueryParameter" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.tokenQueryParameter"></a>

```typescript
public readonly tokenQueryParameter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowCredentials">resetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowHeaders">resetAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowMethods">resetAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowOrigins">resetAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetExposeHeaders">resetExposeHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowCredentials` <a name="resetAllowCredentials" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowCredentials"></a>

```typescript
public resetAllowCredentials(): void
```

##### `resetAllowHeaders` <a name="resetAllowHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowHeaders"></a>

```typescript
public resetAllowHeaders(): void
```

##### `resetAllowMethods` <a name="resetAllowMethods" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowMethods"></a>

```typescript
public resetAllowMethods(): void
```

##### `resetAllowOrigins` <a name="resetAllowOrigins" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowOrigins"></a>

```typescript
public resetAllowOrigins(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetExposeHeaders` <a name="resetExposeHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetExposeHeaders"></a>

```typescript
public resetExposeHeaders(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowCredentialsInput">allowCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowHeadersInput">allowHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowMethodsInput">allowMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowOriginsInput">allowOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.exposeHeadersInput">exposeHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowHeaders">allowHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowMethods">allowMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowOrigins">allowOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.maxAge">maxAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowCredentialsInput`<sup>Optional</sup> <a name="allowCredentialsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowCredentialsInput"></a>

```typescript
public readonly allowCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowHeadersInput`<sup>Optional</sup> <a name="allowHeadersInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowHeadersInput"></a>

```typescript
public readonly allowHeadersInput: string[];
```

- *Type:* string[]

---

##### `allowMethodsInput`<sup>Optional</sup> <a name="allowMethodsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowMethodsInput"></a>

```typescript
public readonly allowMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowOriginsInput`<sup>Optional</sup> <a name="allowOriginsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowOriginsInput"></a>

```typescript
public readonly allowOriginsInput: string[];
```

- *Type:* string[]

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exposeHeadersInput`<sup>Optional</sup> <a name="exposeHeadersInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.exposeHeadersInput"></a>

```typescript
public readonly exposeHeadersInput: string[];
```

- *Type:* string[]

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.maxAgeInput"></a>

```typescript
public readonly maxAgeInput: string;
```

- *Type:* string

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowCredentials"></a>

```typescript
public readonly allowCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowHeaders`<sup>Required</sup> <a name="allowHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowHeaders"></a>

```typescript
public readonly allowHeaders: string[];
```

- *Type:* string[]

---

##### `allowMethods`<sup>Required</sup> <a name="allowMethods" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowMethods"></a>

```typescript
public readonly allowMethods: string[];
```

- *Type:* string[]

---

##### `allowOrigins`<sup>Required</sup> <a name="allowOrigins" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowOrigins"></a>

```typescript
public readonly allowOrigins: string[];
```

- *Type:* string[]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.exposeHeaders"></a>

```typescript
public readonly exposeHeaders: string[];
```

- *Type:* string[]

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.maxAge"></a>

```typescript
public readonly maxAge: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCdnPolicy">putCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCorsPolicy">putCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putUrlRewrite">putUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetCdnPolicy">resetCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetCompressionMode">resetCompressionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetCorsPolicy">resetCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetUrlRewrite">resetUrlRewrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCdnPolicy` <a name="putCdnPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCdnPolicy"></a>

```typescript
public putCdnPolicy(value: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCdnPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a>

---

##### `putCorsPolicy` <a name="putCorsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCorsPolicy"></a>

```typescript
public putCorsPolicy(value: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCorsPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a>

---

##### `putUrlRewrite` <a name="putUrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putUrlRewrite"></a>

```typescript
public putUrlRewrite(value: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putUrlRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a>

---

##### `resetCdnPolicy` <a name="resetCdnPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetCdnPolicy"></a>

```typescript
public resetCdnPolicy(): void
```

##### `resetCompressionMode` <a name="resetCompressionMode" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetCompressionMode"></a>

```typescript
public resetCompressionMode(): void
```

##### `resetCorsPolicy` <a name="resetCorsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetCorsPolicy"></a>

```typescript
public resetCorsPolicy(): void
```

##### `resetUrlRewrite` <a name="resetUrlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetUrlRewrite"></a>

```typescript
public resetUrlRewrite(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.corsPolicy">corsPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.urlRewrite">urlRewrite</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.cdnPolicyInput">cdnPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.compressionModeInput">compressionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.corsPolicyInput">corsPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.urlRewriteInput">urlRewriteInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.compressionMode">compressionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cdnPolicy`<sup>Required</sup> <a name="cdnPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.cdnPolicy"></a>

```typescript
public readonly cdnPolicy: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference</a>

---

##### `corsPolicy`<sup>Required</sup> <a name="corsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.corsPolicy"></a>

```typescript
public readonly corsPolicy: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference</a>

---

##### `urlRewrite`<sup>Required</sup> <a name="urlRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.urlRewrite"></a>

```typescript
public readonly urlRewrite: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference</a>

---

##### `cdnPolicyInput`<sup>Optional</sup> <a name="cdnPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.cdnPolicyInput"></a>

```typescript
public readonly cdnPolicyInput: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a>

---

##### `compressionModeInput`<sup>Optional</sup> <a name="compressionModeInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.compressionModeInput"></a>

```typescript
public readonly compressionModeInput: string;
```

- *Type:* string

---

##### `corsPolicyInput`<sup>Optional</sup> <a name="corsPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.corsPolicyInput"></a>

```typescript
public readonly corsPolicyInput: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a>

---

##### `urlRewriteInput`<sup>Optional</sup> <a name="urlRewriteInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.urlRewriteInput"></a>

```typescript
public readonly urlRewriteInput: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a>

---

##### `compressionMode`<sup>Required</sup> <a name="compressionMode" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.compressionMode"></a>

```typescript
public readonly compressionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetHostRewrite">resetHostRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetPathPrefixRewrite">resetPathPrefixRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetPathTemplateRewrite">resetPathTemplateRewrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostRewrite` <a name="resetHostRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetHostRewrite"></a>

```typescript
public resetHostRewrite(): void
```

##### `resetPathPrefixRewrite` <a name="resetPathPrefixRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetPathPrefixRewrite"></a>

```typescript
public resetPathPrefixRewrite(): void
```

##### `resetPathTemplateRewrite` <a name="resetPathTemplateRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetPathTemplateRewrite"></a>

```typescript
public resetPathTemplateRewrite(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.hostRewriteInput">hostRewriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathPrefixRewriteInput">pathPrefixRewriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathTemplateRewriteInput">pathTemplateRewriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.hostRewrite">hostRewrite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathPrefixRewrite">pathPrefixRewrite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathTemplateRewrite">pathTemplateRewrite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostRewriteInput`<sup>Optional</sup> <a name="hostRewriteInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.hostRewriteInput"></a>

```typescript
public readonly hostRewriteInput: string;
```

- *Type:* string

---

##### `pathPrefixRewriteInput`<sup>Optional</sup> <a name="pathPrefixRewriteInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathPrefixRewriteInput"></a>

```typescript
public readonly pathPrefixRewriteInput: string;
```

- *Type:* string

---

##### `pathTemplateRewriteInput`<sup>Optional</sup> <a name="pathTemplateRewriteInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathTemplateRewriteInput"></a>

```typescript
public readonly pathTemplateRewriteInput: string;
```

- *Type:* string

---

##### `hostRewrite`<sup>Required</sup> <a name="hostRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.hostRewrite"></a>

```typescript
public readonly hostRewrite: string;
```

- *Type:* string

---

##### `pathPrefixRewrite`<sup>Required</sup> <a name="pathPrefixRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathPrefixRewrite"></a>

```typescript
public readonly pathPrefixRewrite: string;
```

- *Type:* string

---

##### `pathTemplateRewrite`<sup>Required</sup> <a name="pathTemplateRewrite" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathTemplateRewrite"></a>

```typescript
public readonly pathTemplateRewrite: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.resetAllowedMethods">resetAllowedMethods</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedMethods` <a name="resetAllowedMethods" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.resetAllowedMethods"></a>

```typescript
public resetAllowedMethods(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.allowedMethodsInput"></a>

```typescript
public readonly allowedMethodsInput: string[];
```

- *Type:* string[]

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.allowedMethods"></a>

```typescript
public readonly allowedMethods: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods</a>

---


### GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetHostRedirect">resetHostRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetHttpsRedirect">resetHttpsRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetPathRedirect">resetPathRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetPrefixRedirect">resetPrefixRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetRedirectResponseCode">resetRedirectResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetStripQuery">resetStripQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostRedirect` <a name="resetHostRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetHostRedirect"></a>

```typescript
public resetHostRedirect(): void
```

##### `resetHttpsRedirect` <a name="resetHttpsRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetHttpsRedirect"></a>

```typescript
public resetHttpsRedirect(): void
```

##### `resetPathRedirect` <a name="resetPathRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetPathRedirect"></a>

```typescript
public resetPathRedirect(): void
```

##### `resetPrefixRedirect` <a name="resetPrefixRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetPrefixRedirect"></a>

```typescript
public resetPrefixRedirect(): void
```

##### `resetRedirectResponseCode` <a name="resetRedirectResponseCode" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetRedirectResponseCode"></a>

```typescript
public resetRedirectResponseCode(): void
```

##### `resetStripQuery` <a name="resetStripQuery" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetStripQuery"></a>

```typescript
public resetStripQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.hostRedirectInput">hostRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.httpsRedirectInput">httpsRedirectInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.pathRedirectInput">pathRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.prefixRedirectInput">prefixRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.redirectResponseCodeInput">redirectResponseCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.stripQueryInput">stripQueryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.hostRedirect">hostRedirect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.httpsRedirect">httpsRedirect</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.pathRedirect">pathRedirect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.prefixRedirect">prefixRedirect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.redirectResponseCode">redirectResponseCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.stripQuery">stripQuery</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostRedirectInput`<sup>Optional</sup> <a name="hostRedirectInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.hostRedirectInput"></a>

```typescript
public readonly hostRedirectInput: string;
```

- *Type:* string

---

##### `httpsRedirectInput`<sup>Optional</sup> <a name="httpsRedirectInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.httpsRedirectInput"></a>

```typescript
public readonly httpsRedirectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathRedirectInput`<sup>Optional</sup> <a name="pathRedirectInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.pathRedirectInput"></a>

```typescript
public readonly pathRedirectInput: string;
```

- *Type:* string

---

##### `prefixRedirectInput`<sup>Optional</sup> <a name="prefixRedirectInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.prefixRedirectInput"></a>

```typescript
public readonly prefixRedirectInput: string;
```

- *Type:* string

---

##### `redirectResponseCodeInput`<sup>Optional</sup> <a name="redirectResponseCodeInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.redirectResponseCodeInput"></a>

```typescript
public readonly redirectResponseCodeInput: string;
```

- *Type:* string

---

##### `stripQueryInput`<sup>Optional</sup> <a name="stripQueryInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.stripQueryInput"></a>

```typescript
public readonly stripQueryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostRedirect`<sup>Required</sup> <a name="hostRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.hostRedirect"></a>

```typescript
public readonly hostRedirect: string;
```

- *Type:* string

---

##### `httpsRedirect`<sup>Required</sup> <a name="httpsRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.httpsRedirect"></a>

```typescript
public readonly httpsRedirect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathRedirect`<sup>Required</sup> <a name="pathRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.pathRedirect"></a>

```typescript
public readonly pathRedirect: string;
```

- *Type:* string

---

##### `prefixRedirect`<sup>Required</sup> <a name="prefixRedirect" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.prefixRedirect"></a>

```typescript
public readonly prefixRedirect: string;
```

- *Type:* string

---

##### `redirectResponseCode`<sup>Required</sup> <a name="redirectResponseCode" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.redirectResponseCode"></a>

```typescript
public readonly redirectResponseCode: string;
```

- *Type:* string

---

##### `stripQuery`<sup>Required</sup> <a name="stripQuery" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.stripQuery"></a>

```typescript
public readonly stripQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">GoogleNetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a>

---


### GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference <a name="GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesEdgeCacheService } from '@cdktf/provider-google-beta'

new googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeouts">GoogleNetworkServicesEdgeCacheServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesEdgeCacheServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheService.GoogleNetworkServicesEdgeCacheServiceTimeouts">GoogleNetworkServicesEdgeCacheServiceTimeouts</a>

---



