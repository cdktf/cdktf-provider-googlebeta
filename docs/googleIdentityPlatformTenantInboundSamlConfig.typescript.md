# `googleIdentityPlatformTenantInboundSamlConfig` Submodule <a name="`googleIdentityPlatformTenantInboundSamlConfig` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformTenantInboundSamlConfig <a name="GoogleIdentityPlatformTenantInboundSamlConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config google_identity_platform_tenant_inbound_saml_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig(scope: Construct, id: string, config: GoogleIdentityPlatformTenantInboundSamlConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig">GoogleIdentityPlatformTenantInboundSamlConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig">GoogleIdentityPlatformTenantInboundSamlConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putIdpConfig">putIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putSpConfig">putSpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdpConfig` <a name="putIdpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putIdpConfig"></a>

```typescript
public putIdpConfig(value: GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig</a>

---

##### `putSpConfig` <a name="putSpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putSpConfig"></a>

```typescript
public putSpConfig(value: GoogleIdentityPlatformTenantInboundSamlConfigSpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putSpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig">GoogleIdentityPlatformTenantInboundSamlConfigSpConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIdentityPlatformTenantInboundSamlConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts">GoogleIdentityPlatformTenantInboundSamlConfigTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIdentityPlatformTenantInboundSamlConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isConstruct"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isTerraformElement"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isTerraformResource"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.generateConfigForImport"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleIdentityPlatformTenantInboundSamlConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIdentityPlatformTenantInboundSamlConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIdentityPlatformTenantInboundSamlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIdentityPlatformTenantInboundSamlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.spConfig">spConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference">GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference">GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.idpConfigInput">idpConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.spConfigInput">spConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig">GoogleIdentityPlatformTenantInboundSamlConfigSpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.tenantInput">tenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts">GoogleIdentityPlatformTenantInboundSamlConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.tenant">tenant</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.idpConfig"></a>

```typescript
public readonly idpConfig: GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference</a>

---

##### `spConfig`<sup>Required</sup> <a name="spConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.spConfig"></a>

```typescript
public readonly spConfig: GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference">GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference">GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idpConfigInput`<sup>Optional</sup> <a name="idpConfigInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.idpConfigInput"></a>

```typescript
public readonly idpConfigInput: GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `spConfigInput`<sup>Optional</sup> <a name="spConfigInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.spConfigInput"></a>

```typescript
public readonly spConfigInput: GoogleIdentityPlatformTenantInboundSamlConfigSpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig">GoogleIdentityPlatformTenantInboundSamlConfigSpConfig</a>

---

##### `tenantInput`<sup>Optional</sup> <a name="tenantInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.tenantInput"></a>

```typescript
public readonly tenantInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIdentityPlatformTenantInboundSamlConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts">GoogleIdentityPlatformTenantInboundSamlConfigTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformTenantInboundSamlConfigConfig <a name="GoogleIdentityPlatformTenantInboundSamlConfigConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

const googleIdentityPlatformTenantInboundSamlConfigConfig: googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.displayName">displayName</a></code> | <code>string</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.name">name</a></code> | <code>string</code> | The name of the InboundSamlConfig resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.spConfig">spConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig">GoogleIdentityPlatformTenantInboundSamlConfigSpConfig</a></code> | sp_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.tenant">tenant</a></code> | <code>string</code> | The name of the tenant where this inbound SAML config resource exists. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#id GoogleIdentityPlatformTenantInboundSamlConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#project GoogleIdentityPlatformTenantInboundSamlConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts">GoogleIdentityPlatformTenantInboundSamlConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#display_name GoogleIdentityPlatformTenantInboundSamlConfig#display_name}

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.idpConfig"></a>

```typescript
public readonly idpConfig: GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#idp_config GoogleIdentityPlatformTenantInboundSamlConfig#idp_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the InboundSamlConfig resource.

Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#name GoogleIdentityPlatformTenantInboundSamlConfig#name}

---

##### `spConfig`<sup>Required</sup> <a name="spConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.spConfig"></a>

```typescript
public readonly spConfig: GoogleIdentityPlatformTenantInboundSamlConfigSpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig">GoogleIdentityPlatformTenantInboundSamlConfigSpConfig</a>

sp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#sp_config GoogleIdentityPlatformTenantInboundSamlConfig#sp_config}

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

The name of the tenant where this inbound SAML config resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#tenant GoogleIdentityPlatformTenantInboundSamlConfig#tenant}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#enabled GoogleIdentityPlatformTenantInboundSamlConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#id GoogleIdentityPlatformTenantInboundSamlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#project GoogleIdentityPlatformTenantInboundSamlConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIdentityPlatformTenantInboundSamlConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts">GoogleIdentityPlatformTenantInboundSamlConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#timeouts GoogleIdentityPlatformTenantInboundSamlConfig#timeouts}

---

### GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig <a name="GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

const googleIdentityPlatformTenantInboundSamlConfigIdpConfig: googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.property.idpCertificates">idpCertificates</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>[]</code> | idp_certificates block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.property.idpEntityId">idpEntityId</a></code> | <code>string</code> | Unique identifier for all SAML entities. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.property.ssoUrl">ssoUrl</a></code> | <code>string</code> | URL to send Authentication request to. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.property.signRequest">signRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if outbounding SAMLRequest should be signed. |

---

##### `idpCertificates`<sup>Required</sup> <a name="idpCertificates" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.property.idpCertificates"></a>

```typescript
public readonly idpCertificates: IResolvable | GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>[]

idp_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#idp_certificates GoogleIdentityPlatformTenantInboundSamlConfig#idp_certificates}

---

##### `idpEntityId`<sup>Required</sup> <a name="idpEntityId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.property.idpEntityId"></a>

```typescript
public readonly idpEntityId: string;
```

- *Type:* string

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#idp_entity_id GoogleIdentityPlatformTenantInboundSamlConfig#idp_entity_id}

---

##### `ssoUrl`<sup>Required</sup> <a name="ssoUrl" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.property.ssoUrl"></a>

```typescript
public readonly ssoUrl: string;
```

- *Type:* string

URL to send Authentication request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#sso_url GoogleIdentityPlatformTenantInboundSamlConfig#sso_url}

---

##### `signRequest`<sup>Optional</sup> <a name="signRequest" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig.property.signRequest"></a>

```typescript
public readonly signRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if outbounding SAMLRequest should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#sign_request GoogleIdentityPlatformTenantInboundSamlConfig#sign_request}

---

### GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates <a name="GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

const googleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates: googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates.property.x509Certificate">x509Certificate</a></code> | <code>string</code> | The x509 certificate. |

---

##### `x509Certificate`<sup>Optional</sup> <a name="x509Certificate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates.property.x509Certificate"></a>

```typescript
public readonly x509Certificate: string;
```

- *Type:* string

The x509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#x509_certificate GoogleIdentityPlatformTenantInboundSamlConfig#x509_certificate}

---

### GoogleIdentityPlatformTenantInboundSamlConfigSpConfig <a name="GoogleIdentityPlatformTenantInboundSamlConfigSpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

const googleIdentityPlatformTenantInboundSamlConfigSpConfig: googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig.property.callbackUri">callbackUri</a></code> | <code>string</code> | Callback URI where responses from IDP are handled. Must start with 'https://'. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig.property.spEntityId">spEntityId</a></code> | <code>string</code> | Unique identifier for all SAML entities. |

---

##### `callbackUri`<sup>Required</sup> <a name="callbackUri" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig.property.callbackUri"></a>

```typescript
public readonly callbackUri: string;
```

- *Type:* string

Callback URI where responses from IDP are handled. Must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#callback_uri GoogleIdentityPlatformTenantInboundSamlConfig#callback_uri}

---

##### `spEntityId`<sup>Required</sup> <a name="spEntityId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig.property.spEntityId"></a>

```typescript
public readonly spEntityId: string;
```

- *Type:* string

Unique identifier for all SAML entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#sp_entity_id GoogleIdentityPlatformTenantInboundSamlConfig#sp_entity_id}

---

### GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates <a name="GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

const googleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates: googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates = { ... }
```


### GoogleIdentityPlatformTenantInboundSamlConfigTimeouts <a name="GoogleIdentityPlatformTenantInboundSamlConfigTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

const googleIdentityPlatformTenantInboundSamlConfigTimeouts: googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#create GoogleIdentityPlatformTenantInboundSamlConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#delete GoogleIdentityPlatformTenantInboundSamlConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#update GoogleIdentityPlatformTenantInboundSamlConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#create GoogleIdentityPlatformTenantInboundSamlConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#delete GoogleIdentityPlatformTenantInboundSamlConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_tenant_inbound_saml_config#update GoogleIdentityPlatformTenantInboundSamlConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList <a name="GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.get"></a>

```typescript
public get(index: number): GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>[]

---


### GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference <a name="GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resetX509Certificate">resetX509Certificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetX509Certificate` <a name="resetX509Certificate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.resetX509Certificate"></a>

```typescript
public resetX509Certificate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509CertificateInput">x509CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509Certificate">x509Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `x509CertificateInput`<sup>Optional</sup> <a name="x509CertificateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509CertificateInput"></a>

```typescript
public readonly x509CertificateInput: string;
```

- *Type:* string

---

##### `x509Certificate`<sup>Required</sup> <a name="x509Certificate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.x509Certificate"></a>

```typescript
public readonly x509Certificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>

---


### GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference <a name="GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.putIdpCertificates">putIdpCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.resetSignRequest">resetSignRequest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdpCertificates` <a name="putIdpCertificates" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.putIdpCertificates"></a>

```typescript
public putIdpCertificates(value: IResolvable | GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.putIdpCertificates.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>[]

---

##### `resetSignRequest` <a name="resetSignRequest" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.resetSignRequest"></a>

```typescript
public resetSignRequest(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpCertificates">idpCertificates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpCertificatesInput">idpCertificatesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpEntityIdInput">idpEntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.signRequestInput">signRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.ssoUrlInput">ssoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpEntityId">idpEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.signRequest">signRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.ssoUrl">ssoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idpCertificates`<sup>Required</sup> <a name="idpCertificates" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpCertificates"></a>

```typescript
public readonly idpCertificates: GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList</a>

---

##### `idpCertificatesInput`<sup>Optional</sup> <a name="idpCertificatesInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpCertificatesInput"></a>

```typescript
public readonly idpCertificatesInput: IResolvable | GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates</a>[]

---

##### `idpEntityIdInput`<sup>Optional</sup> <a name="idpEntityIdInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpEntityIdInput"></a>

```typescript
public readonly idpEntityIdInput: string;
```

- *Type:* string

---

##### `signRequestInput`<sup>Optional</sup> <a name="signRequestInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.signRequestInput"></a>

```typescript
public readonly signRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ssoUrlInput`<sup>Optional</sup> <a name="ssoUrlInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.ssoUrlInput"></a>

```typescript
public readonly ssoUrlInput: string;
```

- *Type:* string

---

##### `idpEntityId`<sup>Required</sup> <a name="idpEntityId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.idpEntityId"></a>

```typescript
public readonly idpEntityId: string;
```

- *Type:* string

---

##### `signRequest`<sup>Required</sup> <a name="signRequest" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.signRequest"></a>

```typescript
public readonly signRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ssoUrl`<sup>Required</sup> <a name="ssoUrl" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.ssoUrl"></a>

```typescript
public readonly ssoUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig">GoogleIdentityPlatformTenantInboundSamlConfigIdpConfig</a>

---


### GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference <a name="GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spCertificates">spCertificates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList">GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.callbackUriInput">callbackUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spEntityIdInput">spEntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.callbackUri">callbackUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spEntityId">spEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig">GoogleIdentityPlatformTenantInboundSamlConfigSpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `spCertificates`<sup>Required</sup> <a name="spCertificates" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spCertificates"></a>

```typescript
public readonly spCertificates: GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList">GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList</a>

---

##### `callbackUriInput`<sup>Optional</sup> <a name="callbackUriInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.callbackUriInput"></a>

```typescript
public readonly callbackUriInput: string;
```

- *Type:* string

---

##### `spEntityIdInput`<sup>Optional</sup> <a name="spEntityIdInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spEntityIdInput"></a>

```typescript
public readonly spEntityIdInput: string;
```

- *Type:* string

---

##### `callbackUri`<sup>Required</sup> <a name="callbackUri" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.callbackUri"></a>

```typescript
public readonly callbackUri: string;
```

- *Type:* string

---

##### `spEntityId`<sup>Required</sup> <a name="spEntityId" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.spEntityId"></a>

```typescript
public readonly spEntityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIdentityPlatformTenantInboundSamlConfigSpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfig">GoogleIdentityPlatformTenantInboundSamlConfigSpConfig</a>

---


### GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList <a name="GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.get"></a>

```typescript
public get(index: number): GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference <a name="GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.x509Certificate">x509Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `x509Certificate`<sup>Required</sup> <a name="x509Certificate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.x509Certificate"></a>

```typescript
public readonly x509Certificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates">GoogleIdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates</a>

---


### GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIdentityPlatformTenantInboundSamlConfig } from '@cdktf/provider-google-beta'

new googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts">GoogleIdentityPlatformTenantInboundSamlConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIdentityPlatformTenantInboundSamlConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIdentityPlatformTenantInboundSamlConfig.GoogleIdentityPlatformTenantInboundSamlConfigTimeouts">GoogleIdentityPlatformTenantInboundSamlConfigTimeouts</a>

---



