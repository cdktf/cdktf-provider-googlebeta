# `googleApigeeApiProduct` Submodule <a name="`googleApigeeApiProduct` Submodule" id="@cdktf/provider-google-beta.googleApigeeApiProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeApiProduct <a name="GoogleApigeeApiProduct" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product google_apigee_api_product}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProduct(scope: Construct, id: string, config: GoogleApigeeApiProductConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig">GoogleApigeeApiProductConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig">GoogleApigeeApiProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putGraphqlOperationGroup">putGraphqlOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putGrpcOperationGroup">putGrpcOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putOperationGroup">putOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetApiResources">resetApiResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetApprovalType">resetApprovalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetEnvironments">resetEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetGraphqlOperationGroup">resetGraphqlOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetGrpcOperationGroup">resetGrpcOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetOperationGroup">resetOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetProxies">resetProxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetQuotaCounterScope">resetQuotaCounterScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetQuotaInterval">resetQuotaInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetQuotaTimeUnit">resetQuotaTimeUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetSpace">resetSpace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributes` <a name="putAttributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putAttributes"></a>

```typescript
public putAttributes(value: IResolvable | GoogleApigeeApiProductAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putAttributes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>[]

---

##### `putGraphqlOperationGroup` <a name="putGraphqlOperationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putGraphqlOperationGroup"></a>

```typescript
public putGraphqlOperationGroup(value: GoogleApigeeApiProductGraphqlOperationGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putGraphqlOperationGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup">GoogleApigeeApiProductGraphqlOperationGroup</a>

---

##### `putGrpcOperationGroup` <a name="putGrpcOperationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putGrpcOperationGroup"></a>

```typescript
public putGrpcOperationGroup(value: GoogleApigeeApiProductGrpcOperationGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putGrpcOperationGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup">GoogleApigeeApiProductGrpcOperationGroup</a>

---

##### `putOperationGroup` <a name="putOperationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putOperationGroup"></a>

```typescript
public putOperationGroup(value: GoogleApigeeApiProductOperationGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putOperationGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup">GoogleApigeeApiProductOperationGroup</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleApigeeApiProductTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts">GoogleApigeeApiProductTimeouts</a>

---

##### `resetApiResources` <a name="resetApiResources" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetApiResources"></a>

```typescript
public resetApiResources(): void
```

##### `resetApprovalType` <a name="resetApprovalType" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetApprovalType"></a>

```typescript
public resetApprovalType(): void
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnvironments` <a name="resetEnvironments" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetEnvironments"></a>

```typescript
public resetEnvironments(): void
```

##### `resetGraphqlOperationGroup` <a name="resetGraphqlOperationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetGraphqlOperationGroup"></a>

```typescript
public resetGraphqlOperationGroup(): void
```

##### `resetGrpcOperationGroup` <a name="resetGrpcOperationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetGrpcOperationGroup"></a>

```typescript
public resetGrpcOperationGroup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOperationGroup` <a name="resetOperationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetOperationGroup"></a>

```typescript
public resetOperationGroup(): void
```

##### `resetProxies` <a name="resetProxies" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetProxies"></a>

```typescript
public resetProxies(): void
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetQuota"></a>

```typescript
public resetQuota(): void
```

##### `resetQuotaCounterScope` <a name="resetQuotaCounterScope" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetQuotaCounterScope"></a>

```typescript
public resetQuotaCounterScope(): void
```

##### `resetQuotaInterval` <a name="resetQuotaInterval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetQuotaInterval"></a>

```typescript
public resetQuotaInterval(): void
```

##### `resetQuotaTimeUnit` <a name="resetQuotaTimeUnit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetQuotaTimeUnit"></a>

```typescript
public resetQuotaTimeUnit(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetSpace` <a name="resetSpace" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetSpace"></a>

```typescript
public resetSpace(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeApiProduct resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isConstruct"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

googleApigeeApiProduct.GoogleApigeeApiProduct.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isTerraformElement"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

googleApigeeApiProduct.GoogleApigeeApiProduct.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isTerraformResource"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

googleApigeeApiProduct.GoogleApigeeApiProduct.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.generateConfigForImport"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

googleApigeeApiProduct.GoogleApigeeApiProduct.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleApigeeApiProduct resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeApiProduct to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeApiProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeApiProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList">GoogleApigeeApiProductAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.graphqlOperationGroup">graphqlOperationGroup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference">GoogleApigeeApiProductGraphqlOperationGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.grpcOperationGroup">grpcOperationGroup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference">GoogleApigeeApiProductGrpcOperationGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.lastModifiedAt">lastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.operationGroup">operationGroup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference">GoogleApigeeApiProductOperationGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference">GoogleApigeeApiProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.apiResourcesInput">apiResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.approvalTypeInput">approvalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.attributesInput">attributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.environmentsInput">environmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.graphqlOperationGroupInput">graphqlOperationGroupInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup">GoogleApigeeApiProductGraphqlOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.grpcOperationGroupInput">grpcOperationGroupInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup">GoogleApigeeApiProductGrpcOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.operationGroupInput">operationGroupInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup">GoogleApigeeApiProductOperationGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.proxiesInput">proxiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaCounterScopeInput">quotaCounterScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaInput">quotaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaIntervalInput">quotaIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaTimeUnitInput">quotaTimeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.spaceInput">spaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts">GoogleApigeeApiProductTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.apiResources">apiResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.approvalType">approvalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.environments">environments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.proxies">proxies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quota">quota</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaCounterScope">quotaCounterScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaInterval">quotaInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaTimeUnit">quotaTimeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.space">space</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.attributes"></a>

```typescript
public readonly attributes: GoogleApigeeApiProductAttributesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList">GoogleApigeeApiProductAttributesList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `graphqlOperationGroup`<sup>Required</sup> <a name="graphqlOperationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.graphqlOperationGroup"></a>

```typescript
public readonly graphqlOperationGroup: GoogleApigeeApiProductGraphqlOperationGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference">GoogleApigeeApiProductGraphqlOperationGroupOutputReference</a>

---

##### `grpcOperationGroup`<sup>Required</sup> <a name="grpcOperationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.grpcOperationGroup"></a>

```typescript
public readonly grpcOperationGroup: GoogleApigeeApiProductGrpcOperationGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference">GoogleApigeeApiProductGrpcOperationGroupOutputReference</a>

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.lastModifiedAt"></a>

```typescript
public readonly lastModifiedAt: string;
```

- *Type:* string

---

##### `operationGroup`<sup>Required</sup> <a name="operationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.operationGroup"></a>

```typescript
public readonly operationGroup: GoogleApigeeApiProductOperationGroupOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference">GoogleApigeeApiProductOperationGroupOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApigeeApiProductTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference">GoogleApigeeApiProductTimeoutsOutputReference</a>

---

##### `apiResourcesInput`<sup>Optional</sup> <a name="apiResourcesInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.apiResourcesInput"></a>

```typescript
public readonly apiResourcesInput: string[];
```

- *Type:* string[]

---

##### `approvalTypeInput`<sup>Optional</sup> <a name="approvalTypeInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.approvalTypeInput"></a>

```typescript
public readonly approvalTypeInput: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | GoogleApigeeApiProductAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `environmentsInput`<sup>Optional</sup> <a name="environmentsInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.environmentsInput"></a>

```typescript
public readonly environmentsInput: string[];
```

- *Type:* string[]

---

##### `graphqlOperationGroupInput`<sup>Optional</sup> <a name="graphqlOperationGroupInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.graphqlOperationGroupInput"></a>

```typescript
public readonly graphqlOperationGroupInput: GoogleApigeeApiProductGraphqlOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup">GoogleApigeeApiProductGraphqlOperationGroup</a>

---

##### `grpcOperationGroupInput`<sup>Optional</sup> <a name="grpcOperationGroupInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.grpcOperationGroupInput"></a>

```typescript
public readonly grpcOperationGroupInput: GoogleApigeeApiProductGrpcOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup">GoogleApigeeApiProductGrpcOperationGroup</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operationGroupInput`<sup>Optional</sup> <a name="operationGroupInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.operationGroupInput"></a>

```typescript
public readonly operationGroupInput: GoogleApigeeApiProductOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup">GoogleApigeeApiProductOperationGroup</a>

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `proxiesInput`<sup>Optional</sup> <a name="proxiesInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.proxiesInput"></a>

```typescript
public readonly proxiesInput: string[];
```

- *Type:* string[]

---

##### `quotaCounterScopeInput`<sup>Optional</sup> <a name="quotaCounterScopeInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaCounterScopeInput"></a>

```typescript
public readonly quotaCounterScopeInput: string;
```

- *Type:* string

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaInput"></a>

```typescript
public readonly quotaInput: string;
```

- *Type:* string

---

##### `quotaIntervalInput`<sup>Optional</sup> <a name="quotaIntervalInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaIntervalInput"></a>

```typescript
public readonly quotaIntervalInput: string;
```

- *Type:* string

---

##### `quotaTimeUnitInput`<sup>Optional</sup> <a name="quotaTimeUnitInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaTimeUnitInput"></a>

```typescript
public readonly quotaTimeUnitInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `spaceInput`<sup>Optional</sup> <a name="spaceInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.spaceInput"></a>

```typescript
public readonly spaceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleApigeeApiProductTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts">GoogleApigeeApiProductTimeouts</a>

---

##### `apiResources`<sup>Required</sup> <a name="apiResources" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.apiResources"></a>

```typescript
public readonly apiResources: string[];
```

- *Type:* string[]

---

##### `approvalType`<sup>Required</sup> <a name="approvalType" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.approvalType"></a>

```typescript
public readonly approvalType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.environments"></a>

```typescript
public readonly environments: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `proxies`<sup>Required</sup> <a name="proxies" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.proxies"></a>

```typescript
public readonly proxies: string[];
```

- *Type:* string[]

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quota"></a>

```typescript
public readonly quota: string;
```

- *Type:* string

---

##### `quotaCounterScope`<sup>Required</sup> <a name="quotaCounterScope" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaCounterScope"></a>

```typescript
public readonly quotaCounterScope: string;
```

- *Type:* string

---

##### `quotaInterval`<sup>Required</sup> <a name="quotaInterval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaInterval"></a>

```typescript
public readonly quotaInterval: string;
```

- *Type:* string

---

##### `quotaTimeUnit`<sup>Required</sup> <a name="quotaTimeUnit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.quotaTimeUnit"></a>

```typescript
public readonly quotaTimeUnit: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.space"></a>

```typescript
public readonly space: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProduct.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeApiProductAttributes <a name="GoogleApigeeApiProductAttributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductAttributes: googleApigeeApiProduct.GoogleApigeeApiProductAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes.property.name">name</a></code> | <code>string</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes.property.value">value</a></code> | <code>string</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#name GoogleApigeeApiProduct#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#value GoogleApigeeApiProduct#value}

---

### GoogleApigeeApiProductConfig <a name="GoogleApigeeApiProductConfig" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductConfig: googleApigeeApiProduct.GoogleApigeeApiProductConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.displayName">displayName</a></code> | <code>string</code> | Name displayed in the UI or developer portal to developers registering for API access. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.name">name</a></code> | <code>string</code> | Internal name of the API product. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.orgId">orgId</a></code> | <code>string</code> | The Apigee Organization associated with the Apigee API product, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.apiResources">apiResources</a></code> | <code>string[]</code> | Comma-separated list of API resources to be bundled in the API product. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.approvalType">approvalType</a></code> | <code>string</code> | Flag that specifies how API keys are approved to access the APIs defined by the API product. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.attributes">attributes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>[]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.description">description</a></code> | <code>string</code> | Description of the API product. Include key information about the API product that is not captured by other fields. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.environments">environments</a></code> | <code>string[]</code> | Comma-separated list of environment names to which the API product is bound. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.graphqlOperationGroup">graphqlOperationGroup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup">GoogleApigeeApiProductGraphqlOperationGroup</a></code> | graphql_operation_group block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.grpcOperationGroup">grpcOperationGroup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup">GoogleApigeeApiProductGrpcOperationGroup</a></code> | grpc_operation_group block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#id GoogleApigeeApiProduct#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.operationGroup">operationGroup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup">GoogleApigeeApiProductOperationGroup</a></code> | operation_group block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.proxies">proxies</a></code> | <code>string[]</code> | Comma-separated list of API proxy names to which this API product is bound. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.quota">quota</a></code> | <code>string</code> | Number of request messages permitted per app by this API product for the specified quotaInterval and quotaTimeUnit. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.quotaCounterScope">quotaCounterScope</a></code> | <code>string</code> | Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.quotaInterval">quotaInterval</a></code> | <code>string</code> | Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.quotaTimeUnit">quotaTimeUnit</a></code> | <code>string</code> | Time unit defined for the quotaInterval. Valid values include second, minute, hour, day, month or year. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Comma-separated list of OAuth scopes that are validated at runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.space">space</a></code> | <code>string</code> | Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts">GoogleApigeeApiProductTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Name displayed in the UI or developer portal to developers registering for API access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#display_name GoogleApigeeApiProduct#display_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Internal name of the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#name GoogleApigeeApiProduct#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The Apigee Organization associated with the Apigee API product, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#org_id GoogleApigeeApiProduct#org_id}

---

##### `apiResources`<sup>Optional</sup> <a name="apiResources" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.apiResources"></a>

```typescript
public readonly apiResources: string[];
```

- *Type:* string[]

Comma-separated list of API resources to be bundled in the API product.

By default, the resource paths are mapped from the proxy.pathsuffix variable.
The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the apiResources element is defined to be /forecastrss and the base path defined for the API proxy is /weather, then only requests to /weather/forecastrss are permitted by the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#api_resources GoogleApigeeApiProduct#api_resources}

---

##### `approvalType`<sup>Optional</sup> <a name="approvalType" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.approvalType"></a>

```typescript
public readonly approvalType: string;
```

- *Type:* string

Flag that specifies how API keys are approved to access the APIs defined by the API product.

Valid values are 'auto' or 'manual'. Possible values: ["auto", "manual"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#approval_type GoogleApigeeApiProduct#approval_type}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.attributes"></a>

```typescript
public readonly attributes: IResolvable | GoogleApigeeApiProductAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>[]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#attributes GoogleApigeeApiProduct#attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the API product. Include key information about the API product that is not captured by other fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#description GoogleApigeeApiProduct#description}

---

##### `environments`<sup>Optional</sup> <a name="environments" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.environments"></a>

```typescript
public readonly environments: string[];
```

- *Type:* string[]

Comma-separated list of environment names to which the API product is bound.

Requests to environments that are not listed are rejected.
By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#environments GoogleApigeeApiProduct#environments}

---

##### `graphqlOperationGroup`<sup>Optional</sup> <a name="graphqlOperationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.graphqlOperationGroup"></a>

```typescript
public readonly graphqlOperationGroup: GoogleApigeeApiProductGraphqlOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup">GoogleApigeeApiProductGraphqlOperationGroup</a>

graphql_operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#graphql_operation_group GoogleApigeeApiProduct#graphql_operation_group}

---

##### `grpcOperationGroup`<sup>Optional</sup> <a name="grpcOperationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.grpcOperationGroup"></a>

```typescript
public readonly grpcOperationGroup: GoogleApigeeApiProductGrpcOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup">GoogleApigeeApiProductGrpcOperationGroup</a>

grpc_operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#grpc_operation_group GoogleApigeeApiProduct#grpc_operation_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#id GoogleApigeeApiProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operationGroup`<sup>Optional</sup> <a name="operationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.operationGroup"></a>

```typescript
public readonly operationGroup: GoogleApigeeApiProductOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup">GoogleApigeeApiProductOperationGroup</a>

operation_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_group GoogleApigeeApiProduct#operation_group}

---

##### `proxies`<sup>Optional</sup> <a name="proxies" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.proxies"></a>

```typescript
public readonly proxies: string[];
```

- *Type:* string[]

Comma-separated list of API proxy names to which this API product is bound.

By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies.
Apigee rejects requests to API proxies that are not listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#proxies GoogleApigeeApiProduct#proxies}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.quota"></a>

```typescript
public readonly quota: string;
```

- *Type:* string

Number of request messages permitted per app by this API product for the specified quotaInterval and quotaTimeUnit.

For example, a quota of 50, for a quotaInterval of 12 and a quotaTimeUnit of hours means 50 requests are allowed every 12 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota GoogleApigeeApiProduct#quota}

---

##### `quotaCounterScope`<sup>Optional</sup> <a name="quotaCounterScope" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.quotaCounterScope"></a>

```typescript
public readonly quotaCounterScope: string;
```

- *Type:* string

Scope of the quota decides how the quota counter gets applied and evaluate for quota violation.

If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself. Possible values: ["QUOTA_COUNTER_SCOPE_UNSPECIFIED", "PROXY", "OPERATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota_counter_scope GoogleApigeeApiProduct#quota_counter_scope}

---

##### `quotaInterval`<sup>Optional</sup> <a name="quotaInterval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.quotaInterval"></a>

```typescript
public readonly quotaInterval: string;
```

- *Type:* string

Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota_interval GoogleApigeeApiProduct#quota_interval}

---

##### `quotaTimeUnit`<sup>Optional</sup> <a name="quotaTimeUnit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.quotaTimeUnit"></a>

```typescript
public readonly quotaTimeUnit: string;
```

- *Type:* string

Time unit defined for the quotaInterval. Valid values include second, minute, hour, day, month or year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota_time_unit GoogleApigeeApiProduct#quota_time_unit}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Comma-separated list of OAuth scopes that are validated at runtime.

Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#scopes GoogleApigeeApiProduct#scopes}

---

##### `space`<sup>Optional</sup> <a name="space" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.space"></a>

```typescript
public readonly space: string;
```

- *Type:* string

Optional. The resource ID of the parent Space. If not set, the parent resource will be the Organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#space GoogleApigeeApiProduct#space}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApigeeApiProductTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts">GoogleApigeeApiProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#timeouts GoogleApigeeApiProduct#timeouts}

---

### GoogleApigeeApiProductGraphqlOperationGroup <a name="GoogleApigeeApiProductGraphqlOperationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductGraphqlOperationGroup: googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup.property.operationConfigs">operationConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>[]</code> | operation_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup.property.operationConfigType">operationConfigType</a></code> | <code>string</code> | Flag that specifes whether the configuration is for Apigee API proxy or a remote service. |

---

##### `operationConfigs`<sup>Optional</sup> <a name="operationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup.property.operationConfigs"></a>

```typescript
public readonly operationConfigs: IResolvable | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>[]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_configs GoogleApigeeApiProduct#operation_configs}

---

##### `operationConfigType`<sup>Optional</sup> <a name="operationConfigType" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup.property.operationConfigType"></a>

```typescript
public readonly operationConfigType: string;
```

- *Type:* string

Flag that specifes whether the configuration is for Apigee API proxy or a remote service.

Valid values include proxy or remoteservice. Defaults to proxy. Set to proxy when Apigee API proxies are associated with the API product. Set to remoteservice when non-Apigee proxies like Istio-Envoy are associated with the API product. Possible values: ["proxy", "remoteservice"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_config_type GoogleApigeeApiProduct#operation_config_type}

---

### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductGraphqlOperationGroupOperationConfigs: googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.property.apiSource">apiSource</a></code> | <code>string</code> | Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.property.attributes">attributes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>[]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.property.operations">operations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>[]</code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a></code> | quota block. |

---

##### `apiSource`<sup>Optional</sup> <a name="apiSource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.property.apiSource"></a>

```typescript
public readonly apiSource: string;
```

- *Type:* string

Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#api_source GoogleApigeeApiProduct#api_source}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.property.attributes"></a>

```typescript
public readonly attributes: IResolvable | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>[]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#attributes GoogleApigeeApiProduct#attributes}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.property.operations"></a>

```typescript
public readonly operations: IResolvable | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>[]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operations GoogleApigeeApiProduct#operations}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs.property.quota"></a>

```typescript
public readonly quota: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota GoogleApigeeApiProduct#quota}

---

### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes: googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.name">name</a></code> | <code>string</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.value">value</a></code> | <code>string</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#name GoogleApigeeApiProduct#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#value GoogleApigeeApiProduct#value}

---

### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations: googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operation">operation</a></code> | <code>string</code> | GraphQL operation name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operationTypes">operationTypes</a></code> | <code>string[]</code> | Required. GraphQL operation types. Valid values include query or mutation. Note: Apigee does not currently support subscription types. |

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

GraphQL operation name.

The name and operation type will be used to apply quotas. If no name is specified, the quota will be applied to all GraphQL operations irrespective of their operation names in the payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation GoogleApigeeApiProduct#operation}

---

##### `operationTypes`<sup>Optional</sup> <a name="operationTypes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations.property.operationTypes"></a>

```typescript
public readonly operationTypes: string[];
```

- *Type:* string[]

Required. GraphQL operation types. Valid values include query or mutation. Note: Apigee does not currently support subscription types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_types GoogleApigeeApiProduct#operation_types}

---

### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota: googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.interval">interval</a></code> | <code>string</code> | Required. Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.limit">limit</a></code> | <code>string</code> | Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.timeUnit">timeUnit</a></code> | <code>string</code> | Time unit defined for the interval. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#interval GoogleApigeeApiProduct#interval}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.limit"></a>

```typescript
public readonly limit: string;
```

- *Type:* string

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#limit GoogleApigeeApiProduct#limit}

---

##### `timeUnit`<sup>Optional</sup> <a name="timeUnit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#time_unit GoogleApigeeApiProduct#time_unit}

---

### GoogleApigeeApiProductGrpcOperationGroup <a name="GoogleApigeeApiProductGrpcOperationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductGrpcOperationGroup: googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup.property.operationConfigs">operationConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>[]</code> | operation_configs block. |

---

##### `operationConfigs`<sup>Optional</sup> <a name="operationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup.property.operationConfigs"></a>

```typescript
public readonly operationConfigs: IResolvable | GoogleApigeeApiProductGrpcOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>[]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_configs GoogleApigeeApiProduct#operation_configs}

---

### GoogleApigeeApiProductGrpcOperationGroupOperationConfigs <a name="GoogleApigeeApiProductGrpcOperationGroupOperationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductGrpcOperationGroupOperationConfigs: googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.apiSource">apiSource</a></code> | <code>string</code> | Required. Name of the API proxy with which the gRPC operation and quota are associated. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.attributes">attributes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>[]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.methods">methods</a></code> | <code>string[]</code> | List of unqualified gRPC method names for the proxy to which quota will be applied. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.service">service</a></code> | <code>string</code> | Required. |

---

##### `apiSource`<sup>Optional</sup> <a name="apiSource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.apiSource"></a>

```typescript
public readonly apiSource: string;
```

- *Type:* string

Required. Name of the API proxy with which the gRPC operation and quota are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#api_source GoogleApigeeApiProduct#api_source}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.attributes"></a>

```typescript
public readonly attributes: IResolvable | GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>[]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#attributes GoogleApigeeApiProduct#attributes}

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

List of unqualified gRPC method names for the proxy to which quota will be applied.

If this field is empty, the Quota will apply to all operations on the gRPC service defined on the proxy.

Example: Given a proxy that is configured to serve com.petstore.PetService, the methods com.petstore.PetService.ListPets and com.petstore.PetService.GetPet would be specified here as simply ["ListPets", "GetPet"].

Note: Currently, you can specify only a single GraphQLOperation. Specifying more than one will cause the operation to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#methods GoogleApigeeApiProduct#methods}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.quota"></a>

```typescript
public readonly quota: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota GoogleApigeeApiProduct#quota}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Required.

gRPC Service name associated to be associated with the API proxy, on which quota rules can be applied upon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#service GoogleApigeeApiProduct#service}

---

### GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes <a name="GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes: googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.name">name</a></code> | <code>string</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.value">value</a></code> | <code>string</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#name GoogleApigeeApiProduct#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#value GoogleApigeeApiProduct#value}

---

### GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota <a name="GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductGrpcOperationGroupOperationConfigsQuota: googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.interval">interval</a></code> | <code>string</code> | Required. Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.limit">limit</a></code> | <code>string</code> | Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.timeUnit">timeUnit</a></code> | <code>string</code> | Time unit defined for the interval. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#interval GoogleApigeeApiProduct#interval}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.limit"></a>

```typescript
public readonly limit: string;
```

- *Type:* string

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#limit GoogleApigeeApiProduct#limit}

---

##### `timeUnit`<sup>Optional</sup> <a name="timeUnit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#time_unit GoogleApigeeApiProduct#time_unit}

---

### GoogleApigeeApiProductOperationGroup <a name="GoogleApigeeApiProductOperationGroup" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductOperationGroup: googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup.property.operationConfigs">operationConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>[]</code> | operation_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup.property.operationConfigType">operationConfigType</a></code> | <code>string</code> | Flag that specifes whether the configuration is for Apigee API proxy or a remote service. |

---

##### `operationConfigs`<sup>Optional</sup> <a name="operationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup.property.operationConfigs"></a>

```typescript
public readonly operationConfigs: IResolvable | GoogleApigeeApiProductOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>[]

operation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_configs GoogleApigeeApiProduct#operation_configs}

---

##### `operationConfigType`<sup>Optional</sup> <a name="operationConfigType" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup.property.operationConfigType"></a>

```typescript
public readonly operationConfigType: string;
```

- *Type:* string

Flag that specifes whether the configuration is for Apigee API proxy or a remote service.

Valid values include proxy or remoteservice. Defaults to proxy. Set to proxy when Apigee API proxies are associated with the API product. Set to remoteservice when non-Apigee proxies like Istio-Envoy are associated with the API product. Possible values: ["proxy", "remoteservice"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operation_config_type GoogleApigeeApiProduct#operation_config_type}

---

### GoogleApigeeApiProductOperationGroupOperationConfigs <a name="GoogleApigeeApiProductOperationGroupOperationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductOperationGroupOperationConfigs: googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.property.apiSource">apiSource</a></code> | <code>string</code> | Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.property.attributes">attributes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>[]</code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.property.operations">operations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>[]</code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota">GoogleApigeeApiProductOperationGroupOperationConfigsQuota</a></code> | quota block. |

---

##### `apiSource`<sup>Optional</sup> <a name="apiSource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.property.apiSource"></a>

```typescript
public readonly apiSource: string;
```

- *Type:* string

Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#api_source GoogleApigeeApiProduct#api_source}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.property.attributes"></a>

```typescript
public readonly attributes: IResolvable | GoogleApigeeApiProductOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>[]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#attributes GoogleApigeeApiProduct#attributes}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.property.operations"></a>

```typescript
public readonly operations: IResolvable | GoogleApigeeApiProductOperationGroupOperationConfigsOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>[]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#operations GoogleApigeeApiProduct#operations}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs.property.quota"></a>

```typescript
public readonly quota: GoogleApigeeApiProductOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota">GoogleApigeeApiProductOperationGroupOperationConfigsQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#quota GoogleApigeeApiProduct#quota}

---

### GoogleApigeeApiProductOperationGroupOperationConfigsAttributes <a name="GoogleApigeeApiProductOperationGroupOperationConfigsAttributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductOperationGroupOperationConfigsAttributes: googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes.property.name">name</a></code> | <code>string</code> | Key of the attribute. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes.property.value">value</a></code> | <code>string</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#name GoogleApigeeApiProduct#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#value GoogleApigeeApiProduct#value}

---

### GoogleApigeeApiProductOperationGroupOperationConfigsOperations <a name="GoogleApigeeApiProductOperationGroupOperationConfigsOperations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductOperationGroupOperationConfigsOperations: googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations.property.methods">methods</a></code> | <code>string[]</code> | Methods refers to the REST verbs, when none specified, all verb types are allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations.property.resource">resource</a></code> | <code>string</code> | Required. REST resource path associated with the API proxy or remote service. |

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

Methods refers to the REST verbs, when none specified, all verb types are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#methods GoogleApigeeApiProduct#methods}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Required. REST resource path associated with the API proxy or remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#resource GoogleApigeeApiProduct#resource}

---

### GoogleApigeeApiProductOperationGroupOperationConfigsQuota <a name="GoogleApigeeApiProductOperationGroupOperationConfigsQuota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductOperationGroupOperationConfigsQuota: googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota.property.interval">interval</a></code> | <code>string</code> | Required. Time interval over which the number of request messages is calculated. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota.property.limit">limit</a></code> | <code>string</code> | Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota.property.timeUnit">timeUnit</a></code> | <code>string</code> | Time unit defined for the interval. |

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Required. Time interval over which the number of request messages is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#interval GoogleApigeeApiProduct#interval}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota.property.limit"></a>

```typescript
public readonly limit: string;
```

- *Type:* string

Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#limit GoogleApigeeApiProduct#limit}

---

##### `timeUnit`<sup>Optional</sup> <a name="timeUnit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

Time unit defined for the interval.

Valid values include second, minute, hour, day, month or year. If limit and interval are valid, the default value is hour; otherwise, the default is null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#time_unit GoogleApigeeApiProduct#time_unit}

---

### GoogleApigeeApiProductTimeouts <a name="GoogleApigeeApiProductTimeouts" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

const googleApigeeApiProductTimeouts: googleApigeeApiProduct.GoogleApigeeApiProductTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#create GoogleApigeeApiProduct#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#delete GoogleApigeeApiProduct#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#update GoogleApigeeApiProduct#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#create GoogleApigeeApiProduct#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#delete GoogleApigeeApiProduct#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_apigee_api_product#update GoogleApigeeApiProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeApiProductAttributesList <a name="GoogleApigeeApiProductAttributesList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.get"></a>

```typescript
public get(index: number): GoogleApigeeApiProductAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>[]

---


### GoogleApigeeApiProductAttributesOutputReference <a name="GoogleApigeeApiProductAttributesOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductAttributes">GoogleApigeeApiProductAttributes</a>

---


### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.get"></a>

```typescript
public get(index: number): GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>[]

---


### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>

---


### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.get"></a>

```typescript
public get(index: number): GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>[]

---


### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.get"></a>

```typescript
public get(index: number): GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>[]

---


### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperationTypes">resetOperationTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperation` <a name="resetOperation" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperation"></a>

```typescript
public resetOperation(): void
```

##### `resetOperationTypes` <a name="resetOperationTypes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.resetOperationTypes"></a>

```typescript
public resetOperationTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypesInput">operationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypes">operationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `operationTypesInput`<sup>Optional</sup> <a name="operationTypesInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypesInput"></a>

```typescript
public readonly operationTypesInput: string[];
```

- *Type:* string[]

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `operationTypes`<sup>Required</sup> <a name="operationTypes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.operationTypes"></a>

```typescript
public readonly operationTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>

---


### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetApiSource">resetApiSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetQuota">resetQuota</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putAttributes"></a>

```typescript
public putAttributes(value: IResolvable | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putAttributes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>[]

---

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putOperations"></a>

```typescript
public putOperations(value: IResolvable | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putOperations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>[]

---

##### `putQuota` <a name="putQuota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota"></a>

```typescript
public putQuota(value: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

---

##### `resetApiSource` <a name="resetApiSource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetApiSource"></a>

```typescript
public resetApiSource(): void
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetOperations"></a>

```typescript
public resetOperations(): void
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.resetQuota"></a>

```typescript
public resetQuota(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSourceInput">apiSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributesInput">attributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operationsInput">operationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quotaInput">quotaInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSource">apiSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributesList</a>

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operations"></a>

```typescript
public readonly operations: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperationsList</a>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quota"></a>

```typescript
public readonly quota: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference</a>

---

##### `apiSourceInput`<sup>Optional</sup> <a name="apiSourceInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSourceInput"></a>

```typescript
public readonly apiSourceInput: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsAttributes</a>[]

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.operationsInput"></a>

```typescript
public readonly operationsInput: IResolvable | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOperations</a>[]

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.quotaInput"></a>

```typescript
public readonly quotaInput: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

---

##### `apiSource`<sup>Required</sup> <a name="apiSource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.apiSource"></a>

```typescript
public readonly apiSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>

---


### GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference <a name="GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit">resetTimeUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetTimeUnit` <a name="resetTimeUnit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit"></a>

```typescript
public resetTimeUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limitInput">limitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput">timeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limit">limit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit">timeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: string;
```

- *Type:* string

---

##### `timeUnitInput`<sup>Optional</sup> <a name="timeUnitInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput"></a>

```typescript
public readonly timeUnitInput: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.limit"></a>

```typescript
public readonly limit: string;
```

- *Type:* string

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuotaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsQuota</a>

---


### GoogleApigeeApiProductGraphqlOperationGroupOutputReference <a name="GoogleApigeeApiProductGraphqlOperationGroupOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.putOperationConfigs">putOperationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigs">resetOperationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigType">resetOperationConfigType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperationConfigs` <a name="putOperationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.putOperationConfigs"></a>

```typescript
public putOperationConfigs(value: IResolvable | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.putOperationConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>[]

---

##### `resetOperationConfigs` <a name="resetOperationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigs"></a>

```typescript
public resetOperationConfigs(): void
```

##### `resetOperationConfigType` <a name="resetOperationConfigType" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.resetOperationConfigType"></a>

```typescript
public resetOperationConfigType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigs">operationConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigsInput">operationConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigTypeInput">operationConfigTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigType">operationConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup">GoogleApigeeApiProductGraphqlOperationGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationConfigs`<sup>Required</sup> <a name="operationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigs"></a>

```typescript
public readonly operationConfigs: GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigsList</a>

---

##### `operationConfigsInput`<sup>Optional</sup> <a name="operationConfigsInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigsInput"></a>

```typescript
public readonly operationConfigsInput: IResolvable | GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs">GoogleApigeeApiProductGraphqlOperationGroupOperationConfigs</a>[]

---

##### `operationConfigTypeInput`<sup>Optional</sup> <a name="operationConfigTypeInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigTypeInput"></a>

```typescript
public readonly operationConfigTypeInput: string;
```

- *Type:* string

---

##### `operationConfigType`<sup>Required</sup> <a name="operationConfigType" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.operationConfigType"></a>

```typescript
public readonly operationConfigType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApigeeApiProductGraphqlOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGraphqlOperationGroup">GoogleApigeeApiProductGraphqlOperationGroup</a>

---


### GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList <a name="GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.get"></a>

```typescript
public get(index: number): GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>[]

---


### GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference <a name="GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>

---


### GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList <a name="GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.get"></a>

```typescript
public get(index: number): GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductGrpcOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>[]

---


### GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference <a name="GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetApiSource">resetApiSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetMethods">resetMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putAttributes"></a>

```typescript
public putAttributes(value: IResolvable | GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putAttributes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>[]

---

##### `putQuota` <a name="putQuota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota"></a>

```typescript
public putQuota(value: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

---

##### `resetApiSource` <a name="resetApiSource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetApiSource"></a>

```typescript
public resetApiSource(): void
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetMethods` <a name="resetMethods" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetMethods"></a>

```typescript
public resetMethods(): void
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetQuota"></a>

```typescript
public resetQuota(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSourceInput">apiSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributesInput">attributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methodsInput">methodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quotaInput">quotaInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSource">apiSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methods">methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributesList</a>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quota"></a>

```typescript
public readonly quota: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference</a>

---

##### `apiSourceInput`<sup>Optional</sup> <a name="apiSourceInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSourceInput"></a>

```typescript
public readonly apiSourceInput: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsAttributes</a>[]

---

##### `methodsInput`<sup>Optional</sup> <a name="methodsInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methodsInput"></a>

```typescript
public readonly methodsInput: string[];
```

- *Type:* string[]

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.quotaInput"></a>

```typescript
public readonly quotaInput: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `apiSource`<sup>Required</sup> <a name="apiSource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.apiSource"></a>

```typescript
public readonly apiSource: string;
```

- *Type:* string

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductGrpcOperationGroupOperationConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>

---


### GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference <a name="GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit">resetTimeUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetTimeUnit` <a name="resetTimeUnit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit"></a>

```typescript
public resetTimeUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limitInput">limitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput">timeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limit">limit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit">timeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: string;
```

- *Type:* string

---

##### `timeUnitInput`<sup>Optional</sup> <a name="timeUnitInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput"></a>

```typescript
public readonly timeUnitInput: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.limit"></a>

```typescript
public readonly limit: string;
```

- *Type:* string

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuotaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsQuota</a>

---


### GoogleApigeeApiProductGrpcOperationGroupOutputReference <a name="GoogleApigeeApiProductGrpcOperationGroupOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.putOperationConfigs">putOperationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.resetOperationConfigs">resetOperationConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperationConfigs` <a name="putOperationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.putOperationConfigs"></a>

```typescript
public putOperationConfigs(value: IResolvable | GoogleApigeeApiProductGrpcOperationGroupOperationConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.putOperationConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>[]

---

##### `resetOperationConfigs` <a name="resetOperationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.resetOperationConfigs"></a>

```typescript
public resetOperationConfigs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigs">operationConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigsInput">operationConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup">GoogleApigeeApiProductGrpcOperationGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationConfigs`<sup>Required</sup> <a name="operationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigs"></a>

```typescript
public readonly operationConfigs: GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList">GoogleApigeeApiProductGrpcOperationGroupOperationConfigsList</a>

---

##### `operationConfigsInput`<sup>Optional</sup> <a name="operationConfigsInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.operationConfigsInput"></a>

```typescript
public readonly operationConfigsInput: IResolvable | GoogleApigeeApiProductGrpcOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOperationConfigs">GoogleApigeeApiProductGrpcOperationGroupOperationConfigs</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApigeeApiProductGrpcOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductGrpcOperationGroup">GoogleApigeeApiProductGrpcOperationGroup</a>

---


### GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList <a name="GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.get"></a>

```typescript
public get(index: number): GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>[]

---


### GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference <a name="GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductOperationGroupOperationConfigsAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>

---


### GoogleApigeeApiProductOperationGroupOperationConfigsList <a name="GoogleApigeeApiProductOperationGroupOperationConfigsList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.get"></a>

```typescript
public get(index: number): GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>[]

---


### GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList <a name="GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.get"></a>

```typescript
public get(index: number): GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductOperationGroupOperationConfigsOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>[]

---


### GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference <a name="GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetMethods">resetMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethods` <a name="resetMethods" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetMethods"></a>

```typescript
public resetMethods(): void
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methodsInput">methodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methods">methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `methodsInput`<sup>Optional</sup> <a name="methodsInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methodsInput"></a>

```typescript
public readonly methodsInput: string[];
```

- *Type:* string[]

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductOperationGroupOperationConfigsOperations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>

---


### GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference <a name="GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resetApiSource">resetApiSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resetQuota">resetQuota</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putAttributes"></a>

```typescript
public putAttributes(value: IResolvable | GoogleApigeeApiProductOperationGroupOperationConfigsAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putAttributes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>[]

---

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putOperations"></a>

```typescript
public putOperations(value: IResolvable | GoogleApigeeApiProductOperationGroupOperationConfigsOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putOperations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>[]

---

##### `putQuota` <a name="putQuota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota"></a>

```typescript
public putQuota(value: GoogleApigeeApiProductOperationGroupOperationConfigsQuota): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota">GoogleApigeeApiProductOperationGroupOperationConfigsQuota</a>

---

##### `resetApiSource` <a name="resetApiSource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resetApiSource"></a>

```typescript
public resetApiSource(): void
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resetOperations"></a>

```typescript
public resetOperations(): void
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.resetQuota"></a>

```typescript
public resetQuota(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList">GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList">GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quota">quota</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference">GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSourceInput">apiSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributesInput">attributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operationsInput">operationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quotaInput">quotaInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota">GoogleApigeeApiProductOperationGroupOperationConfigsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSource">apiSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList">GoogleApigeeApiProductOperationGroupOperationConfigsAttributesList</a>

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operations"></a>

```typescript
public readonly operations: GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList">GoogleApigeeApiProductOperationGroupOperationConfigsOperationsList</a>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quota"></a>

```typescript
public readonly quota: GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference">GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference</a>

---

##### `apiSourceInput`<sup>Optional</sup> <a name="apiSourceInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSourceInput"></a>

```typescript
public readonly apiSourceInput: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | GoogleApigeeApiProductOperationGroupOperationConfigsAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsAttributes">GoogleApigeeApiProductOperationGroupOperationConfigsAttributes</a>[]

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.operationsInput"></a>

```typescript
public readonly operationsInput: IResolvable | GoogleApigeeApiProductOperationGroupOperationConfigsOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOperations">GoogleApigeeApiProductOperationGroupOperationConfigsOperations</a>[]

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.quotaInput"></a>

```typescript
public readonly quotaInput: GoogleApigeeApiProductOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota">GoogleApigeeApiProductOperationGroupOperationConfigsQuota</a>

---

##### `apiSource`<sup>Required</sup> <a name="apiSource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.apiSource"></a>

```typescript
public readonly apiSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductOperationGroupOperationConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>

---


### GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference <a name="GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit">resetTimeUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetLimit"></a>

```typescript
public resetLimit(): void
```

##### `resetTimeUnit` <a name="resetTimeUnit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.resetTimeUnit"></a>

```typescript
public resetTimeUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limitInput">limitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput">timeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limit">limit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit">timeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota">GoogleApigeeApiProductOperationGroupOperationConfigsQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limitInput"></a>

```typescript
public readonly limitInput: string;
```

- *Type:* string

---

##### `timeUnitInput`<sup>Optional</sup> <a name="timeUnitInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnitInput"></a>

```typescript
public readonly timeUnitInput: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.limit"></a>

```typescript
public readonly limit: string;
```

- *Type:* string

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuotaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApigeeApiProductOperationGroupOperationConfigsQuota;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsQuota">GoogleApigeeApiProductOperationGroupOperationConfigsQuota</a>

---


### GoogleApigeeApiProductOperationGroupOutputReference <a name="GoogleApigeeApiProductOperationGroupOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.putOperationConfigs">putOperationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.resetOperationConfigs">resetOperationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.resetOperationConfigType">resetOperationConfigType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperationConfigs` <a name="putOperationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.putOperationConfigs"></a>

```typescript
public putOperationConfigs(value: IResolvable | GoogleApigeeApiProductOperationGroupOperationConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.putOperationConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>[]

---

##### `resetOperationConfigs` <a name="resetOperationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.resetOperationConfigs"></a>

```typescript
public resetOperationConfigs(): void
```

##### `resetOperationConfigType` <a name="resetOperationConfigType" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.resetOperationConfigType"></a>

```typescript
public resetOperationConfigType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.operationConfigs">operationConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList">GoogleApigeeApiProductOperationGroupOperationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.operationConfigsInput">operationConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.operationConfigTypeInput">operationConfigTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.operationConfigType">operationConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup">GoogleApigeeApiProductOperationGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationConfigs`<sup>Required</sup> <a name="operationConfigs" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.operationConfigs"></a>

```typescript
public readonly operationConfigs: GoogleApigeeApiProductOperationGroupOperationConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigsList">GoogleApigeeApiProductOperationGroupOperationConfigsList</a>

---

##### `operationConfigsInput`<sup>Optional</sup> <a name="operationConfigsInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.operationConfigsInput"></a>

```typescript
public readonly operationConfigsInput: IResolvable | GoogleApigeeApiProductOperationGroupOperationConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOperationConfigs">GoogleApigeeApiProductOperationGroupOperationConfigs</a>[]

---

##### `operationConfigTypeInput`<sup>Optional</sup> <a name="operationConfigTypeInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.operationConfigTypeInput"></a>

```typescript
public readonly operationConfigTypeInput: string;
```

- *Type:* string

---

##### `operationConfigType`<sup>Required</sup> <a name="operationConfigType" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.operationConfigType"></a>

```typescript
public readonly operationConfigType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApigeeApiProductOperationGroup;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductOperationGroup">GoogleApigeeApiProductOperationGroup</a>

---


### GoogleApigeeApiProductTimeoutsOutputReference <a name="GoogleApigeeApiProductTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleApigeeApiProduct } from '@cdktf/provider-google-beta'

new googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts">GoogleApigeeApiProductTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeApiProductTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeApiProduct.GoogleApigeeApiProductTimeouts">GoogleApigeeApiProductTimeouts</a>

---



